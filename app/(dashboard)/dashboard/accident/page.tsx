"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import { FaCloudArrowUp } from "react-icons/fa6"
import { MdCheckBoxOutlineBlank } from "react-icons/md"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function AccidentForm() {
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
        <div className="mx-auto flex min-h-screen bg-[#171818]">
          <div className="flex w-full  flex-col ">
            <div>
              <DashboardNav />
            </div>
            <div className="mt-8 justify-center gap-3 max-md:px-3  md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className="mb-6 flex flex-col items-center gap-4 rounded-md border-[1px] bg-[#f5f5f5] p-6 md:w-1/3 lg:w-[45%] 2xl:w-1/3">
                <div className="flex w-full justify-between">
                  <p className="text-xl font-bold">Accident Form</p>
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
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
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
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Name of Placement
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Select the Placement"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="mb-3 flex w-full flex-col items-start">
                      <label htmlFor="staffOnDuty" className="label-title">
                        Date of Accident
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
                        Time of Accident
                      </label>
                      <div className="input-field w-40">
                        <input
                          type="time"
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
                      Describe the Accident
                    </label>
                    <div className="textarea-field ">
                      <textarea
                        id="email"
                        placeholder="Separate names by comma"
                        className="bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%", background: "transparent" }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="email" className="label-title ">
                      Action taken
                    </label>
                    <div className="textarea-field ">
                      <textarea
                        id="email"
                        placeholder="Separate names by comma"
                        className="bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%", background: "transparent" }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <p className="mt-6 ">Reporting Line</p>
                    <p className="mb-6 text-xs">
                      Please enter details of those informed about the invident, please use N/A if not applicable
                    </p>
                    <label htmlFor="staffOnDuty" className="label-title">
                      Unit Manager Informed
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="Enter manager name"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Social Worker
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="Enter the accompanying staff"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Police
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Enter the location of the appointment"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Witnesses
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Use full name, separate by comma"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className=" flex w-full flex-col items-start">
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

                  <div className="flex items-center gap-2">
                    <MdCheckBoxOutlineBlank />
                    <p>Mark if relevant for weekly report</p>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <p className="mt-6 ">Manager’s Comment</p>
                    <p className="mb-6 text-xs">The Manager may give final comments on the incident.</p>
                    <label htmlFor="staffOnDuty" className="label-title">
                      Name of Manager
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="Enter manager name"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="email" className="label-title ">
                      Comment
                    </label>
                    <div className="textarea-field ">
                      <textarea
                        id="email"
                        placeholder="Separate names by comma"
                        className="bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%", background: "transparent" }}
                      ></textarea>
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
