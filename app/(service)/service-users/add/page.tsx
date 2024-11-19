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
              <div className="input-field ">
                <input
                  type="text"
                  id="serviceUserName"
                  placeholder="Enter name"
                  className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Name of Keyworker
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="placement"
                  placeholder="Type a name"
                  className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="updatedBy" className="label-title">
                Placement
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="updatedBy"
                  placeholder="Select the Placement "
                  className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%" }}
                />
                <IoIosArrowDropdown size={18} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Name of Local Authority
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
                  Placement Start Date
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
              <label htmlFor="email" className="label-title ">
                Reason for Referral
              </label>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

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
                <p className="px-2 text-center text-xs">Supported files are JPG, PNG, MP4, PDF, DOC, XLXS, PPTX</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {files.map((file) => (
                  <div key={file.name} className="relative h-20 w-20">
                    <img src={file.preview} alt={file.name} className="h-full w-full rounded object-cover" />
                  </div>
                ))}
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
      case "bio":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Service User’s Phone Number
              </label>
              <div className="input-field ">
                <input
                  type="text"
                  id="serviceUserName"
                  placeholder="Enter details"
                  className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Service User’s Email
              </label>
              <div className="input-field w-40">
                <input
                  type="email"
                  id="placement"
                  placeholder="Enter email"
                  className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Gender
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
                  Date of Birth
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
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="email" className="label-title ">
                Medical Condition or Special Needs
              </label>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Allergies
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="placement"
                  placeholder="Enter detail"
                  className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Ethnic Origin
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="placement"
                  placeholder="Enter detail"
                  className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
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
      case "contacts":
        return (
          <>
            <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
              <>
                <p className="mt-4">Care Professional Contact</p>
                <p className="mb-4 text-xs">The Manager may give final comments on the accident. </p>
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
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
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
                <p className="mt-4">Family Contact</p>
                <p className="mb-4 text-xs">The Manager may give final comments on the accident. </p>
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
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
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
                <p className="mt-4">Health Contact</p>
                <p className="mb-4 text-xs">The Manager may give final comments on the accident. </p>
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
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
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

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="email" className="label-title ">
                  Additional Contacts
                </label>
                <div className="textarea-field ">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent outline-none focus:outline-none lg:text-sm"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
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
          </>
        )
      case "others":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="additionalInfo" className="label-title">
                Health Summary
              </label>
              <div className="textarea-field">
                <textarea
                  id="additionalInfo"
                  placeholder="Enter additional information"
                  className="bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className=" flex  items-center ">
                <Checkbox />
                <p className="text-xs">Medical Registrations</p>
              </div>
            </div>
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="additionalInfo" className="label-title">
                Education/Training Summary
              </label>
              <div className="textarea-field">
                <textarea
                  id="additionalInfo"
                  placeholder="Enter additional information"
                  className="bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className=" flex  items-center ">
                <Checkbox />
                <p className="text-xs">In Education</p>
              </div>
            </div>
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="additionalInfo" className="label-title">
                Employment Summary
              </label>
              <div className="textarea-field">
                <textarea
                  id="additionalInfo"
                  placeholder="Enter additional information"
                  className="bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className=" flex  items-center ">
                <Checkbox />
                <p className="text-xs">Job Ready</p>
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="additionalInfo" className="label-title">
                Risk Summary
              </label>
              <div className="textarea-field">
                <textarea
                  id="additionalInfo"
                  placeholder="Enter additional information"
                  className="bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="flex  items-center ">
                <Checkbox />
                <p className="text-xs">Risk Assessed</p>
              </div>
            </div>
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="additionalInfo" className="label-title">
                Identified Needs
              </label>
              <div className="textarea-field">
                <textarea
                  id="additionalInfo"
                  placeholder="Enter additional information"
                  className="bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="additionalInfo" className="label-title">
                Additional Information
              </label>
              <div className="textarea-field">
                <textarea
                  id="additionalInfo"
                  placeholder="Enter additional information"
                  className="bg-transparent outline-none focus:outline-none lg:text-sm"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
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

            {/* <Footer /> */}
          </div>
        </div>
      </section>
    </>
  )
}
