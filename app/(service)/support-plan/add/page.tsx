"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosAddCircleOutline, IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import { FaCircleInfo } from "react-icons/fa6"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import Tab from "components/Search/Tab"
import { CiCircleChevDown } from "react-icons/ci"
import { Checkbox } from "@mui/material"

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
                  className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <IoIosArrowDropdown size={18} />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Update by
              </label>
              <div className="input-field w-40 bg-white">
                <input
                  type="text"
                  id="placement"
                  placeholder="Type and select your name"
                  className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <IoIosArrowDropdown size={18} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Creation Date
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="date"
                    id="staffOnDuty"
                    placeholder="Separate names by comma"
                    className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Placement Start Date
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="date"
                    id="staffOnDuty"
                    placeholder="Separate names by comma"
                    className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Allocated Keyworker
              </label>
              <div className="input-field w-40 bg-white">
                <input
                  type="text"
                  id="placement"
                  placeholder="Type and select your name"
                  className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <IoIosArrowDropdown size={18} />
              </div>
            </div>

            <div className="flex w-full  items-center justify-between gap-2">
              <div className="mb-3 flex w-full flex-col items-start">
                <p>What type of placement is this?</p>
              </div>
              <div className="mb-3 flex w-full  flex-col items-center">
                <label htmlFor="staffOnDuty" className="">
                  Emergency placement
                </label>
                <div className="input-field__sm w-40 bg-white">
                  <input
                    type="text"
                    id="staffOnDuty"
                    placeholder=""
                    className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="mb-3 flex flex-col items-center">
                <label htmlFor="staffOnDuty" className="">
                  Planned
                </label>
                <div className="input-field__sm w-40 bg-white">
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

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="staffOnDuty" className="label-title">
                Date of next care/support plan review
              </label>
              <div className="input-field w-40 bg-white">
                <input
                  type="date"
                  id="staffOnDuty"
                  placeholder="Separate names by comma"
                  className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="email" className="label-title ">
                Placement Overview
              </label>
              <p className="text--xs mb-3">
                Staff guide: Please describe the current needs and plans to improve better outcomes in this area of
                development.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
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
      case "skill":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Self Care / Personal Hygeine
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months </p>{" "}
                <div className="input-field w-20 bg-white">
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
                General Budgeting
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months</p>{" "}
                <div className="input-field w-20 bg-white">
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
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months</p>{" "}
                <div className="input-field w-20 bg-white">
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
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months</p>{" "}
                <div className="input-field w-20 bg-white">
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
                Social Interaction/Relationships
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months</p>{" "}
                <div className="input-field w-20 bg-white">
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
      case "skill(2)":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Physical Health
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <p className="mb-3 text-xs">
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months</p>{" "}
                <div className="input-field w-20 bg-white">
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
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months</p>{" "}
                <div className="input-field w-20 bg-white">
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
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months</p>{" "}
                <div className="input-field w-20 bg-white">
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
                Education/Training Attendance
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months</p>{" "}
                <div className="input-field w-20 bg-white">
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
                Appointments Attendance
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Please list barriers that may prevent the client from achieving the self - development
                targets and what measures of support to be taken to achieve them.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Score at start of placement </p>{" "}
                <div className="input-field w-20 bg-white">
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
              <div className="mt-3 flex items-center gap-2">
                <p className="whitespace-nowrap text-sm">Target Score in next 3 months</p>{" "}
                <div className="input-field w-20 bg-white">
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

      case "appointments":
        return (
          <>
            <div className="mt-4 rounded-md bg-[#f5f5f5] p-6">
              <p className="mb-3 text-base">Health Registration/Examination</p>
              <form className=" ] flex w-full flex-col rounded-md bg-[#C0C0C0] p-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="serviceUserName" className="label-title">
                      Appointment Date
                    </label>
                    <div className="input-field bg-white">
                      <input
                        type="date"
                        id="serviceUserName"
                        placeholder="Enter name"
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
                      Status
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
                </div>
              </form>
              <button
                type="submit"
                className="mb-10 mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#69B7FF] p-3 text-sm text-white"
              >
                Add Another Appointment
                <IoIosAddCircleOutline size={20} />
              </button>

              <p className="my-3 text-base">Education/Training Enrolment</p>
              <form className=" flex w-full flex-col rounded-md border-[1px] bg-[#C0C0C0] p-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="serviceUserName" className="label-title">
                      Appointment Date
                    </label>
                    <div className="input-field bg-white">
                      <input
                        type="date"
                        id="serviceUserName"
                        placeholder="Enter name"
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
                      Status
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
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5]">
            <div className="mb-3 flex w-full flex-col items-end px-6 pt-4">
              <p className="text-end">Tick which applies</p>
            </div>

            <div className="mb-3 border-b"></div>
            <div className="flex w-full items-center  justify-between px-6">
              <p className="text-sm">Medical Registrations</p>
              <div className="w-20">
                <Checkbox className="checkboxes22" />
              </div>
            </div>

            <div className="mb-3 border-b"></div>
            <div className="flex w-full items-center  justify-between px-6">
              <p className="text-sm">In Education</p>
              <div className="w-20">
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="flex w-full items-center  justify-between px-6">
              <p className="text-sm">Job Ready</p>
              <div className="w-20">
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="flex w-full items-center  justify-between px-6">
              <p className="text-sm">Risk Assessed</p>
              <div className="w-20">
                <Checkbox className="checkboxes22" />
              </div>
            </div>
            <div className="mb-3 border-b"></div>
            <div className="flex w-full items-center  justify-between px-6">
              <p className="text-sm">Fully Self Dependent</p>
              <div className="w-20">
                <Checkbox className="checkboxes22" />
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
        <div className="mx-auto flex min-h-screen bg-[#171818] ">
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
              <div className=" mb-6 flex flex-col  md:w-1/2 lg:w-2/3 2xl:w-1/2">
                <div className="flex w-full items-center justify-between rounded-md bg-white p-4">
                  <p className="text-lg font-semibold max-md:text-xl">Support Plan</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="mt-4 flex w-full justify-between rounded-t-md bg-white lg:text-sm xl:text-sm">
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

            {/* <Footer /> */}
          </div>
        </div>
      </section>
    </>
  )
}
