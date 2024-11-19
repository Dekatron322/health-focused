"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import Tab from "components/Search/Tab"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function AddServiceUser() {
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
                  placeholder="Type a name"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <IoIosArrowDropdown size={18} />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="staffOnDuty" className="label-title">
                Date of Update
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
            <Link
              href="/dashboard/post/"
              type="button"
              className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
            >
              SAVE AND CONTINUE
            </Link>
          </form>
        )
      case "risk-to-self":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#F5F5F5]">
            <div className="mb-3 flex w-full flex-col items-end px-6 pt-4">
              <p className="text-end">Tick which applies</p>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Physical self injury</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>

            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Drug abuse</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Substance abuse</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Alcohol abuse</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Deliberate starvation</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Over eating</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Suicide ideation / attempts</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Prostitution (Uncoerced)</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Medication: dosage refusal</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Medication: Treatment refusal</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Gang affiliation</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Smoking</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Missing episodes</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Unauthorised absence</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-6 border"></div>

            <div className="mb-6 flex w-full flex-col items-start px-6">
              <label htmlFor="email" className="label-title ">
                Add Other Risks
              </label>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent px-6 outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
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
      case "risk-to-others":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5]">
            <div className="mb-3 flex w-full flex-col items-end px-6  pt-4">
              <p className="text-end">Tick which applies</p>
            </div>

            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Aggressive Confrontations</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>

            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Drug abuse</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Substance abuse</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Alcohol abuse</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Deliberate starvation</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Over eating</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Suicide ideation / attempts</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Prostitution (Uncoerced)</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Medication: dosage refusal</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Medication: Treatment refusal</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Gang affiliation</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Smoking</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Missing episodes</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Unauthorised absence</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-6 border"></div>

            <div className="mb-6 flex w-full flex-col items-start px-6">
              <label htmlFor="email" className="label-title ">
                Add Other Risks
              </label>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
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

      case "risk-from-others":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5]">
            <div className="mb-3 flex w-full flex-col items-end px-6 pt-4">
              <p className="text-end">Tick which applies</p>
            </div>

            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Aggressive Confrontations</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>

            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Drug abuse</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Substance abuse</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Alcohol abuse</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Deliberate starvation</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Over eating</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Suicide ideation / attempts</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Prostitution (Uncoerced)</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Medication: dosage refusal</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Medication: Treatment refusal</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Gang affiliation</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Smoking</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Missing episodes</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Unauthorised absence</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-6 border"></div>

            <div className="mb-6 flex w-full flex-col items-start px-6">
              <label htmlFor="email" className="label-title ">
                Add Other Risks
              </label>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
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
      case "environmental-risks":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5]">
            <div className="mb-3 flex w-full flex-col items-end px-6 pt-4">
              <p className="text-end">Tick which applies</p>
            </div>

            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Transit risks</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>

            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Crowd space</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Claustrophobia</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Excessive noise</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Weather</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">High temperatures</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Low temperatures</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Hospital environment</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Emotional trigger</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Suicide pact</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Smoking</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">County lines grooming</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Other criminal activity</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>

            <div className="mb-6 border"></div>

            <div className="mb-6 flex w-full flex-col items-start px-6">
              <label htmlFor="email" className="label-title ">
                Add Other Risks
              </label>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
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
              <div className=" mb-6 flex flex-col  rounded-md  md:w-1/2 lg:w-2/3 2xl:w-1/2">
                <div className="flex w-full items-center justify-between rounded-md bg-[#f5f5f5] p-4">
                  <p className="text-lg  font-semibold max-md:text-lg">Risk Assessment Form</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="mt-4 flex w-full justify-between rounded-t-md bg-[#ffffff]">
                  <Tab
                    label="General Info"
                    onClick={() => setActiveTab("general-info")}
                    active={activeTab === "general-info"}
                  />
                  <Tab
                    label="Risk to Self"
                    onClick={() => setActiveTab("risk-to-self")}
                    active={activeTab === "risk-to-self"}
                  />
                  <Tab
                    label="Risk to Others"
                    onClick={() => setActiveTab("risk-to-others")}
                    active={activeTab === "risk-to-others"}
                  />
                  <Tab
                    label="Risk from Others"
                    onClick={() => setActiveTab("risk-from-others")}
                    active={activeTab === "risk-from-others"}
                  />
                  <Tab
                    label="Environmental Risks"
                    onClick={() => setActiveTab("environmental-risks")}
                    active={activeTab === "environmental-risks"}
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
