"use client"
import { useState, useCallback } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { IoIosArrowDropleft } from "react-icons/io"
import { FaCloudArrowUp } from "react-icons/fa6"
import { useDropzone } from "react-dropzone"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface PreviewFile extends File {
  preview: string
}

export default function NewLogs() {
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [files, setFiles] = useState<PreviewFile[]>([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const router = useRouter()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": [],
    },
    maxFiles: 1,
  })

  const handleBackButtonClick = () => {
    router.back()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !description || files.length === 0) {
      setSubmitError("Please fill all fields and upload a file")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)

      // We know files[0] exists because we checked files.length !== 0
      const fileToUpload = files[0] as File
      formData.append("file", fileToUpload)

      const response = await fetch("https://hf-api.craftandurban.com/document/document/", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      router.push("/dashboard/post/")
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to submit document")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen bg-[#171818]">
          <div className="flex w-full flex-col">
            <div>
              <DashboardNav />
            </div>
            <div className="justify-center gap-3 max-md:px-3 md:mt-8 md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className="mb-6 flex flex-col items-center gap-4 rounded-md border-[1px] bg-[#f5f5f5] p-6 md:w-1/2 2xl:w-1/3">
                <div className="flex w-full items-center justify-between">
                  <p className="text-lg font-semibold max-md:text-xl">New Document</p>
                  <p className="text-xs">{new Date().toLocaleDateString()}</p>
                </div>
                <form className="flex w-full flex-col" onSubmit={handleSubmit}>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="documentTitle" className="label-title">
                      Title of Document *
                    </label>
                    <div className="input-field bg-white">
                      <input
                        type="text"
                        id="documentTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter document title"
                        className="w-full bg-transparent outline-none focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="documentDescription" className="label-title">
                      Description *
                    </label>
                    <div className="input-field w-full bg-white">
                      <input
                        type="text"
                        id="documentDescription"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter document description"
                        className="w-full bg-transparent outline-none focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6 flex w-full flex-col items-start">
                    <label htmlFor="addMedia" className="label-title">
                      Add Document *
                    </label>
                    <div
                      {...getRootProps({
                        className:
                          "flex w-full bg-white flex-col items-center justify-center rounded-xl border-[1px] py-4 cursor-pointer",
                      })}
                    >
                      <input {...getInputProps()} />
                      <FaCloudArrowUp className="text-3xl" />
                      <p className="text-sm">Drag and Drop files here or Browse</p>
                      <p className="px-2 text-center text-xs">Supported files are JPG, PNG, PDF, DOC, XLXS, PPTX</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {files.map((file) => (
                        <div key={file.name} className="relative h-20 w-20">
                          {file.type.startsWith("image/") ? (
                            <img
                              src={file.preview}
                              alt={file.name}
                              className="h-full w-full rounded object-cover"
                              onLoad={() => URL.revokeObjectURL(file.preview)}
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center rounded bg-gray-200">
                              <span className="text-xs">{file.name}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {submitError && <div className="mb-4 text-sm text-red-500">{submitError}</div>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white disabled:opacity-50"
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
