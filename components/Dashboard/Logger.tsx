"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { IoAddCircleOutline } from "react-icons/io5"
import { LuMail } from "react-icons/lu"
import { MdLocalPrintshop, MdOutlineCheckBoxOutlineBlank, MdOutlineLocalPrintshop, MdOutlineMail } from "react-icons/md"
import { TbEdit } from "react-icons/tb"
import { Bar } from "react-chartjs-2"
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from "chart.js"
import styles from "../../components/Dashboard/dashboard.module.css"
import Search from "components/Search/Search"
import { Asset } from "utils"

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController, BarController)

export const Logger = ({ serviceUser }: { serviceUser: any }) => {
  const [loading, setLoading] = useState(true)
  const [selectedTab, setSelectedTab] = useState("daily-log")

  setTimeout(() => setLoading(false), 5000)

  const tabs = [
    { id: "daily-log", name: "Daily Log" },
    { id: "weekly-report", name: "Weekly Report" },
    { id: "monthly-report", name: "Monthly Report" },
    { id: "skills-progress", name: "Skills Progress" },
    { id: "handover-note", name: "Handover Note" },
  ]

  if (!serviceUser) {
    return <div>No service user data available</div>
  }

  const renderContent = () => {
    switch (selectedTab) {
      case "daily-log":
        return <DailyLog />
      case "weekly-report":
        return <WeeklyReport />
      case "monthly-report":
        return <MonthlyReport />
      case "skills-progress":
        return <SkillsProgress />
      case "handover-note":
        return <HandoverNote />
      default:
        return null
    }
  }

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex w-full justify-between rounded-t-md bg-white  pt-3">
        <div className="flex w-full justify-between">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex justify-between px-2 py-2  font-semibold md:text-xs 2xl:text-sm ${
                selectedTab === tab.id ? "border-b-2 border-[#0052FF] text-[#0052FF]" : "bg-transparent text-black"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Render the selected tab content */}
      <div className="grid gap-3 py-2">{renderContent()}</div>
    </div>
  )
}

