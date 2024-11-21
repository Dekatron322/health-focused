"use client"
import React, { useState } from "react"
import styles from "../../../../components/Dashboard/dashboard.module.css"
import { IoChevronForward, IoPrintOutline } from "react-icons/io5"
import { usePathname } from "next/navigation"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import Link from "next/link"

import Calendar from "components/Dashboard/Calendar"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns"
import { BiChevronRight, BiChevronsLeft, BiChevronsRight } from "react-icons/bi"
import { Transactions } from "components/Dashboard/Transactions"
import { NextAppointment } from "components/Dashboard/NextAppointment"
import { IoIosArrowDropleft } from "react-icons/io"
import { Checkbox } from "@mui/material"

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ")
}

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-09-04T13:00",
    endDatetime: "2024-09-04T14:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-09-20T09:00",
    endDatetime: "2024-09-20T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-09-18T17:00",
    endDatetime: "2024-09-18T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-09-09T13:00",
    endDatetime: "2024-09-09T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-13T14:00",
    endDatetime: "2022-05-13T14:30",
  },
]

const Events = () => {
  const [selectedParent, setSelectedParent] = useState<number | null>(null)

  const handleParentClick = (index: number) => {
    setSelectedParent(index)
  }

  const getColorByTitle = (title: string) => {
    const titleLowerCase = title.toLowerCase()
    switch (titleLowerCase) {
      case "tedx seminar":
        return "#A3BBF9" // Use your desired color for TedX Seminar
      case "interhouse sports":
        return "#6200EE" // Use your desired color for Interhouse Sports
      case "debate competition":
        return "#F68938" // Use your desired color for Debate Competition
      // Add more cases for other titles as needed
      default:
        return "#A3BBF9" // Default color
    }
  }

  const pathname = usePathname()
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"))
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
  }

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            <DashboardNav />
            <div className=" flex justify-between bg-[#171818] px-5 pb-16 max-md:px-3 2xl:px-16">
              <div className="mt-6">
                <Link
                  href="/dashboard/new-appointment"
                  className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs"
                >
                  <IoIosArrowDropleft className="text-lg text-[#0085FF] 2xl:text-xl" />
                  <p className="text-sm text-[#0085FF] 2xl:text-base">Add Appointment</p>
                </Link>
                <p className="mt-4 text-sm">Show Appointments for</p>
                <div className="mt-3 flex h-10 w-40 items-center justify-between gap-2 rounded-lg border border-[#CFDBD5] bg-white px-3 py-1 2xl:w-[200px]">
                  <input
                    type="text"
                    id="search"
                    placeholder="Type to search..."
                    className="w-full bg-transparent  outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <SearchOutlinedIcon />
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <Checkbox className="checkboxes" />
                  <p className="text-sm text-white 2xl:text-base">All Placement</p>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox className="checkboxes" />
                  <p className="text-sm text-white 2xl:text-base">John Cena</p>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox className="checkboxes" />
                  <p className="text-sm text-white 2xl:text-base">Mary Earps</p>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox className="checkboxes" />
                  <p className="text-sm text-white 2xl:text-base">Rivaldo Henry</p>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox className="checkboxes" />
                  <p className="text-sm text-white 2xl:text-base">Black Widow</p>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox className="checkboxes" />
                  <p className="text-sm text-white 2xl:text-base">Alisson Coursera</p>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox className="checkboxes" />
                  <p className="text-sm text-white 2xl:text-base">Maria Maria</p>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox className="checkboxes" />
                  <p className="text-sm text-white 2xl:text-base">Helen Aaland</p>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox className="checkboxes" />
                  <p className="text-sm text-white 2xl:text-base">Riquelme Joan</p>
                </div>
              </div>

              {/* .teacters_dashboard_lhs {
  flex: 3;
  margin: 15px 15px 0 48px;
  transition: ease-in-out;
  background-color: #ffffff;
  padding: 4px;
} */}

              <div className="mx-4 mt-6 flex w-full flex-col rounded-md bg-white p-4">
                <div className=" flex items-center justify-between">
                  <div className={styles.page}>
                    <p>Home</p>
                    <IoChevronForward />
                    <p className="capitalize text-[#F68938]">{pathname.split("/").pop()}</p>
                  </div>
                  {/* <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                      <LuSlidersHorizontal />

                      <p>Filter</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoPrintOutline />
                      <p>print</p>
                    </div>
                    <button className="rounded-md bg-[#1D0343] px-4 py-1 text-sm text-white">+ Add Events</button>
                  </div> */}
                </div>

                <Calendar />
              </div>
              <div>
                <div className=" my-3 flex justify-between gap-8">
                  <div className="flex  w-full rounded-2xl border bg-[#ffffff] p-2">
                    <div className="">
                      <div className="mx-auto w-[260px]   2xl:w-[420px] ">
                        <div className="">
                          <div className="">
                            <div className="flex items-center">
                              <h5 className="flex-auto  font-bold text-gray-900">
                                {format(firstDayCurrentMonth, "MMMM yyyy")}
                              </h5>
                              <button
                                type="button"
                                onClick={previousMonth}
                                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">Previous month</span>
                                <BiChevronsLeft size={24} />
                              </button>
                              <button
                                onClick={nextMonth}
                                type="button"
                                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">Next month</span>
                                <BiChevronsRight size={24} />
                              </button>
                            </div>
                            <div className="mt-3 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                              <div className="text-[#780000]">S</div>
                              <div>M</div>
                              <div>T</div>
                              <div>W</div>
                              <div>T</div>
                              <div>F</div>
                              <div>S</div>
                            </div>
                            <div className="mt-1.5 grid grid-cols-7 text-sm">
                              {days.map((day, dayIdx) => (
                                <div
                                  key={day.toString()}
                                  className={classNames(
                                    dayIdx === 0 && (colStartClasses[getDay(day)] || ""),
                                    getDay(day) === 0 && "text-[#780000]",
                                    ""
                                  )}
                                >
                                  <button
                                    type="button"
                                    onClick={() => setSelectedDay(day)}
                                    className={classNames(
                                      isEqual(day, selectedDay) && "text-white",
                                      !isEqual(day, selectedDay) && isToday(day) && "text-red-500",
                                      !isEqual(day, selectedDay) &&
                                        !isToday(day) &&
                                        isSameMonth(day, firstDayCurrentMonth) &&
                                        "text-gray-900",
                                      !isEqual(day, selectedDay) &&
                                        !isToday(day) &&
                                        !isSameMonth(day, firstDayCurrentMonth) &&
                                        "text-gray-400",
                                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                                      isEqual(day, selectedDay) && !isToday(day) && "bg-red-500",
                                      !isEqual(day, selectedDay) && "hover:bg-[#F0F0F0]",
                                      (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
                                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                                    )}
                                  >
                                    <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
                                  </button>

                                  <div className="mx-auto mb-1 h-1 w-1">
                                    {meetings.some((meeting) => isSameDay(parseISO(meeting.startDatetime), day)) && (
                                      <div className="h-1 w-1 rounded-full bg-sky-500"></div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dashboard_body__rhs}>
                  <NextAppointment />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

let colStartClasses = ["", "col-start-2", "col-start-3", "col-start-4", "col-start-5", "col-start-6", "col-start-7"]

export default Events
