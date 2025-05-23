"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosAddCircleOutline, IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import { FaCloudArrowUp } from "react-icons/fa6"
import Tab from "components/Search/Tab"
import { Checkbox } from "@mui/material"
import GeneralInfo from "components/TabComponent/general-info"
import Bio from "components/TabComponent/bio"
import Contact from "components/TabComponent/contact"
import Others from "components/TabComponent/others"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function AddServiceUser() {
  const [hasTransactions, setHasTransactions] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<string>("general-info")
  const [formData, setFormData] = useState({})
  const [files, setFiles] = useState<PreviewFile[]>([])
  const router = useRouter()

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

  const handleBackButtonClick = () => {
    router.back()
  }

  const handleSaveAndContinue = (data: any) => {
    setFormData({ ...formData, ...data })
    switch (activeTab) {
      case "general-info":
        setActiveTab("bio")
        break
      case "bio":
        setActiveTab("contacts")
        break
      case "contacts":
        setActiveTab("others")
        break
      case "others":
        submitData()
        break
      default:
        break
    }
  }

  const submitData = async () => {
    const payload = {
      ...formData,
      status: true,
      pub_date: new Date().toISOString(),
    }

    try {
      const response = await fetch("https://hf-api.craftandurban.com/service-user/service-user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorText = await response.text() // Get detailed error response
        console.error("Failed to submit data", {
          status: response.status,
          statusText: response.statusText,
          responseBody: errorText,
        })
        return
      }

      router.push("/dashboard/post/")
    } catch (error) {
      console.error("Error submitting data:", error)
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "general-info":
        return <GeneralInfo onSaveAndContinue={handleSaveAndContinue} />
      case "bio":
        return <Bio onSaveAndContinue={handleSaveAndContinue} />
      case "contacts":
        return <Contact onSaveAndContinue={handleSaveAndContinue} />
      case "others":
        return <Others onSaveAndContinue={handleSaveAndContinue} />
      default:
        return null
    }
  }

  return (
    <>
      <section className="h-full ">
        <div className="mx-auto flex min-h-screen bg-[#171818]">
          <div className="flex w-full  flex-col ">
            <div>
              <DashboardNav />
            </div>
            <div className="justify-center gap-3  max-md:px-3  md:mt-8 md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className=" mb-6 flex flex-col  rounded-md    md:w-2/3 lg:w-[45%] 2xl:w-1/3">
                <div className="flex w-full items-center justify-between rounded-md bg-[#f5f5f5] p-4">
                  <p className="text-xl font-bold">New Service User</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="mt-3 flex w-full justify-between rounded-t-md bg-[#f5f5f5]">
                  <Tab
                    label="General Info"
                    onClick={() => setActiveTab("general-info")}
                    active={activeTab === "general-info"}
                  />
                  <Tab label="Bio" onClick={() => setActiveTab("bio")} active={activeTab === "bio"} />
                  <Tab label="Contacts" onClick={() => setActiveTab("contacts")} active={activeTab === "contacts"} />
                  <Tab label="Others" onClick={() => setActiveTab("others")} active={activeTab === "others"} />
                </div>
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
