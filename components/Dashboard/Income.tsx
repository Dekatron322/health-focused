"use client"
import React, { useState } from "react"
import { GoArrowUpRight } from "react-icons/go"
import { Skeleton } from "@mui/material"

const Income = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className="report-card">
      <div className="mb-3 flex items-center justify-between">
        <p className="p-sm">Income</p>
        <GoArrowUpRight className="text-[#23E33E]" />
      </div>

      <h5>$9.650,00</h5>

      <div className=" flex items-center justify-between">
        <p className="p-xs medium ">84 Transactions</p>
        <p className="text-xs font-medium text-[#23E33E]">+10%</p>
      </div>
    </div>
  )
}

export default Income
