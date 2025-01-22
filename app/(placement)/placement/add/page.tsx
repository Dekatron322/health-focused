"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DashboardNav from "components/Navbar/DashboardNav"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import { FaCloudArrowUp } from "react-icons/fa6"
import { IoIosArrowDropleft } from "react-icons/io"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function AddPlacementUser() {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [postCode, setPostCode] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [files, setFiles] = useState<PreviewFile[]>([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()

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
    },
  })

  const handleBackButtonClick = () => {
    router.back()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const payload = {
      name,
      locaton: location,
      post_code: postCode,
      bedrooms,
      addition_info: additionalInfo,
      status: true, // Assuming it's always active when added
      pub_date: new Date().toISOString(),
    }

    try {
      const response = await fetch("https://health-focused.fyber.site/placement/placement/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        alert("Placement added successfully!")
        router.push("/placement/")
      } else {
        alert("Failed to add placement. Please try again.")
      }
    } catch (error) {
      console.error("Error adding placement:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="h-full">
      <div className="mx-auto flex min-h-screen bg-[#171818]">
        <div className="flex w-full flex-col">
          <DashboardNav />
          <div className="justify-center gap-3 max-md:px-3 md:mt-8 md:flex md:flex-row">
            <button
              onClick={handleBackButtonClick}
              className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
            >
              <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
              <p className="text-[#0085FF]">GO BACK</p>
            </button>
            <div className="mb-6 flex flex-col rounded-md bg-[#f5f5f5] p-6 md:w-1/2 2xl:w-1/3">
              <div className="flex w-full justify-between">
                <p className="text-lg font-bold">New Placement</p>
                <p className="text-xs">{new Date().toLocaleDateString()}</p>
              </div>
              <form onSubmit={handleSubmit} className="mt-4 flex w-full flex-col">
                <div className="mb-3 flex flex-col">
                  <label htmlFor="name" className="label-title">
                    Name of Placement
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    className="input-field"
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label htmlFor="location" className="label-title">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                    className="input-field"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="mb-3 flex flex-col">
                    <label htmlFor="postCode" className="label-title">
                      Post Code
                    </label>
                    <input
                      type="text"
                      id="postCode"
                      value={postCode}
                      onChange={(e) => setPostCode(e.target.value)}
                      placeholder="Enter post code"
                      className="input-field"
                    />
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label htmlFor="bedrooms" className="label-title">
                      Number of Bedrooms
                    </label>
                    <input
                      type="text"
                      id="bedrooms"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      placeholder="Enter number"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="mb-3 flex flex-col">
                  <label htmlFor="additionalInfo" className="label-title">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    placeholder="Add details"
                    className="textarea-field"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 flex h-12 w-full items-center justify-center rounded bg-[#0052FF] text-white"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add Placement"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
