"use client"
import React, { useState } from "react"
import { VscPerson } from "react-icons/vsc"
import { FaHouseChimneyWindow } from "react-icons/fa6"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import { PiBankBold } from "react-icons/pi"
import Link from "next/link"

const Income = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <section className="scrollbar-hide w-full gap-2 overflow-x-auto max-md:flex max-md:flex-shrink-0 md:grid lg:grid-cols-4">
      <div className="w-[100%]  rounded border-[0.5px] bg-[#FFFFFF] p-4 shadow-md shadow-white  max-md:flex-shrink-0 max-sm:w-2/3 lg:px-2">
        <div className="mb-4 flex  flex-shrink-0 justify-between ">
          <h6 className="text-xs font-bold">Active Service Users</h6>
          <Link
            href="/service-users"
            className="items-center justify-center rounded-md bg-[#50c9f4] px-2 py-1 text-xs text-[#000000]"
          >
            View
          </Link>
        </div>
        <div className="flex justify-between">
          <h6 className="font-bold">12</h6>
        </div>
        <div className="my-4 h-[1px] w-full bg-slate-300"></div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <VscPerson />
            <p className="text-xs font-semibold lg:text-[10px]">ALL-TIME SERVICE USERS</p>
          </div>
          <p className="text-xs">50</p>
        </div>
      </div>
      <div className="w-[100%] rounded border-[0.5px] bg-white p-4 shadow max-md:flex-shrink-0 max-sm:w-1/2 lg:px-2">
        <div className="mb-4 flex  flex-shrink-0 justify-between">
          <h6 className="text-xs font-bold">Active Placement</h6>
          <Link href="/placement" className="rounded-md bg-[#50c9f4] px-2 py-1 text-xs text-[#000000]">
            View
          </Link>
        </div>
        <div className="flex justify-between">
          <h6 className="font-bold">6</h6>
        </div>
        <div className="my-4 h-[1px] w-full bg-slate-300"></div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FaHouseChimneyWindow />
            <p className="text-xs lg:text-[10px]">ALL PLACEMENTS</p>
          </div>
          <p className="text-xs">09</p>
        </div>
      </div>
      <div className="w-[100%] rounded border-[0.5px] bg-white p-4 shadow max-md:flex-shrink-0 max-sm:w-1/2 lg:px-2">
        <div className="mb-4 flex  flex-shrink-0 justify-between">
          <h6 className="text-xs font-bold">Active Staff</h6>
          <Link href="/staff" className="rounded-md bg-[#50c9f4] px-2 py-1 text-xs text-[#000000]">
            View
          </Link>
        </div>
        <div className="flex justify-between">
          <h6 className="font-bold">18</h6>
        </div>
        <div className="my-4 h-[1px] w-full bg-slate-300"></div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <BadgeOutlinedIcon />
            <p className="text-xs lg:text-[10px]">ALL STAFF</p>
          </div>
          <p className="text-xs">30</p>
        </div>
      </div>
      <div className="w-[100%] rounded border-[0.5px] bg-white p-4 shadow max-md:flex-shrink-0 max-sm:w-1/2 lg:px-2">
        <div className="mb-4 flex  flex-shrink-0 justify-between">
          <h6 className="gap-2 overflow-hidden text-xs font-bold">Active Local Authorities</h6>
          <Link href="/authorities" className="h-[25px] rounded-md bg-[#50c9f4] px-2 py-1 text-xs text-[#000000]">
            View
          </Link>
        </div>
        <div className="flex justify-between">
          <h6 className="font-bold">7</h6>
        </div>
        <div className="my-4 h-[1px] w-full bg-slate-300"></div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <PiBankBold />
            <p className="text-xs lg:text-[10px]">ALL LOCAL AUTHORITIES</p>
          </div>
          <p className="text-xs">10</p>
        </div>
      </div>
    </section>
  )
}

export default Income
