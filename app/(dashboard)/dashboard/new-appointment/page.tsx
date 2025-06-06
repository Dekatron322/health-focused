"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { FaCloudArrowUp } from "react-icons/fa6"
import { useDropzone } from "react-dropzone"
import { useRouter } from "next/navigation"
import Link from "next/link"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function NewLogs() {
  // Simulating user account existence with a state
  const [hasTransactions, setHasTransactions] = useState<boolean>(true)

  // Use an array of PreviewFile for files state
  const [files, setFiles] = useState<PreviewFile[]>([])

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

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            <DashboardNav />

            <div className=" justify-center gap-3 bg-[#171818]  max-md:px-3 md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="mt-8 flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className="my-8  flex flex-col items-center gap-4 rounded-md border-[1px] bg-white p-6 md:w-1/3 lg:w-[45%] 2xl:w-1/3">
                <div className="flex w-full justify-between">
                  <p className="text-xl font-bold">New Appointment</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <form className=" flex w-full flex-col ">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="serviceUserName" className="label-title">
                      Update by
                    </label>
                    <div className="input-field ">
                      <input
                        type="text"
                        id="serviceUserName"
                        placeholder="Type and select your name"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="updatedBy" className="label-title">
                      Name of Service User
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="updatedBy"
                        placeholder="Type and select your name"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Purpose/Title of Appointment
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Select the Placement"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="mb-3 flex w-full flex-col items-start">
                      <label htmlFor="staffOnDuty" className="label-title">
                        Appointment Start Date
                      </label>
                      <div className="input-field w-40">
                        <input
                          type="date"
                          id="staffOnDuty"
                          placeholder="Separate names by comma"
                          className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="mb-3 flex w-full flex-col items-start">
                      <label htmlFor="staffOnDuty" className="label-title">
                        Time
                      </label>
                      <div className="input-field w-40">
                        <input
                          type="time"
                          id="staffOnDuty"
                          placeholder="Separate names by comma"
                          className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="mb-3 flex w-full flex-col items-start">
                      <label htmlFor="staffOnDuty" className="label-title">
                        Appointment End Date
                      </label>
                      <div className="input-field w-40">
                        <input
                          type="date"
                          id="staffOnDuty"
                          placeholder="Separate names by comma"
                          className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="mb-3 flex w-full flex-col items-start">
                      <label htmlFor="staffOnDuty" className="label-title">
                        Time
                      </label>
                      <div className="input-field w-40">
                        <input
                          type="time"
                          id="staffOnDuty"
                          placeholder="Separate names by comma"
                          className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Whom to see
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Enter who the service user is meeting"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Appointment Address
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Enter the location of the appointment"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Chaperone/Escort
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Enter the accompanying staff"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-6 flex w-full flex-col items-start">
                    <label htmlFor="email" className="label-title ">
                      Notes
                    </label>
                    <div className="textarea-field ">
                      <textarea
                        id="email"
                        placeholder="Separate names by comma"
                        className="bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%", background: "transparent" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mb-6 flex w-full flex-col items-start">
                    <label htmlFor="addMedia" className="label-title ">
                      Add Media
                    </label>
                    <div
                      {...getRootProps({
                        className:
                          "flex w-full flex-col items-center justify-center rounded-xl border-[1px] py-4 cursor-pointer",
                      })}
                    >
                      <input {...getInputProps()} />
                      <FaCloudArrowUp className="text-3xl" />
                      <p className="text-center text-sm">Drag and Drop files here or Browse</p>
                      <p className="text-center text-xs">Supported files are JPG, PNG, MP4, PDF, DOC, XLXS, PPTX</p>
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
                    className="flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
                  >
                    POST
                  </Link>
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
