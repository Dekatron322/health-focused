"use client"
import { useState, SetStateAction } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropleft, IoIosArrowDropdown, IoIosAddCircleOutline } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone, FileRejection } from "react-dropzone"
import { FaCircleInfo, FaCloudArrowUp } from "react-icons/fa6"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import Tab from "components/Search/Tab"
import { CiCircleChevDown } from "react-icons/ci"

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
      case "section1":
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
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="updatedBy" className="label-title">
                Update by
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="updatedBy"
                  placeholder="Select the Placement "
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <IoIosArrowDropdown size={18} />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Allocated Keyworker
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="placement"
                  placeholder="Type a name"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Date of Review
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
                <label htmlFor="staffOnDuty" className="label-title">
                  Date of Next Review
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
      case "section2":
        return (
          <form className="mt-4 flex w-full flex-col ">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Preparation between carer and young person for LAC review:
              </label>
              <p className="mb-3 text-xs">
                Staff guide: What number LAC review will this be? Add confirmation from young person that they
                understand the aim of the LAC review and why they are participating.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                 Progress in placement
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Provide a brief summary of significant milestones, key developments that highlight positive
                progression.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Stability of placement
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Provide a brief summary of key developments that highlight situations that have compromised
                the value of care received. Also include details of situations that threaten the continuation of care or
                barriers to sustainable care within the placement. This should include self - imposed barriers or
                barriers imposed by external factors, issues of concern.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Young person's thoughts and feedback about their present care provision?
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Please interview the young person to find out what they know about the care expectations
                they are entitled to as provided by the care home.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                What are the known risks associated with the young person?
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Please list in summary the identified risks the young person is exposed to and what are the
                risks the young person may bring to the other residents at the care home
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Current standard of compliance and cooperation
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Describe the level of cooperation and compliance demonstrated by the young person in terms
                of abiding by the rules of the home and the response to supervised support from duty support workers and
                management. Does the child display a rebellious , non -compliant attitude to staff correction, requests
                or supervision
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Has the young person gone mission over the last 3 months
              </label>
              <p className="mb-3 text-xs">
                Staff guide: add dates where police or EST was called only. For the dates of missing add date child
                returned
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>
          </form>
        )
      case "section3":
        return (
          <>
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

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="email" className="label-title ">
                Additional Contacts
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
          </>
        )
      case "section4":
        return (
          <form className="mt-4 flex w-full flex-col ">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="additionalInfo" className="label-title">
                Health Summary
              </label>
              <div className="textarea-field">
                <textarea
                  id="additionalInfo"
                  placeholder="Enter additional information"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-2 flex  items-center gap-2">
                <MdCheckBoxOutlineBlank />
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
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-2 flex  items-center gap-2">
                <MdCheckBoxOutlineBlank />
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
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-2 flex  items-center gap-2">
                <MdCheckBoxOutlineBlank />
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
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-2 flex  items-center gap-2">
                <MdCheckBoxOutlineBlank />
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
                  className="bg-transparent outline-none focus:outline-none"
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
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>
          </form>
        )
      case "section6":
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
              <div className=" mb-6 flex w-1/2 flex-col rounded-md border-[1px] p-4">
                <div className="flex w-full justify-between">
                  <p className="text-2xl">LAC Report</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="flex w-full justify-between">
                  <Tab label="Section 1" onClick={() => setActiveTab("section1")} active={activeTab === "section1"} />
                  <Tab label="Section 2" onClick={() => setActiveTab("section2")} active={activeTab === "section2"} />
                  <Tab label="Section 3" onClick={() => setActiveTab("section3")} active={activeTab === "section3"} />
                  <Tab label="Section 4" onClick={() => setActiveTab("section4")} active={activeTab === "section4"} />
                  <Tab label="Section 5" onClick={() => setActiveTab("section5")} active={activeTab === "section5"} />
                  <Tab label="Section 6" onClick={() => setActiveTab("section6")} active={activeTab === "section6"} />
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
