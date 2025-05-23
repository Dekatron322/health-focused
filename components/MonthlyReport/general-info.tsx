import Link from "next/link"
import React, { useState } from "react"
import { FaCloudArrowUp } from "react-icons/fa6"
import { IoIosArrowDropdown } from "react-icons/io"
import { useDropzone } from "react-dropzone"

interface PreviewFile extends File {
  preview: string
}

interface GeneralInfoProps {
  onSuccess: () => void // Define onSuccess as a function that returns void
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ onSuccess }) => {
  const [files, setFiles] = useState<PreviewFile[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Retrieve the service user ID from localStorage
    const serviceUserId = localStorage.getItem("serviceUserId")

    if (!serviceUserId) {
      console.error("Service User ID not found in localStorage")
      return
    }

    // Gather form data
    const formData = {
      title: "Monthly Report", // You can modify this to be dynamic if needed
      service_user_name: (document.getElementById("serviceUserName") as HTMLInputElement).value,
      updated_by: (document.getElementById("updatedBy") as HTMLInputElement).value,
      placement: (document.getElementById("placement") as HTMLInputElement).value,
      start: (document.getElementById("staffOnDuty") as HTMLInputElement).value,
      end: (document.getElementById("staffOnDuty") as HTMLInputElement).value,
      note: (document.getElementById("email") as HTMLTextAreaElement).value,
      status: true,
      pub_date: new Date().toISOString(),
    }

    try {
      const response = await fetch(
        `https://hf-api.craftandurban.com/service-user/add-monthly-report-g-to-service-user/${serviceUserId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        console.log("Weekly report added successfully")
        onSuccess() // Move to the next tab
      } else {
        console.error("Failed to add weekly report")
      }
    } catch (error) {
      console.error("Error adding weekly report:", error)
    }
  }

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

  return (
    <div className="flex w-full">
      <form className="mt-4 flex w-full flex-col rounded-md bg-white p-4" onSubmit={handleSubmit}>
        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="serviceUserName" className="label-title">
            Name of Service User
          </label>
          <div className="input-field ">
            <input
              type="text"
              id="serviceUserName"
              placeholder="Enter name"
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="placement" className="label-title">
            Update by
          </label>
          <div className="input-field w-40">
            <input
              type="text"
              id="placement"
              placeholder="Type and select your name"
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="updatedBy" className="label-title">
            Placement
          </label>
          <div className="input-field w-40">
            <input
              type="text"
              id="updatedBy"
              placeholder="Select the Placement "
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
            />
            <IoIosArrowDropdown size={18} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="mb-3 flex w-full flex-col items-start">
            <label htmlFor="staffOnDuty" className="label-title">
              Report Start Date
            </label>
            <div className="input-field w-40">
              <input
                type="date"
                id="staffOnDuty"
                placeholder="Separate names by comma"
                className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="mb-3 flex w-full flex-col items-start">
            <label htmlFor="staffOnDuty" className="label-title">
              Report End Date
            </label>
            <div className="input-field w-40">
              <input
                type="date"
                id="staffOnDuty"
                placeholder="Separate names by comma"
                className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="email" className="label-title ">
            Note
          </label>
          <div className="textarea-field ">
            <textarea
              id="email"
              placeholder="Separate names by comma"
              className="bg-transparent outline-none focus:outline-none"
              style={{ width: "100%", background: "transparent" }}
            ></textarea>
          </div>
        </div>

        <div className=" flex w-full flex-col items-start">
          <label htmlFor="addMedia" className="label-title ">
            Add Media
          </label>
          <div
            {...getRootProps({
              className: "flex w-full flex-col items-center justify-center rounded-xl border-[1px] py-4 cursor-pointer",
            })}
          >
            <input {...getInputProps()} />
            <FaCloudArrowUp className="text-3xl" />
            <p className="text-sm">Drag and Drop files here or Browse</p>
            <p className="px-2 text-center text-xs">Supported files are JPG, PNG, MP4, PDF, DOC, XLXS, PPTX</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {files.map((file) => (
              <div key={file.name} className="relative h-20 w-20">
                <img src={file.preview} alt={file.name} className="h-full w-full rounded object-cover" />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
        >
          SAVE AND CONTINUE
        </button>
      </form>
    </div>
  )
}

export default GeneralInfo
