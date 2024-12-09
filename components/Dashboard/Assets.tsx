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
    <div className="rounded-md bg-[#F5F5F5] p-3">
      <div className="flex w-full items-center justify-between gap-3 py-3 sm:px-4 ">
        <Link
          href="/dashboard/new-logs"
          className="flex h-[33px] items-center gap-2 whitespace-nowrap rounded-[4px] bg-[#0085FF] px-3 py-2"
        >
          <p className="text-sm text-white max-md:hidden max-md:px-0">New Daily Log</p>
          <IoAddCircleOutline className="text-white" size={20} />
        </Link>
        <div className="flex w-full justify-end  gap-3">
          <div className="flex w-full lg:w-[200px]">
            <CustomDropdown
              options={options}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              placeholder="Type and Select User"
            />
          </div>
          <Search />
          {/* <div className="flex h-10 items-center justify-between gap-2 rounded-lg   px-3  max-md:hidden lg:w-[200px]">
            <Image className="object-contain" src="/VectorLeft.png" width={24} height={27} alt="dekalo" />
            <Image className="object-contain" src="/Group.png" width={24} height={27} alt="dekalo" />
            <p className="w whitespace-nowrap">June 25, 2024</p>
            <Image className="object-contain" src="/VectorRight.png" width={24} height={27} alt="dekalo" />
          </div> */}
          <div className="flex h-[33px] items-center justify-between gap-2 rounded-[4px] border border-[#CFDBD5] px-3 py-1 max-md:hidden lg:w-[160px]">
            <input
              type="date"
              id="search"
              placeholder="Type to search..."
              className="w-full bg-transparent outline-none focus:outline-none lg:text-xs xl:text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-1 sm:p-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {Asset.map((assets) => (
          <div key={assets.id} className="w-full gap-3 rounded bg-white px-4 py-2 shadow lg:px-3 xl:px-3 2xl:px-4">
            <div className="flex flex-row gap-2">
              <Image className="object-contain" src={assets.image} width={35} height={27} alt="dekalo" />
              <div className="flex w-full justify-between">
                <div>
                  <p className="text-xs text-[#69B7FF] lg:text-[10px] xl:text-xs 2xl:text-xs">Updated by</p>
                  <h6 className="text-sm font-semibold lg:text-xs xl:text-xs 2xl:text-sm">{assets.name}</h6>
                  <p className="text-xs lg:text-[10px] xl:text-[10px] 2xl:text-xs">{assets.location}</p>
                </div>
                <div className="flex flex-col items-end justify-end">
                  <p className="text-xs lg:text-xs xl:text-[10px] 2xl:text-xs">{assets.day}</p>
                  <p className="text-sm xl:text-[10px] 2xl:text-sm ">{assets.time}</p>
                </div>
              </div>
            </div>
            <div className="py-3">
              <p className="text-sm lg:text-xs xl:text-xs 2xl:text-sm">{assets.content}</p>
            </div>
            <div className="border-b"></div>
            <div className="flex items-center justify-between">
              <div className="py-3">
                <p className="text-xs text-[#69B7FF]">Service User</p>
                <p className="text-sm lg:text-xs xl:text-xs 2xl:text-sm">{assets.user}</p>
              </div>
              <Link href="/dashboard/post" className="flex items-center gap-2 rounded-md bg-[#69B7FF] px-3 py-2">
                <p className="text-xs text-white max-md:px-0">View</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
