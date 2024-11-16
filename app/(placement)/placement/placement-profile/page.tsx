"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosAddCircleOutline, IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import { FaCloudArrowUp } from "react-icons/fa6"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import Tab from "components/Search/Tab"
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function AddPlacementUser() {
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

  const placementData = [
    {
      id: 1,
      title: "King’s Landing",
      address: "234 Raymond Avenue, Hertfordshire",
      zipCode: "SW1A 2AA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/house.png",
    },
    {
      id: 2,
      title: "Winterfell",
      address: "123 Stark Lane, Northgrove",
      zipCode: "NW1B 3PA",
      description:
        "Winterfell is the home of the Stark family, known for its cold winters and ancient traditions. A place filled with history and pride.",
      image: "/winterfell.jpg",
    },
    {
      id: 3,
      title: "Winterfell",
      address: "123 Stark Lane, Northgrove",
      zipCode: "NW1B 3PA",
      description:
        "Winterfell is the home of the Stark family, known for its cold winters and ancient traditions. A place filled with history and pride.",
      image: "/house.png",
    },
    {
      id: 4,
      title: "Winterfell",
      address: "123 Stark Lane, Northgrove",
      zipCode: "NW1B 3PA",
      description:
        "Winterfell is the home of the Stark family, known for its cold winters and ancient traditions. A place filled with history and pride.",
      image: "/house.png",
    },

    {
      id: 5,
      title: "Winterfell",
      address: "123 Stark Lane, Northgrove",
      zipCode: "NW1B 3PA",
      description:
        "Winterfell is the home of the Stark family, known for its cold winters and ancient traditions. A place filled with history and pride.",
      image: "/house.png",
    },
  ]

  const [currentStep, setCurrentStep] = useState<number>(1)

  const handleNext = () => {
    if (currentStep < placementData.length) {
      setCurrentStep((prevStep) => prevStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1)
    }
  }

  const currentPlacement = placementData.find((item) => item.id === currentStep)

  const renderContent = () => {
    switch (activeTab) {
      case "general-info":
        return (
          <div className="mt-4 flex w-full flex-col ">
            <div className="mb-3 flex w-full flex-col items-start">
              <img src={currentPlacement?.image} width={600} height={500} alt="" />
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <div className="label-title flex w-full items-center justify-end gap-2">
                <IoArrowBackCircleOutline
                  className={`cursor-pointer text-xl ${currentStep === 1 ? "cursor-not-allowed opacity-50" : ""}`}
                  onClick={handlePrevious}
                />
                <p>
                  {currentStep} of {placementData.length}
                </p>
                <IoArrowForwardCircleOutline
                  className={`cursor-pointer text-xl ${
                    currentStep === placementData.length ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onClick={handleNext}
                />
              </div>
            </div>

            <div className=" flex w-full flex-col items-start">
              <p className="text-xl font-bold text-[#0085FF]">{currentPlacement?.title}</p>
              <p className="text-black ">{currentPlacement?.address}</p>
              <p className="text-[#000000B2]">{currentPlacement?.zipCode}</p>

              <p className="mt-5 text-[12.5px] text-[#00000059]">{currentPlacement?.description}</p>
            </div>
          </div>
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
              <div className=" mb-6 flex flex-col  rounded-md bg-[#f5f5f5] p-4 md:w-1/3">
                {/* <div className="flex w-full justify-between">
                  <p className="text-lg font-semibold">New Placement</p>
                  <p className="text-xs">25 January 2024</p>
                </div> */}
                {/* <div className="flex w-full justify-between">
                  <Tab
                    label="General Info"
                    onClick={() => setActiveTab("general-info")}
                    active={activeTab === "general-info"}
                  />
                  <Tab label="Bio" onClick={() => setActiveTab("bio")} active={activeTab === "bio"} />
                  <Tab label="Contacts" onClick={() => setActiveTab("contacts")} active={activeTab === "contacts"} />
                  <Tab label="Others" onClick={() => setActiveTab("others")} active={activeTab === "others"} />
                </div> */}
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
