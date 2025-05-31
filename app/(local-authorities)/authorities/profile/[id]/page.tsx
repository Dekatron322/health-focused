"use client"
import { useState, useEffect } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { FaCloudArrowUp } from "react-icons/fa6"
import { useDropzone } from "react-dropzone"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"

interface LocalAuthority {
  id: string
  placements: any[]
  name: string
  email: string
  phone: string
  bedrooms: string
  file: string
  status: boolean
  pub_date: string
}

interface PreviewFile extends File {
  preview: string
}

export default function LocalAuthorityDetails() {
  const [localAuthority, setLocalAuthority] = useState<LocalAuthority | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [files, setFiles] = useState<PreviewFile[]>([])
  const params = useParams()
  const router = useRouter()

  useEffect(() => {
    const fetchLocalAuthority = async () => {
      try {
        const response = await fetch(`https://hf-api.craftandurban.com/local-authority/local-authority/${params.id}/`)
        if (!response.ok) {
          throw new Error("Failed to fetch local authority")
        }
        const data = await response.json()
        setLocalAuthority(data as any)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchLocalAuthority()
    }
  }, [params.id])

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

  const handleBackButtonClick = () => {
    router.back()
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#171818]">
        <p className="text-white">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#171818]">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  if (!localAuthority) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#171818]">
        <p className="text-white">Local authority not found</p>
      </div>
    )
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
                  <p className="text-lg font-semibold max-md:text-xl">Local Authority Details</p>
                  <p className="text-xs">{new Date(localAuthority.pub_date).toLocaleDateString()}</p>
                </div>
                <div className="flex w-full flex-col">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="serviceUserName" className="label-title">
                      Name of Local Authority
                    </label>
                    <div className="input-field bg-white">
                      <input
                        type="text"
                        id="serviceUserName"
                        value={localAuthority.name}
                        readOnly
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="updatedBy" className="label-title">
                      Email Address
                    </label>
                    <div className="input-field w-40 bg-white">
                      <input
                        type="text"
                        id="updatedBy"
                        value={localAuthority.email}
                        readOnly
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="mb-3 flex w-full flex-col items-start">
                      <label htmlFor="staffOnDuty" className="label-title">
                        Phone Number
                      </label>
                      <div className="input-field w-40 bg-white">
                        <input
                          type="text"
                          id="staffOnDuty"
                          value={localAuthority.phone}
                          readOnly
                          className="w-40 bg-transparent outline-none focus:outline-none"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="mb-6 flex w-full flex-col items-start">
                      <label htmlFor="email" className="label-title">
                        Number of Bedrooms
                      </label>
                      <div className="input-field w-40 bg-white">
                        <input
                          type="text"
                          id="bedrooms"
                          value={localAuthority.bedrooms}
                          readOnly
                          className="w-40 bg-transparent outline-none focus:outline-none"
                          style={{ width: "100%" }}
                        />
                        <IoIosArrowDropdown size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6 flex w-full flex-col items-start">
                    <label htmlFor="addMedia" className="label-title">
                      Attached File
                    </label>
                    {localAuthority.file && (
                      <div className="mt-2">
                        <a
                          href={`https://hf-api.craftandurban.com${localAuthority.file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          View File
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
                      onClick={() => router.push(`/dashboard/local-authority/edit/${localAuthority.id}`)}
                    >
                      EDIT
                    </button>
                    <button
                      type="button"
                      className="flex h-[52px] w-full items-center justify-center rounded-lg bg-gray-500 p-3 text-sm text-white"
                      onClick={handleBackButtonClick}
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
