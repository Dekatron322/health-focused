"use client"
import { useState, useEffect } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropleft, IoIosArrowDropdown } from "react-icons/io"
import { FaCloudArrowUp } from "react-icons/fa6"

export default function NewLogs() {
  // Simulating user account existence with a state
  const [hasTransactions, setHasTransactions] = useState(true)

  // Render the content conditionally based on the 'hasAccount' state
  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            <div>
              <DashboardNav />
            </div>
            <div className="mt-8 flex flex-row  justify-center gap-3">
              <button className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs">
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                GO BACK
              </button>
              <div className="mb-6 flex w-1/3 flex-col items-center gap-4 rounded-md border-[1px] p-4">
                <div className="flex w-full justify-between">
                  <p className="text-2xl">New Daily Log</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <form className=" flex w-full flex-col ">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="adminName" className="label-title">
                      Name of Service User
                    </label>
                    <div className="input-field ">
                      <input
                        type="text"
                        id="email"
                        placeholder="Type and select your name"
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="adminName" className="label-title">
                      Updated by
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="email"
                        placeholder="Type and select your name"
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="adminName" className="label-title">
                      Placement
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="email"
                        placeholder="Select the Placement"
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="adminName" className="label-title">
                      Staff on Duty
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="email"
                        placeholder="Separate names by comma"
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>
                  <div className="mb-6 flex w-full flex-col items-start">
                    <label htmlFor="adminName" className="label-title ">
                      Email Address
                    </label>
                    <div className="input-field ">
                      <textarea
                        id="email"
                        placeholder="e.g johndoe@gmail.com"
                        className="bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%", background: "transparent" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mb-6 flex w-full flex-col items-start">
                    <label htmlFor="adminName" className="label-title ">
                      Add Media
                    </label>
                    <div className="flex w-full flex-col items-center justify-center rounded-xl border-[1px] py-4">
                      <FaCloudArrowUp className="text-3xl" />
                      <p className="text-sm">Drag and Drop files here or Browse</p>
                      <p className="text-xs">Supported files are JPG, PNG, MP4, PDF, DOC, XLXS, PPTX</p>
                    </div>
                  </div>

                  <button type="button" className="h-[52px] rounded-lg bg-[#0052FF] p-3 text-sm text-white">
                    POST
                  </button>
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
