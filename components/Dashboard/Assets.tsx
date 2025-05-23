"use client"

import React, { useEffect, useState } from "react"
import { IoAddCircleOutline } from "react-icons/io5"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import Image from "next/image"
import Link from "next/link"
import CustomDropdown from "components/Search/CustomDropdown"

interface MyAsset {
  id: string
  service_user_name: string
  updated_by: string
  placement: string
  staff_on_duty: string
  update: string
  status: boolean
  pub_date: string
}

const truncateText = (text: string, maxWords: number): string => {
  const words = text.split(" ")
  return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : text
}

export const Assets = () => {
  const [logs, setLogs] = useState<MyAsset[]>([])
  const [filteredLogs, setFilteredLogs] = useState<MyAsset[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDate, setFilterDate] = useState("")

  const [selectedOption, setSelectedOption] = useState("")
  const options = [
    { id: "1", name: "All Service Users" },
    { id: "2", name: "Marvin Martin" },
    { id: "3", name: "Zendaya Ken" },
    { id: "4", name: "Blon Dale" },
  ]

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch("https://hf-api.craftandurban.com/daily-log/daily-logo/")
        const data = (await response.json()) as MyAsset[]
        setLogs(data)
        setFilteredLogs(data) // Initialize with full data
      } catch (error) {
        console.error("Error fetching logs:", error)
      }
    }

    fetchLogs()
  }, [])

  useEffect(() => {
    // Filter logs based on search term and date
    const filtered = logs.filter((log) => {
      const matchesSearch = log.updated_by.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDate = filterDate ? log.pub_date.startsWith(filterDate) : true
      return matchesSearch && matchesDate
    })
    setFilteredLogs(filtered)
  }, [searchTerm, filterDate, logs])

  return (
    <div className="rounded-md bg-[#F5F5F5] p-3">
      <div className="flex w-full items-center justify-between gap-3 py-3 sm:px-4">
        <Link
          href="/dashboard/new-logs"
          className="flex h-[33px] items-center gap-2 whitespace-nowrap rounded-[4px] bg-[#0085FF] px-3 py-2"
        >
          <p className="text-sm text-white max-md:hidden max-md:px-0">New Daily Log</p>
          <IoAddCircleOutline className="text-white" size={20} />
        </Link>

        <div className="flex w-full justify-end gap-3">
          <div className="flex w-full lg:w-[200px]">
            <CustomDropdown
              options={options}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              placeholder="Type and Select User"
            />
          </div>

          <div className="flex h-[33px] max-w-[317px] items-center justify-between gap-2 rounded-[5px] bg-white px-3 py-1 xl:w-full">
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full bg-transparent outline-none focus:outline-none lg:text-xs xl:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchOutlinedIcon />
          </div>

          <div className="flex h-[33px] items-center justify-between gap-2 rounded-[4px] border border-[#CFDBD5] px-3 py-1 max-md:hidden lg:w-[160px]">
            <input
              type="date"
              className="w-full bg-transparent outline-none focus:outline-none lg:text-xs xl:text-sm"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-1 sm:p-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredLogs.map((assets) => (
          <div
            key={assets.id}
            className="flex w-full flex-col gap-3 rounded bg-white px-4 py-2 shadow lg:px-3 xl:px-3 2xl:px-4"
          >
            <div className="flex flex-row gap-2">
              <Image className="object-contain" src="/Number=104.png" width={35} height={35} alt="dekalo" />
              <div className="flex w-full justify-between">
                <div>
                  <p className="text-xs text-[#69B7FF] lg:text-[10px] xl:text-xs">Updated by</p>
                  <h6 className="text-sm font-semibold lg:text-xs xl:text-xs 2xl:text-sm">{assets.updated_by}</h6>
                </div>
                <div className="flex flex-col items-end justify-end">
                  <p className="text-xs lg:text-xs xl:text-[10px] 2xl:text-xs">
                    {new Date(assets.pub_date).toLocaleDateString()}
                  </p>
                  <p className="text-sm xl:text-[10px] 2xl:text-sm">{new Date(assets.pub_date).toLocaleTimeString()}</p>
                </div>
              </div>
            </div>
            <div className="py-3">
              <p className="text-sm lg:text-xs xl:text-xs 2xl:text-sm">{truncateText(assets.update, 15)}</p>
            </div>
            <div className="mt-auto border-b"></div>
            <div className="flex items-center justify-between ">
              <div className="py-3">
                <p className="text-xs text-[#69B7FF]">Service User</p>
                <p className="text-sm lg:text-xs xl:text-xs 2xl:text-sm">{assets.service_user_name}</p>
              </div>
              <Link
                href="/dashboard/post"
                onClick={() => localStorage.setItem("selectedLogId", assets.id)}
                className="flex items-center gap-2 rounded-md bg-[#69B7FF] px-3 py-2"
              >
                <p className="text-xs text-white max-md:px-0">View</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
