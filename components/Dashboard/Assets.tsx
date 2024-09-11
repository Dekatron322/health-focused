"use client"
import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Asset } from "utils"
import Image from "next/image"
import { IoAddCircleOutline } from "react-icons/io5"
import Search from "components/Search/Search"
import { BsChevronDown } from "react-icons/bs"
import Link from "next/link"
import CustomDropdown from "components/Search/CustomDropdown"

export const Assets = () => {
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState("")

  setTimeout(() => setLoading(false), 5000)

  const options = [
    { id: "1", name: "All Service Users" },
    { id: "2", name: "Marvin Martin" },
    { id: "3", name: "Zendaya Ken" },
    { id: "3", name: "Blon Dale" },
  ]

  return (
    <div className={styles.assets}>
      <div className="flex items-center justify-between py-3 sm:px-4">
        <Link href="/dashboard/new-logs" className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2">
          <p className="text-white max-md:px-0">New Daily Log</p>
          <IoAddCircleOutline className="text-white" size={20} />
        </Link>
        <div className="flex gap-3">
          <div className="lg:w-[180px]">
            <CustomDropdown
              options={options}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              placeholder="Type to select..."
            />
          </div>
          <Search />
          <div className="flex h-10 items-center justify-between gap-2 rounded-lg border border-[#CFDBD5] px-3 py-1 lg:w-[160px]">
            <input
              type="date"
              id="search"
              placeholder="Type to search..."
              className="w-full bg-transparent outline-none focus:outline-none"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1 sm:p-4">
        {Asset.map((assets) => (
          <div key={assets.id} className="w-full gap-3 rounded border-[0.5px] px-4 py-2 shadow">
            <div className="flex flex-row gap-2">
              <Image className="object-contain" src={assets.image} width={26} height={27} alt="dekalo" />
              <div className="flex w-full justify-between">
                <div>
                  <p className="text-xs text-[#69B7FF]">Updated by</p>
                  <h6 className="text-base font-semibold">{assets.name}</h6>
                  <p className="text-xs">{assets.location}</p>
                </div>
                <div className="flex flex-col items-end justify-end">
                  <p className="text-xs">{assets.day}</p>
                  <p className="">{assets.time}</p>
                </div>
              </div>
            </div>
            <div className="py-3">
              <p>{assets.content}</p>
            </div>
            <div className="border"></div>
            <div className="flex items-center justify-between">
              <div className="py-3">
                <p className="text-xs text-[#69B7FF]">Service User</p>
                <p>{assets.user}</p>
              </div>
              <Link href="/" className="flex items-center gap-2 rounded-md bg-[#69B7FF] px-3 py-2">
                <p className="text-xs text-white max-md:px-0">View</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
