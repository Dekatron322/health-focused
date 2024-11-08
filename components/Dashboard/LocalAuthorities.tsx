"use client"
import React, { useState } from "react"
import { VscPerson } from "react-icons/vsc"
import { FaHouseChimneyWindow } from "react-icons/fa6"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import { PiBankBold } from "react-icons/pi"
import Link from "next/link"

const LocalAuthorities = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <>
      <div className="h-32 w-full rounded border-[0.5px] bg-white p-4 shadow">
        <div className="mb-8 flex justify-between">
          <h6 className="text-base font-semibold">Local Authorities</h6>
        </div>
        <div className="flex justify-between">
          <h6 className="font-bold">12</h6>
        </div>
      </div>

      <div className="w-full rounded border-[0.5px] bg-white p-4 shadow">
        <div className="mb-8 flex justify-between">
          <h6 className="text-base font-semibold">Inactive Local Authorities</h6>
        </div>
        <div className="flex justify-between">
          <h6 className="font-bold">18</h6>
        </div>
      </div>
      <div className="w-full rounded border-[0.5px] bg-white p-4 shadow">
        <div className="mb-8 flex justify-between">
          <h6 className="text-base font-semibold">All Local Authorities</h6>
        </div>
        <div className="flex justify-between">
          <h6 className="font-bold">7</h6>
        </div>
      </div>
    </>
  )
}

export default LocalAuthorities
