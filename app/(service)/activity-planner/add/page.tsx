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
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5]">
            <div className="mb-3 flex w-full flex-col items-start p-4">
              <label htmlFor="serviceUserName" className="label-title">
                Title
              </label>
              <div className="input-field bg-white">
                <input
                  type="text"
                  id="serviceUserName"
                  placeholder="A short description of the key work"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <p className="mb-6 mt-3 px-4 text-lg">Duration for key work</p>

            <div className="grid w-full grid-cols-2 gap-3 px-4">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Start Date
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
                  End Date
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

            <div className="mb-3 flex w-full flex-col items-start px-4">
              <p className="mb-4 mt-3 text-lg">Staff name</p>
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

            <div className=" flex w-full flex-col px-4">
              <p className="my-4 text-xl">Choose or Add Key Work Discussion</p>
            </div>
            <div className="mb-3 border"></div>
            <div className="flex w-full justify-between px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Managing risks</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Family relationships</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Rules of the home</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Knowledge of entitled benefits</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Gang affiliation</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Co-resident relationships</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Social interaction</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Complaints /dissatisfaction</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Alcohol consumption</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Engaging with staff support</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Education /training</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Emotional wellbeing</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Drug /substance abuse</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Personal skills support</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Abuse /expoiltation disclosure</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Abuse /expoiltation disclosure</p>
              </div>
            </div>

            <div className="my-6 flex w-full flex-col items-start px-4">
              <label htmlFor="email" className="label-title ">
                Please add other key work discussion not captured.
              </label>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="mb-6 flex w-full flex-col items-start px-4">
              <label htmlFor="email" className="label-title ">
                Activity
              </label>
              <p className="mb-3 text-xs">
                Staff guide: You may add some details about what discussions are to be planned in greater detail here
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 w-full flex-col items-start p-4 md:flex">
              <div className="w-full items-center  justify-between gap-2 md:flex">
                <div className="mb-3 flex w-full flex-col items-start">
                  <p>Was the service user invited to choose the weekly key work activtity?</p>
                </div>
                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    Yes
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    No
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full items-center  justify-between gap-2 md:flex">
                <div className="mb-3 flex w-full flex-col items-start">
                  <p>Did the service user suggest any of the planned key work activity?</p>
                </div>
                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    Yes
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    No
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
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
            </div>
          </form>
        )
      case "risk-to-self":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] ">
            <p className="mb-3 p-4 text-lg">Create/edit key work discussion for the week</p>
            <div className="mb-3 flex w-full flex-col items-start px-4">
              <label htmlFor="serviceUserName" className="label-title">
                Staff name
              </label>
              <div className="input-field bg-white">
                <input
                  type="text"
                  id="serviceUserName"
                  placeholder="A short description of the key work"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <IoIosArrowDropdown size={18} />
              </div>
            </div>

            <p className="mb-6 mt-3 px-4 text-lg">Duration for key work</p>

            <div className="mb-3 flex w-full flex-col items-start px-4">
              <label htmlFor="staffOnDuty" className="label-title">
                Persons or person delivering Key work discussion
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

            <div className="mb-3 flex w-full flex-col ">
              <p className="my-4 px-4 text-lg">Choose or Add Key Work Discussion</p>
            </div>
            <div className="mb-3 border"></div>
            <div className="flex w-full justify-between">
              <div className="mb-3 flex w-full items-center px-4">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Indoor meal with staff</p>
              </div>
              <div className="mb-3 flex w-full items-center ">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">House chores (ROTA)</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Group residents dining</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Food shopping (Solo)</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Group leisure outing</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Food shopping with staff</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Solo leisure outing</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Family visit (At the unit)</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Gym /sport activity (Solo)</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Family visit (Away from the unit)</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Gym /sport outing (Group)</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Inhouse tutoring</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Cooking session (Solo)</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Gardening</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Cooking session (group)</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Career mentor session</p>
              </div>
            </div>
            <div className="mb-3 border"></div>
            <div className="grid grid-cols-2 px-4">
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Bedroom cleaning</p>
              </div>
              <div className="mb-3 flex w-full items-center">
                <div className="w-20">
                  <MdOutlineCheckBoxOutlineBlank size={24} />
                </div>
                <p className="text-sm">Independent living assessment</p>
              </div>
            </div>

            <div className="my-6 flex w-full flex-col items-start px-4">
              <label htmlFor="email" className="label-title ">
                Please add other key work discussion not captured.
              </label>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="mb-6 flex w-full flex-col items-start px-4">
              <label htmlFor="email" className="label-title ">
                Activity
              </label>
              <p className="mb-3 text-xs">
                Staff guide: You may add some details about what discussions are to be planned in greater detail here
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start px-4">
              <div className="w-full items-center  justify-between gap-2 md:flex">
                <div className="mb-3 flex w-full flex-col items-start">
                  <p>Was the service user invited to choose the weekly key work activtity?</p>
                </div>
                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    Yes
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    No
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full items-center  justify-between gap-2 md:flex">
                <div className="mb-3 flex w-full flex-col items-start">
                  <p>Did the service user suggest any of the planned key work activity?</p>
                </div>
                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    Yes
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    No
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
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
            </div>
          </form>
        )
      case "risk-to-others":
        return (
          <form className="mt-4 flex w-full flex-col rounded bg-[#f5f5f5] p-4 ">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Name of person or persons delivering the key work activity?
              </label>
              <div className="input-field bg-white">
                <input
                  type="text"
                  id="serviceUserName"
                  placeholder="A short description of the key work"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="my-6 flex w-full flex-col items-start">
              <label htmlFor="email" className="label-title ">
                If any, what are the risks involved in this activity?
              </label>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="mb-6 flex w-full flex-col items-start">
              <label htmlFor="email" className="label-title ">
                Activity
              </label>
              <p className="mb-3 text-xs">
                Staff guide: You may add some details about what discussions are to be planned in greater detail here
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <div className="w-full items-center  justify-between gap-2 md:flex">
                <div className="mb-3 flex w-full flex-col items-start">
                  <p>Was the service user invited to choose the weekly key work activtity?</p>
                </div>
                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    Low
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    Medium
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    High
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex  items-center max-md:gap-3 md:flex-col">
                  <label htmlFor="staffOnDuty" className="">
                    Very High
                  </label>
                  <div className="input-field__sm w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Approved by
                </label>
                <div className="input-field bg-white">
                  <input
                    type="text"
                    id="serviceUserName"
                    placeholder="A short description of the key work"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Job title
                </label>
                <div className="input-field bg-white">
                  <input
                    type="text"
                    id="serviceUserName"
                    placeholder="A short description of the key work"
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
                <div className="flex w-full justify-between rounded-md bg-white p-4">
                  <p className="text-lg font-semibold max-md:text-lg">Risk Assessment Form</p>
                  {/* <p className="text-xs">25 January 2024</p> */}
                </div>
                <div className="mt-4 flex w-full justify-between rounded-t-md bg-white lg:text-sm xl:text-sm">
                  <Tab
                    label="Key work Discussion Planner"
                    onClick={() => setActiveTab("general-info")}
                    active={activeTab === "general-info"}
                  />
                  <Tab
                    label="Key work Activity Planner"
                    onClick={() => setActiveTab("risk-to-self")}
                    active={activeTab === "risk-to-self"}
                  />
                  <Tab
                    label="Risk Management"
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
