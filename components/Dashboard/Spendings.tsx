"use client"
import React, { useState } from "react"
import { GoArrowDownLeft } from "react-icons/go"
import { Skeleton } from "@mui/material"

const Spendings = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className="report-card">
      <div className="mb-3 flex items-center justify-between">
        <p className="p-sm">Spendings</p>
        <GoArrowDownLeft className="text-[#f72cb7]" />
      </div>

      <h5>$7.845,00</h5>

      <div className=" flex items-center justify-between">
        <p className="p-xs medium ">84 Transactions</p>
        <p className="text-xs text-[#f72cb7]">-2%</p>
      </div>
    </div>
  )
}

export default Spendings
