"use client"
import { useState, SetStateAction } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropleft, IoIosArrowDropdown, IoIosAddCircleOutline } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone, FileRejection } from "react-dropzone"
import { FaCloudArrowUp } from "react-icons/fa6"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
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
          <form className="mt-4 flex w-full flex-col ">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Name of Service User
              </label>
              <div className="input-field ">
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
              <div className="input-field w-40">
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
              <label htmlFor="updatedBy" className="label-title">
                Current Address
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="updatedBy"
                  placeholder="Select the Placement "
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="staffOnDuty" className="label-title">
                Date of Update
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
              <label htmlFor="email" className="label-title ">
                Current Concerns
              </label>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>
          </form>
        )
      case "physical-appearance":
        return (
          <form className="mt-4 flex w-full flex-col ">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Physical Apperance/Body type
              </label>
              <div className="input-field ">
                <input
                  type="text"
                  id="serviceUserName"
                  placeholder="Enter details"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Height
              </label>
              <div className="input-field w-40">
                <input
                  type="email"
                  id="placement"
                  placeholder="Enter email"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="staffOnDuty" className="label-title">
                Ethnicity
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="staffOnDuty"
                  placeholder="Separate names by comma"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="staffOnDuty" className="label-title">
                Hair colour
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="staffOnDuty"
                  placeholder="Separate names by comma"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="email" className="label-title ">
                Eye colour
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="staffOnDuty"
                  placeholder="Separate names by comma"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Tattoo or body markings
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="placement"
                  placeholder="Enter detail"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Clothes likely to be wearing
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="placement"
                  placeholder="Enter detail"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </form>
        )
      case "contacts":
        return (
          <>
            <>
              <p className="my-4">Family Contact</p>

              <form className=" flex w-full flex-col rounded-md border-[1px] border-[#69B7FF] p-4">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="serviceUserName" className="label-title">
                    Name of Contact
                  </label>
                  <div className="input-field ">
                    <input
                      type="text"
                      id="serviceUserName"
                      placeholder="Enter name"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Job Title
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="job"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Phone Number
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="enter phone number"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Email
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="email"
                        id="staffOnDuty"
                        placeholder="enter email"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Address
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder="Separate names by comma"
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </form>
              <button
                type="submit"
                className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#69B7FF] p-3 text-sm text-white"
              >
                Add Another Contact
                <IoIosAddCircleOutline size={20} />
              </button>
            </>
            <>
              <p className="my-4">Friends’ Contacts</p>

              <form className=" flex w-full flex-col rounded-md border-[1px] border-[#69B7FF] p-4">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="serviceUserName" className="label-title">
                    Name of Contact
                  </label>
                  <div className="input-field ">
                    <input
                      type="text"
                      id="serviceUserName"
                      placeholder="Enter name"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Job Title
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="job"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Phone Number
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="enter phone number"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Email
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="email"
                        id="staffOnDuty"
                        placeholder="enter email"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Address
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder="Separate names by comma"
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </form>
              <button
                type="submit"
                className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#69B7FF] p-3 text-sm text-white"
              >
                Add Another Contact
                <IoIosAddCircleOutline size={20} />
              </button>
            </>
            <>
              <p className="my-4">Usual Hangout Location</p>

              <form className=" flex w-full flex-col rounded-md border-[1px] border-[#69B7FF] p-4">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="serviceUserName" className="label-title">
                    Location Description
                  </label>
                  <div className="input-field ">
                    <input
                      type="text"
                      id="serviceUserName"
                      placeholder="Enter name"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </form>
              <button
                type="submit"
                className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#69B7FF] p-3 text-sm text-white"
              >
                Add Another Contact
                <IoIosAddCircleOutline size={20} />
              </button>
            </>
          </>
        )
      case "images":
        return (
          <form className="mt-4 flex w-full flex-col ">
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
                <p className="text-xs">Supported files are JPG, PNG, MP4, PDF, DOC, XLXS, PPTX</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {files.map((file) => (
                  <div key={file.name} className="relative h-20 w-20">
                    <img src={file.preview} alt={file.name} className="h-full w-full rounded object-cover" />
                  </div>
                ))}
              </div>
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
              <div className=" mb-6 flex w-[40%]  flex-col rounded-md border-[1px] p-4">
                <div className="flex w-full justify-between">
                  <p className="text-2xl">Missing Person Resources</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="flex w-full justify-between">
                  <Tab
                    label="General Info"
                    onClick={() => setActiveTab("general-info")}
                    active={activeTab === "general-info"}
                  />
                  <Tab
                    label="Physical Appearance"
                    onClick={() => setActiveTab("physical-appearance")}
                    active={activeTab === "physical-appearance"}
                  />
                  <Tab label="Contacts" onClick={() => setActiveTab("contacts")} active={activeTab === "contacts"} />
                  <Tab label="Images" onClick={() => setActiveTab("images")} active={activeTab === "images"} />
                </div>
                {renderContent()}
                <Link
                  href="/dashboard/post/"
                  type="button"
                  className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
                >
                  SAVE AND CONTINUE
                </Link>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
