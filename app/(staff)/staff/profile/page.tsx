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

export default function AddStaff() {
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
                Staff’s Full Name
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
                Staff Email
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
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Phone Number
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="text"
                    id="staffOnDuty"
                    placeholder="Type Number"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  User Role
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="text"
                    id="staffOnDuty"
                    placeholder="Select app role"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <IoIosArrowDropdown size={18} />
                </div>
              </div>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Username
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="text"
                    id="staffOnDuty"
                    placeholder="Username to login to the app"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Password
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="text"
                    id="staffOnDuty"
                    placeholder="Please type a password"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
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
          <form className="mt-4 flex w-full flex-col  rounded-md bg-[#f5f5f5]">
            <div className="mb-3 flex w-full flex-col items-end px-6 pt-4">
              <p className="text-end">Tick which applies</p>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Profile</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>

            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Daily logs</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full  justify-between px-6">
              <p className="text-sm">Weekly and Monthly Reports</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Units</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Care/support plans</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Lac reports and notes</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Local Authorities</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Risk assessment</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Alerts - Incident, Missing, Absent, Accident</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Staff Management</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Email Settings</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Appointments</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">User Management</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">PEP Plan/Report</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Admin Centre</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Independent Living Skill Inventory</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between px-6">
              <p className="text-sm">Keywork Activity Planner</p>
              <div className="flex w-40 gap-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
                <MdOutlineCheckBoxOutlineBlank size={24} />
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
      case "risk-to-others":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5]">
            <div className="mb-3 flex w-full justify-end gap-2 p-4 px-6">
              <MdOutlineCheckBoxOutlineBlank size={24} />
              <p className="text-end">Assign</p>
            </div>

            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between  px-6">
              <p className="text-sm">London</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>

            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between  px-6">
              <p className="text-sm">Manchester</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>

            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between  px-6">
              <p className="text-sm">King’s Landing</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between  px-6">
              <p className="text-sm">River Couts</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between  px-6">
              <p className="text-sm">Magic Gardens</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="mb-3 flex w-full justify-between  px-6">
              <p className="text-sm">London</p>
              <div className="w-20">
                <MdOutlineCheckBoxOutlineBlank size={24} />
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
        <div className="mx-auto flex min-h-screen bg-[#171818]  ">
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
              <div className=" mb-6 flex flex-col   md:w-1/3 lg:w-1/2 2xl:w-1/3">
                <div className="flex w-full justify-between rounded-md bg-white p-4">
                  <p className="text-lg font-semibold"> Staff Profile</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="mt-4 flex w-full justify-between rounded-t-md bg-white">
                  <Tab label="Bio" onClick={() => setActiveTab("general-info")} active={activeTab === "general-info"} />
                  <Tab
                    label="Permission"
                    onClick={() => setActiveTab("risk-to-self")}
                    active={activeTab === "risk-to-self"}
                  />
                  <Tab
                    label="Placement Allocation"
                    onClick={() => setActiveTab("risk-to-others")}
                    active={activeTab === "risk-to-others"}
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
