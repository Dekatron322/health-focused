"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import Tab from "components/Search/Tab"
import { Checkbox } from "@mui/material"
import { BsArrowDownCircle, BsArrowLeftCircle, BsArrowRightCircle, BsArrowUpCircle } from "react-icons/bs"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function MonthlyReport() {
  // Simulating user account existence with a state
  const [hasTransactions, setHasTransactions] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<string>("general-info")

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

  const renderContent = () => {
    switch (activeTab) {
      case "general-info":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Name of Service User
              </label>
              <div className="input-field bg-white">
                <input
                  type="text"
                  id="serviceUserName"
                  placeholder="Enter name"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <IoIosArrowDropdown size={18} />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Created by
              </label>
              <div className="input-field w-40 bg-white">
                <input
                  type="text"
                  id="placement"
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
                  Assessment Date
                </label>
                <div className="input-field w-40 bg-white">
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
                  Date of Birth
                </label>
                <div className="input-field w-40 bg-white">
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
                Assessment Official(s)
              </label>
              <div className="input-field w-40 bg-white">
                <input
                  type="text"
                  id="placement"
                  placeholder="Type and select your name"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <IoIosArrowDropdown size={18} />
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
      case "skill":
        return (
          <form className="mt-4 flex w-full flex-col bg-[#f5f5f5] p-6">
            <div className="my-4 flex items-center gap-2">
              <BsArrowLeftCircle />
              <p>1 of 16</p>
              <BsArrowRightCircle />
            </div>
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Section 1
              </label>
              <p className="mb-3 text-lg">Money management and consumer awareness</p>

              <div className="mt-3 flex w-full items-center  justify-between gap-2 rounded-md border bg-[#EBEBEB] p-2">
                <p className="whitespace-nowrap text-sm">Weekly Grade</p> <BsArrowDownCircle size={20} />
              </div>
              <div className="mt-3 flex w-full items-center  justify-between gap-2 rounded-md border bg-[#EBEBEB] p-2">
                <p className="whitespace-nowrap text-sm">Intermediate</p> <BsArrowDownCircle size={20} />
              </div>
              <div className="mt-3 flex w-full items-center  justify-between gap-2 rounded-md border bg-[#EBEBEB] p-2">
                <p className="whitespace-nowrap text-sm">Advanced</p> <BsArrowDownCircle size={20} />
              </div>
              <div className="mt-3 flex w-full items-center  justify-between gap-2 rounded-md border bg-[#EBEBEB] p-2">
                <p className="whitespace-nowrap text-sm">Exceptional</p> <BsArrowUpCircle size={20} />
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <p className="mb-4 text-base font-bold">Must know at least 2:</p>

              <div className="mb-3 flex w-full items-center ">
                <Checkbox className="checkboxes22" />
                <p className="text-base">Budgets for unanticipated emergencies sessional bills, etc </p>
              </div>

              <div className="mb-3 flex w-full items-center ">
                <Checkbox className="checkboxes22" />
                <p className="text-base">Understands buying on credit, loans interest, and late payment penalties. </p>
              </div>

              <div className="mb-3 flex w-full items-center ">
                <Checkbox className="checkboxes22" />
                <p className="text-base">Understands payroll deductions, taxes, NI </p>
              </div>

              <div className="mb-3 flex w-full items-center ">
                <Checkbox className="checkboxes22" />
                <p className="text-base">Has a regular savings arrangement.</p>
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

      case "behaviour":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5]">
            <div className="mb-3 flex w-full  justify-end gap-5 px-6 pt-4">
              <p className="text-end max-md:text-xs">Basic</p>
              <p className="text-end max-md:text-xs">Intermediate</p>
              <p className="text-end max-md:text-xs">Advanced</p>
              <p className="text-end max-md:text-xs">Exceptional</p>
            </div>

            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center  justify-between px-6">
              <p className="text-sm">Money Management and Consumer Awareness</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>

            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center  justify-between px-6">
              <p className="text-sm">Food Management</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>

            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Personal Appearance and hygiene</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Health</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Housekeeping</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Housing</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Transportation</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Education planning</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Job seeking skills</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Job maintenance skills</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Emergency and Safety Skills</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Knowledge of Community Resources</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Interpersonal skills</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Legal issues</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full items-center justify-between px-6">
              <p className="text-sm">Pregnancy, Parenting and Child Care (CONTINUED)</p>
              <div className="flex gap-14 max-md:gap-4">
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="p-6">
              <Link
                href="/dashboard/post/"
                type="button"
                className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
              >
                SAVE AND CONTINUE
              </Link>
            </div>
          </form>
        )
      default:
        return null
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
              <div className=" mb-6 flex flex-col   md:w-[50%] lg:w-2/3 2xl:w-[45%]">
                <div className="flex w-full items-center justify-between rounded-md bg-[#f5f5f5] p-4">
                  <p className="text-lg font-semibold">Independent living skills assessment</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="mt-4 flex w-full justify-between rounded-t-md bg-[#f5f5f5]">
                  <Tab
                    label="General"
                    onClick={() => setActiveTab("general-info")}
                    active={activeTab === "general-info"}
                  />
                  <Tab label="Skill Development" onClick={() => setActiveTab("skill")} active={activeTab === "skill"} />

                  <Tab
                    label="Skills Summary"
                    onClick={() => setActiveTab("behaviour")}
                    active={activeTab === "behaviour"}
                  />
                </div>
                {renderContent()}
              </div>
            </div>

            {/* <Footer /> */}
          </div>
        </div>
      </section>
    </>
  )
}
