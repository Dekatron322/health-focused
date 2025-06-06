"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { FaCloudArrowUp } from "react-icons/fa6"
import { useDropzone } from "react-dropzone"
import { useRouter } from "next/navigation"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function NewLogs() {
  const [files, setFiles] = useState<PreviewFile[]>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bedrooms: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "video/*": [],
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": [],
    },
  })

  const router = useRouter()

  const handleBackButtonClick = () => {
    router.back()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone || !formData.bedrooms || files.length === 0) {
      setError("All fields are required")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const data = new FormData()
      data.append("name", formData.name)
      data.append("email", formData.email)
      data.append("phone", formData.phone)
      data.append("bedrooms", formData.bedrooms)
      files.forEach((file) => {
        data.append("file", file)
      })

      const response = await fetch("https://hf-api.craftandurban.com/local-authority/local-authority/", {
        method: "POST",
        body: data,
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      const result = await response.json()
      router.push("/authorities/")
    } catch (err) {
      setError("An error occurred while submitting the form")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen bg-[#171818]">
          <div className="flex w-full  flex-col ">
            <div>
              <DashboardNav />
            </div>
            <div className="justify-center gap-3 max-md:px-3 md:mt-8  md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className="mb-6 flex flex-col items-center gap-4 rounded-md border-[1px] bg-[#f5f5f5] p-6 md:w-1/2 2xl:w-1/3">
                <div className="flex w-full items-center justify-between">
                  <p className="text-lg font-semibold max-md:text-xl">New Local Authority</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <form className=" flex w-full flex-col" onSubmit={handleSubmit}>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="name" className="label-title">
                      Name of Local Authority
                    </label>
                    <div className="input-field bg-white">
                      <input
                        type="text"
                        id="name"
                        placeholder="Type and select your name"
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="email" className="label-title">
                      Email Address
                    </label>
                    <div className="input-field w-40 bg-white">
                      <input
                        type="email"
                        id="email"
                        placeholder="Type and select your name"
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="mb-3 flex w-full flex-col items-start">
                      <label htmlFor="phone" className="label-title">
                        Phone Number
                      </label>
                      <div className="input-field w-40 bg-white">
                        <input
                          type="text"
                          id="phone"
                          placeholder="Type placement's post code"
                          className="w-40 bg-transparent outline-none focus:outline-none"
                          style={{ width: "100%" }}
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="mb-6 flex w-full flex-col items-start">
                      <label htmlFor="bedrooms" className="label-title ">
                        Number of Bedrooms
                      </label>
                      <div className="input-field w-40 bg-white">
                        <input
                          type="text"
                          id="bedrooms"
                          placeholder="Select a Number"
                          className="w-40 bg-transparent outline-none focus:outline-none"
                          style={{ width: "100%" }}
                          value={formData.bedrooms}
                          onChange={handleInputChange}
                        />
                        <IoIosArrowDropdown size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6 flex w-full flex-col items-start">
                    <label htmlFor="addMedia" className="label-title ">
                      Add Media
                    </label>
                    <div
                      {...getRootProps({
                        className:
                          "flex bg-white w-full flex-col items-center justify-center rounded-xl border-[1px] py-4 cursor-pointer",
                      })}
                    >
                      <input {...getInputProps()} />
                      <FaCloudArrowUp className="text-3xl" />
                      <p className="text-sm">Drag and Drop files here or Browse</p>
                      <p className="px-2 text-center text-xs">
                        Supported files are JPG, PNG, MP4, PDF, DOC, XLXS, PPTX
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {files.map((file) => (
                        <div key={file.name} className="relative h-20 w-20">
                          <img src={file.preview} alt={file.name} className="h-full w-full rounded object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {error && <p className="mb-4 text-red-500">{error}</p>}

                  <button
                    type="submit"
                    className="flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </form>
              </div>
            </div>

            {/* <Footer /> */}
          </div>
        </div>
      </section>
    </>
  )
}
