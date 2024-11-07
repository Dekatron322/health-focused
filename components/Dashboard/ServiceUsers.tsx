"use client"
import React, { useState } from "react"
import { VscPerson } from "react-icons/vsc"
import { FaHouseChimneyWindow } from "react-icons/fa6"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import { PiBankBold } from "react-icons/pi"
import Link from "next/link"

const Services = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <>
      <div className="w-full rounded border-[0.5px] bg-[#FFFFFF] p-4 shadow">
        <div className="mb-8 flex justify-between">
          <h6 className="text-base font-bold">Active Service Users</h6>
          {/* <Link
            href="/department"
            className="items-center justify-center rounded-md bg-[#50c9f4] px-2 py-1 text-xs text-[#000000]"
          >
            View
          </Link> */}
        </div>
        <div className="flex justify-between">
          <h6 className="font-bold">12</h6>
        </div>
        {/* <div className="my-4 h-[1px] w-full bg-slate-300"></div> */}
        {/* <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <VscPerson />
            <p className="text-xs">ALL-TIME SERVICE USERS</p>
          </div>
          <p className="text-xs">50</p>
        </div> */}
      </div>

      <div className="w-full rounded border-[0.5px] bg-[#FFFFFF] p-4 shadow">
        <div className="mb-8 flex justify-between">
          <h6 className="text-base font-bold">Inactive Service Users</h6>
          {/* <Link href="/department" className="rounded-md bg-[#50c9f4] px-2 py-1 text-xs text-[#000000]">
            View
          </Link> */}
        </div>
        <div className="flex justify-between">
          <h6 className="font-bold">18</h6>
        </div>
        {/* <div className="my-4 h-[1px] w-full bg-slate-300"></div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <BadgeOutlinedIcon />
            <p className="text-xs">ALL STAFF</p>
          </div>
          <p className="text-xs">30</p>
        </div> */}
      </div>
      <div className="w-full rounded border-[0.5px] bg-[#FFFFFF] p-4 shadow">
        <div className="mb-8 flex justify-between">
          <h6 className="text-base font-bold">All time Service Users</h6>
          {/* <Link href="/department" className="rounded-md bg-[#50c9f4] px-2 py-1 text-xs text-[#000000]">
            View
          </Link> */}
        </div>
        <div className="flex justify-between">
          <h6 className="font-bold">7</h6>
        </div>
        {/* <div className="my-4 h-[1px] w-full bg-slate-300"></div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <PiBankBold />
            <p className="text-xs">ALL LOCAL AUTHORITIES</p>
          </div>
          <p className="text-xs">10</p>
        </div> */}
      </div>
    </>
  )
}

export default Services
