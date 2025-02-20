"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosAddCircleOutline, IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import { FaCircleInfo, FaCloudArrowUp } from "react-icons/fa6"
import Tab from "components/Search/Tab"
import { CiCircleChevDown } from "react-icons/ci"
import { Checkbox } from "@mui/material"
import GeneralInfo from "components/MonthlyReport/general-info"
import SkillDevelopment from "components/MonthlyReport/skill-development"
import SkillDevelopment2 from "components/MonthlyReport/skill-development2"
import KeyworkSession from "components/MonthlyReport/keywork-session"
import Appointment from "components/MonthlyReport/appointment"
import Behaviour from "components/MonthlyReport/behaviour"

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

  // Function to handle successful form submission
  const handleFormSubmitSuccess = () => {
    // Define the order of tabs
    const tabOrder = ["general-info", "skill", "skill(2)", "keywork", "appointments", "behaviour"]

    // Find the index of the current active tab
    const currentIndex = tabOrder.indexOf(activeTab)

    // If there's a next tab, move to it
    if (currentIndex < tabOrder.length - 1) {
      setActiveTab(tabOrder[currentIndex + 1] ?? "general-info")
    } else {
      // If it's the last tab, you can redirect to a completion page or show a success message
      alert("All forms submitted successfully!")
      router.push("/dashboard") // Redirect to the dashboard or another page
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "general-info":
      case "general-info":
        return <GeneralInfo onSuccess={handleFormSubmitSuccess} />
      case "skill":
        return <SkillDevelopment onSuccess={handleFormSubmitSuccess} />
      case "skill(2)":
        return <SkillDevelopment2 onSuccess={handleFormSubmitSuccess} />
      case "keywork":
        return <KeyworkSession onSuccess={handleFormSubmitSuccess} />
      case "appointments":
        return <Appointment onSuccess={handleFormSubmitSuccess} />
      case "behaviour":
        return <Behaviour onSuccess={handleFormSubmitSuccess} />

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
              <div className=" mb-6 flex flex-col  rounded-md  md:w-2/3 lg:w-[80%] xl:w-2/3">
                <div className="mb-4 flex w-full items-center justify-between rounded-md bg-white p-4">
                  <p className="text-lg font-semibold">New Monthly Report</p>
                  <p className="whitespace-nowrap text-xs">25 January 2024</p>
                </div>
                <div className="my-4 flex w-full justify-between  whitespace-nowrap rounded-t-md bg-white  pt-2 lg:text-xs xl:text-sm">
                  <Tab
                    label="General"
                    onClick={() => setActiveTab("general-info")}
                    active={activeTab === "general-info"}
                  />
                  <Tab label="Skill Development" onClick={() => setActiveTab("skill")} active={activeTab === "skill"} />
                  <Tab
                    label="Skill Development(2)"
                    onClick={() => setActiveTab("skill(2)")}
                    active={activeTab === "skill(2)"}
                  />
                  <Tab
                    label="Keywork Sessions"
                    onClick={() => setActiveTab("keywork")}
                    active={activeTab === "keywork"}
                  />
                  <Tab
                    label="Appointments"
                    onClick={() => setActiveTab("appointments")}
                    active={activeTab === "appointments"}
                  />
                  <Tab
                    label="Behaviour Statistics"
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