// Individual Tab Components (You can replace these with your actual content components)
const DailyLog = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-3 bg-[#E3F2FF] px-4 py-3">
        <Link
          href="/service-users/daily-report"
          className="flex items-center gap-2 whitespace-nowrap rounded-md bg-[#0085FF] px-3 py-2"
        >
          <p className="text-xs text-white max-md:hidden max-md:px-0 2xl:text-sm">New Daily Log</p>
          <IoAddCircleOutline className="text-white" size={20} />
        </Link>
        <div className="flex items-center gap-3 ">
          <div className="flex h-10 items-center justify-between gap-2 rounded-lg border border-[#CFDBD5] px-3 py-1 max-md:hidden md:hidden lg:w-[160px] 2xl:block">
            <input
              type="date"
              id="search"
              placeholder="Type to search..."
              className="w-full bg-transparent outline-none focus:outline-none"
              style={{ width: "100%" }}
            />
          </div>
          <Search />
          <MdOutlineMail size={24} />
          <MdLocalPrintshop size={24} />
        </div>
      </div>
      {Asset.map((assets) => (
        <div key={assets.id} className="w-full gap-3 rounded  bg-[#FFFFFF] px-4 py-2 shadow">
          <div className="flex flex-row gap-2">
            <Image className="object-contain" src="/images/user.png" width={35} height={35} alt="dekalo" />
            <div className="flex w-full justify-between">
              <div>
                <p className="text-xs text-[#69B7FF]">Updated by</p>
                <h6 className="font-semibold md:text-sm 2xl:text-base">{assets.name}</h6>
                <p className="text-xs">{assets.location}</p>
              </div>
              <div className="flex flex-col items-end justify-end">
                <p className="text-xs">{assets.day}</p>
                <p className="">{assets.time}</p>
              </div>
            </div>
          </div>
          <div className="py-3">
            <p className="md:text-sm 2xl:text-base">
              Martin has engaged the staff for about 30 minutes. They are holding a conversation about how to make
              Martin has engaged the staff for about 30 minutes. They are holding a conversation about how to make
              Martin has engaged the staff for about 30 minutes. They are holding a conversation about how tMartin has
              engaged the staff for about 30 minutes. They are holding a conversation about how to make ...{" "}
            </p>
          </div>
          <div className="border"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image className="object-contain" src="/uil_user-nurse.svg" width={35} height={35} alt="dekalo" />
              <div className="py-3">
                <p className="text-xs text-[#69B7FF]">Service User</p>
                <p>{assets.user}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <LuMail />
                <p className="text-xs max-md:px-0">Share</p>
              </Link>

              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <TbEdit />

                <p className="text-xs max-md:px-0">Edit</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const WeeklyReport = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-3 bg-[#E3F2FF] px-4 py-3">
        <Link href="/service-users/weekly-report" className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2">
          <p className="whitespace-nowrap text-xs text-white max-md:hidden max-md:px-0 2xl:text-sm">New Weekly Log</p>
          <IoAddCircleOutline className="text-white" size={20} />
        </Link>
        <div className="flex items-center gap-3 ">
          <div className="flex h-10 items-center justify-between gap-2 rounded-lg border border-[#CFDBD5] px-3 py-1 max-md:hidden md:hidden lg:w-[160px] 2xl:block">
            <input
              type="date"
              id="search"
              placeholder="Type to search..."
              className="w-full bg-transparent outline-none focus:outline-none"
              style={{ width: "100%" }}
            />
          </div>
          <Search />
          <MdOutlineMail size={24} />
          <MdLocalPrintshop size={24} />
        </div>
      </div>
      {Asset.map((assets) => (
        <div key={assets.id} className="w-full gap-3 rounded border-[0.5px] bg-[#ffffff] px-4 py-2 shadow">
          <div className="flex flex-row gap-2">
            <Image className="object-contain" src="/images/user.png" width={35} height={35} alt="dekalo" />
            <div className="flex w-full justify-between">
              <div>
                <p className="text-xs text-[#69B7FF]">Updated by</p>
                <h6 className="text-base font-semibold">{assets.name}</h6>
                <p className="text-xs">{assets.location}</p>
              </div>
              <div className="flex flex-col items-end ">
                <p className="text-xs">January 2024</p>
              </div>
            </div>
          </div>
          <div className="my-4 flex items-center gap-2">
            <MdOutlineCheckBoxOutlineBlank />
            <p className="text-[#0085FF]">22nd January 2024 - 28th January 2024</p>
          </div>

          <div className="flex items-center justify-end">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <MdOutlineLocalPrintshop />

                <p className="text-xs max-md:px-0">Print</p>
              </Link>

              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <LuMail />
                <p className="text-xs max-md:px-0">Share</p>
              </Link>

              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <TbEdit />

                <p className="text-xs max-md:px-0">Edit</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const MonthlyReport = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-3 bg-[#E3F2FF] px-4 py-3">
        <Link
          href="/service-users/monthly-report"
          className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2"
        >
          <p className="whitespace-nowrap text-xs text-white max-md:hidden max-md:px-0 2xl:text-sm">New Monthly Log</p>
          <IoAddCircleOutline className="text-white" size={20} />
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex h-10 items-center justify-between gap-2 rounded-lg border border-[#CFDBD5] px-3 py-1 max-md:hidden md:hidden lg:w-[120px] 2xl:block">
            <input
              type="date"
              id="search"
              placeholder="Type to search..."
              className="w-full bg-transparent outline-none focus:outline-none"
              style={{ width: "100%" }}
            />
          </div>
          <Search />
          <MdOutlineMail size={24} />
          <MdLocalPrintshop size={24} />
        </div>
      </div>
      {Asset.map((assets) => (
        <div key={assets.id} className="w-full gap-3 rounded border-[0.5px] bg-[#ffffff] px-4 py-2 shadow">
          <div className="flex flex-row gap-2">
            <Image className="object-contain" src="/images/user.png" width={35} height={35} alt="dekalo" />
            <div className="flex w-full justify-between">
              <div>
                <p className="text-xs text-[#69B7FF]">Updated by</p>
                <h6 className="text-base font-semibold">{assets.name}</h6>
                <p className="text-xs">{assets.location}</p>
              </div>
              <div className="flex flex-col items-end ">
                <p className="text-xs">January 2024</p>
              </div>
            </div>
          </div>
          <div className="my-4 flex items-center gap-2">
            <MdOutlineCheckBoxOutlineBlank />
            <p className="text-[#0085FF]">22nd January 2024 - 28th January 2024</p>
          </div>

          <div className="flex items-center justify-end">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <MdOutlineLocalPrintshop />

                <p className="text-xs max-md:px-0">Print</p>
              </Link>

              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <LuMail />
                <p className="text-xs max-md:px-0">Share</p>
              </Link>

              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <TbEdit />

                <p className="text-xs max-md:px-0">Edit</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const SkillsProgress = () => {
  const skills = [
    { name: "Self Care/Personal Hygiene", progress: 50, target: 80 },
    { name: "Cooking/Food Shopping", progress: 85, target: 90 },
    { name: "General Budgeting", progress: 60, target: 91 },
    { name: "Social Interaction/Relationships", progress: 45, target: 80 },
    { name: "Emotional Wellbeing", progress: 25, target: 80 },
    { name: "Cooperation/Compliance", progress: 55, target: 80 },
    { name: "Physical Health", progress: 95, target: 80 },
    { name: "Knowledge of local resources", progress: 55, target: 80 },
    { name: "Education", progress: 45, target: 85 },
    { name: "Employment", progress: 15, target: 80 },
    { name: "Appointment Attendance", progress: 55, target: 85 },
  ]

  const labels = skills.map((skill) => skill.name)

  const data = {
    labels: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    datasets: [
      {
        label: "Actual Progress",
        data: [85, 75, 90, 70],
        backgroundColor: "rgba(105, 183, 255, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    indexAxis: "y" as const, // This makes the bars horizontal
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  }

  return (
    <div className="flex w-full bg-[#ffffff] p-4">
      {" "}
      {/* Adjust the height value here */}
      <Bar data={data} options={options} max-height={800} />
    </div>
  )
}

export default SkillsProgress

const HandoverNote = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-3 bg-[#E3F2FF] px-4 py-3">
        <Link href="/service-users/handover-note" className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2">
          <p className="whitespace-nowrap text-xs text-white max-md:hidden max-md:px-0 2xl:text-sm">
            New Handover Note
          </p>
          <IoAddCircleOutline className="text-white" size={20} />
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex h-10 items-center justify-between gap-2 rounded-lg border border-[#CFDBD5] px-3 py-1 max-md:hidden md:hidden lg:w-[160px] 2xl:block">
            <input
              type="date"
              id="search"
              placeholder="Type to search..."
              className="w-full bg-transparent outline-none focus:outline-none"
              style={{ width: "100%" }}
            />
          </div>
          <Search />
          <MdOutlineMail size={24} />
          <MdLocalPrintshop size={24} />
        </div>
      </div>
      {Asset.map((assets) => (
        <div key={assets.id} className="w-full gap-3 rounded border-[0.5px] bg-[#ffffff] px-4 py-2 shadow">
          <div className="flex flex-row gap-2">
            <Image className="object-contain" src="/images/user.png" width={35} height={35} alt="dekalo" />
            <div className="flex w-full justify-between">
              <div>
                <p className="text-xs text-[#69B7FF]">Updated by</p>
                <h6 className="text-base font-semibold">{assets.name}</h6>
                <p className="text-xs">{assets.location}</p>
              </div>
              <div className="flex flex-col items-end ">
                <p className="text-xs">January 2024</p>
              </div>
            </div>
          </div>
          <div className="my-4 flex items-center gap-2">
            <MdOutlineCheckBoxOutlineBlank />
            <p className="text-[#0085FF]">22nd January 2024 - 28th January 2024</p>
          </div>

          <div className="flex items-center justify-end">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <MdOutlineLocalPrintshop />

                <p className="text-xs max-md:px-0">Print</p>
              </Link>

              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <LuMail />
                <p className="text-xs max-md:px-0">Share</p>
              </Link>

              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <TbEdit />

                <p className="text-xs max-md:px-0">Edit</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
