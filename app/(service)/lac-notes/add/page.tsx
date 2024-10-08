"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useDropzone } from "react-dropzone"
import { useRouter } from "next/navigation"
import Link from "next/link"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function AddLACNote() {
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
            <div>
              <DashboardNav />
            </div>
            <div className="mt-8 flex flex-row  justify-center gap-3">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                GO BACK
              </button>
              <div className="mb-6 flex w-1/3 flex-col items-center gap-4 rounded-md border-[1px] p-4">
                <div className="flex w-full justify-between">
                  <p className="w-[60%] text-2xl">LAC Notes Form</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <form className=" flex w-full flex-col ">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="serviceUserName" className="label-title">
                      Created by
                    </label>
                    <div className="input-field ">
                      <input
                        type="text"
                        id="serviceUserName"
                        placeholder="Type and select your name"
                        className="w-40 bg-transparent outline-none focus:outline-none"
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
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="mb-3 flex w-full flex-col items-start">
                      <label htmlFor="staffOnDuty" className="label-title">
                        Report Date
                      </label>
                      <div className="input-field w-40">
                        <input
                          type="date"
                          id="staffOnDuty"
                          placeholder="Separate names by comma"
                          className="w-40 bg-transparent outline-none focus:outline-none"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="mb-3 flex w-full flex-col items-start">
                      <label htmlFor="staffOnDuty" className="label-title">
                        Creation Date
                      </label>
                      <div className="input-field w-40">
                        <input
                          type="date"
                          id="staffOnDuty"
                          placeholder="Separate names by comma"
                          className="w-40 bg-transparent outline-none focus:outline-none"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Staff Involved
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Select the Placement"
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Care Professional Involved
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Select the Placement"
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-6 flex w-full flex-col items-start">
                    <label htmlFor="email" className="label-title ">
                      Details of LAC Review
                    </label>
                    <div className="textarea-field ">
                      <textarea
                        id="email"
                        placeholder="e.g johndoe@gmail.com"
                        className="bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%", background: "transparent" }}
                      ></textarea>
                    </div>
                  </div>

                  <Link
                    href="/dashboard/post/"
                    type="button"
                    className="flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
                  >
                    SAVE AND PUBLISH
                  </Link>
                </form>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
