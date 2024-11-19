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

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function WeeklyReport() {
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
          <form className="mt-4 flex w-full flex-col rounded-md bg-white p-4">
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
                Update by
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="placement"
                  placeholder="Type and select your name"
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
                  Report Start Date
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
                  Report End Date
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
                Note
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
      case "skill":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-white p-4">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Self Care / Personal Hygeine
              </label>
              <p className="mb-3 text-xs">
                Staff guide: This personal skill should include regular body hygiene such as showers or a bath. Grooming
                and general care of the body. This also covers weekly laundry and standard of appearance such as state
                of clothing.This section also includes room checks.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Weekly Grade</p>{" "}
                <div className="input-field w-20">
                  <input
                    type="email"
                    id="placement"
                    placeholder="Select between 1 and 10"
                    className="w-20 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <CiCircleChevDown size={18} />
                </div>
                <FaCircleInfo size={24} />
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Cooking/Food Shopping
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Describe here cooking skills and frequency. Nutrition and food purchase. Budgeting
                allowance sensibly.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Weekly Grade</p>{" "}
                <div className="input-field w-20">
                  <input
                    type="email"
                    id="placement"
                    placeholder="Select between 1 and 10"
                    className="w-20 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <CiCircleChevDown size={18} />
                </div>
                <FaCircleInfo size={24} />
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Emotional Well Being
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Describe here the current emotions and feelings of the child. Are they exhibiting low
                moods? Is their emotional state interfering with routine weekly activities such as attending classes,
                engaging with staff and other residents, attitude to support sleepless nights, restlessness or
                expressive depression.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Weekly Grade</p>{" "}
                <div className="input-field w-20">
                  <input
                    type="email"
                    id="placement"
                    placeholder="Select between 1 and 10"
                    className="w-20 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <CiCircleChevDown size={18} />
                </div>
                <FaCircleInfo size={24} />
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Cooperation and Compliance
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Describe here cooking skills and frequency. Nutrition and food purchase. Budgeting
                allowance sensibly.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Weekly Grade</p>{" "}
                <div className="input-field w-20">
                  <input
                    type="email"
                    id="placement"
                    placeholder="Select between 1 and 10"
                    className="w-20 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <CiCircleChevDown size={18} />
                </div>
                <FaCircleInfo size={24} />
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
      case "skill(2)":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-white p-4">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Social Interaction/Relationships
              </label>
              <p className="mb-3 text-xs">
                Staff guide: This personal skill should include regular body hygiene such as showers or a bath. Grooming
                and general care of the body. This also covers weekly laundry and standard of appearance such as state
                of clothing.This section also includes room checks.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Weekly Grade</p>{" "}
                <div className="input-field w-20">
                  <input
                    type="email"
                    id="placement"
                    placeholder="Select between 1 and 10"
                    className="w-20 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <CiCircleChevDown size={18} />
                </div>
                <FaCircleInfo size={24} />
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Physical Health
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Describe here cooking skills and frequency. Nutrition and food purchase. Budgeting
                allowance sensibly.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Weekly Grade</p>{" "}
                <div className="input-field w-20">
                  <input
                    type="email"
                    id="placement"
                    placeholder="Select between 1 and 10"
                    className="w-20 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <CiCircleChevDown size={18} />
                </div>
                <FaCircleInfo size={24} />
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Knowledge of Local Resources
              </label>

              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Weekly Grade</p>{" "}
                <div className="input-field w-20">
                  <input
                    type="email"
                    id="placement"
                    placeholder="Select between 1 and 10"
                    className="w-20 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <CiCircleChevDown size={18} />
                </div>
                <FaCircleInfo size={24} />
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Education/Training
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Describe here the current emotions and feelings of the child. Are they exhibiting low
                moods? Is their emotional state interfering with routine weekly activities such as attending classes,
                engaging with staff and other residents, attitude to support sleepless nights, restlessness or
                expressive depression.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Weekly Grade</p>{" "}
                <div className="input-field w-20">
                  <input
                    type="email"
                    id="placement"
                    placeholder="Select between 1 and 10"
                    className="w-20 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <CiCircleChevDown size={18} />
                </div>
                <FaCircleInfo size={24} />
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Employment
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Describe here cooking skills and frequency. Nutrition and food purchase. Budgeting
                allowance sensibly.
              </p>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Weekly Grade</p>{" "}
                <div className="input-field w-20">
                  <input
                    type="email"
                    id="placement"
                    placeholder="Select between 1 and 10"
                    className="w-20 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <CiCircleChevDown size={18} />
                </div>
                <FaCircleInfo size={24} />
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
      case "appointments":
        return (
          <>
            <div className="mt-4 w-full rounded-md bg-white p-6">
              <form className=" flex w-full flex-col rounded-md border-[1px] border-[#C0C0C0] bg-[#E6E6E6] p-4">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="serviceUserName" className="label-title">
                    Title of Appointment
                  </label>
                  <div className="input-field bg-white">
                    <input
                      type="text"
                      id="serviceUserName"
                      placeholder="Enter name"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Date
                    </label>
                    <div className="input-field flex w-full bg-white">
                      <input
                        type="date"
                        id="staffOnDuty"
                        placeholder="job"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Appointment Type
                    </label>
                    <div className="input-field w-full bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="enter phone number"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                      <CiCircleChevDown size={18} />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Attended
                    </label>
                    <div className="input-field w-20 bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder=""
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Missed
                    </label>
                    <div className="input-field w-40 bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder=""
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "50%" }}
                      />
                    </div>
                  </div>
                </div>
              </form>

              <form className="my-4 flex w-full flex-col rounded-md border-[1px] border-[#C0C0C0] bg-[#E6E6E6] p-4">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="serviceUserName" className="label-title">
                    Title of Appointment
                  </label>
                  <div className="input-field bg-white">
                    <input
                      type="text"
                      id="serviceUserName"
                      placeholder="Enter name"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Date
                    </label>
                    <div className="input-field w-40 bg-white">
                      <input
                        type="date"
                        id="staffOnDuty"
                        placeholder="job"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Appointment Type
                    </label>
                    <div className="input-field w-40 bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder="enter phone number"
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                      <CiCircleChevDown size={18} />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Attended
                    </label>
                    <div className="input-field w-40 bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder=""
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Missed
                    </label>
                    <div className="input-field w-40 bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder=""
                        className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <button
                type="submit"
                className="mb-10 mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#69B7FF] p-3 text-sm text-white"
              >
                Add Another Appointment
                <IoIosAddCircleOutline size={20} />
              </button>

              <Link
                href="/dashboard/post/"
                type="button"
                className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
              >
                SAVE AND CONTINUE
              </Link>
            </div>
          </>
        )
      case "behaviour":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-white">
            <div className="mb-3 flex w-full  justify-end gap-5 px-4 py-2">
              <p className="text-end max-md:text-xs">Happened Just Ones</p>
              <p className="text-end max-md:text-xs">Happened More than Ones</p>
            </div>

            <div className="my-3 mb-3 flex w-full  items-center justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Bullying</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Fire Setting</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Criminal Damage</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Property Damage</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Drug/Substance Use</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Drug Dealing</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Racial Abuse</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Verbal Abuse</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Argument or Altercation</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Assault</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Smoking</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Non-cooperation or non compliance</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Unauthorised Absence</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Inciting Terrorist Acts</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Self Harm</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Suicidal Ideation</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-3 flex w-full items-center  justify-between bg-[#F5F5F5] px-4">
              <p className="text-sm">Theft</p>
              <div className="flex gap-60 max-md:gap-32">
                <Checkbox className="checkboxes2" />
                <Checkbox className="checkboxes2" />
              </div>
            </div>

            <div className="mb-6 flex w-full flex-col items-start  px-4">
              {/* <label htmlFor="email" className="label-title ">
                Add Other Risks
              </label>
              <div className="textarea-field ">
                <textarea
                  id="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div> */}
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
              <div className=" mb-6 flex flex-col items-center   md:w-2/3">
                <div className="flex w-full justify-between rounded-md bg-white p-4">
                  <p className="text-base font-semibold">New Weekly Report</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="my-4 flex w-full justify-between  rounded-t-md bg-white pt-2  lg:text-xs xl:text-sm">
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
          </div>
        </div>
      </section>
    </>
  )
}
