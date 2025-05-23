// components/Settings/ProfileTab.tsx
"use client"
import { useDropzone } from "react-dropzone"
import { FaCloudArrowUp } from "react-icons/fa6"
import Link from "next/link"

interface ProfileTabProps {
  files: any[]
  getRootProps: any
  getInputProps: any
}

export const ProfileTab = ({ files, getRootProps, getInputProps }: ProfileTabProps) => {
  return (
    <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-4">
      <div className="mb-3 flex w-full flex-col items-start">
        <label htmlFor="serviceUserName" className="label-title">
          Name
        </label>
        <div className="input-field bg-white">
          <input
            type="text"
            id="serviceUserName"
            placeholder="Enter name"
            className="w-40 bg-transparent outline-none focus:outline-none"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="mb-3 flex w-full flex-col items-start">
        <label htmlFor="placement" className="label-title">
          Organisation Name
        </label>
        <div className="input-field w-40 bg-white">
          <input
            type="text"
            id="placement"
            placeholder="Type a name"
            className="w-40 bg-transparent outline-none focus:outline-none"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="mb-3 flex w-full flex-col items-start">
        <label htmlFor="updatedBy" className="label-title">
          Email
        </label>
        <div className="input-field w-40 bg-white">
          <input
            type="email"
            id="updatedBy"
            placeholder="Select the Placement "
            className="w-40 bg-transparent outline-none focus:outline-none"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className=" flex w-full flex-col items-start">
        <label htmlFor="addMedia" className="label-title ">
          Profile Image
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
      <Link
        href="/dashboard/post/"
        type="button"
        className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
      >
        SAVE AND CONTINUE
      </Link>
    </form>
  )
}
