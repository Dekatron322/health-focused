"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function MissingForm() {
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
            <div className="mt-8  justify-center gap-3 max-md:px-3  md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className="mb-6 flex flex-col items-center gap-4 rounded-md border-[1px] bg-[#F5F5F5] p-6 md:w-1/3 lg:w-[45%] 2xl:w-1/3">
                <div className="flex w-full justify-between">
                  <p className="text-xl font-bold">Missing Form</p>
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
                        When Last Seen
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
                        Time
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
                    <label htmlFor="staffOnDuty" className="label-title">
                      Where was the placement last seen
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="Separate names by comma"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      EDT Reference Number
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="Enter the EDT Reference Number"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Police Reference Number
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Enter the police refence number"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="mb-6 flex w-full flex-col items-start">
                    <label htmlFor="email" className="label-title ">
                      Notes
                    </label>
                    <div className="textarea-field bg-white">
                      <textarea
                        id="email"
                        placeholder="Separate names by comma"
                        className="bg-transparent text-sm outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%", background: "transparent" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Staff on duty
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Enter the name(s) of the staff on duty"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Status
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        placeholder="Select a status"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
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