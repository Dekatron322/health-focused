"use client"
import Link from "next/link"
import React, { useState } from "react"
import { Links } from "./Links"
import { EurIcon, GbpIcon, LogoIcon, PlusIcon, SettingsIcon, UsdIcon } from "./Icons"
import { Box, Skeleton } from "@mui/material"

const SideBar = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className="sidebar flex h-full flex-col justify-between overflow-auto border-0 border-black ">
      <div className="h-full justify-between border-0 border-red-700 lg:mt-6 lg:h-auto lg:space-y-8">
        <div className="hidden border-0 border-white px-7 lg:block">
          <Link href="/">
            <LogoIcon />
          </Link>
        </div>

        <div className="h-full border-0 border-primary-700 lg:h-auto lg:space-y-4">
          <p className="sidbar-title">Navigation</p>

          <Links />
        </div>

        <div className="hidden h-full border-0 border-purple-700  lg:block lg:h-auto lg:space-y-4">
          <p className="sidbar-title">Balances</p>

          <Balances />

          <div className=" px-7">
            <div className="flex flex-row items-center space-x-2 text-[#747A80]">
              <PlusIcon />
              <p className="text-sm font-semibold text-[#747A80]">Open a balance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 hidden h-auto border-0 border-yellow-700 px-7 lg:block">
        <Link
          href="/settings"
          className="flex h-10 items-center space-x-2 border-0 border-black text-[#747A80] hover:bg-blue-100"
        >
          <SettingsIcon />
          <p className="hidden text-sm font-semibold text-[#747A80] lg:block">Profile Settings</p>
        </Link>
      </div>
    </div>
  )
}

const balances = [
  { amount: "100,50.75", currency: "USD", icon: UsdIcon },
  {
    amount: "2310.40",
    currency: "EUR",
    icon: EurIcon,
  },
  { amount: "9455.50", currency: "GBP", icon: GbpIcon },
]

const Balances = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className="flex h-full w-full flex-row border-0 border-black lg:h-32 lg:flex-col">
      {balances.map((balance) => {
        const BalanceIcon = balance.icon
        return (
          <div
            key={balance.currency}
            className="flex grow items-center justify-center border-0 border-black lg:justify-normal lg:space-x-2"
          >
            <div className="flex grow items-center justify-center border-0 border-black px-7 lg:justify-normal lg:space-x-2">
              <BalanceIcon />
              <p className="text-sm font-bold  text-[#747A80]">{`${balance.amount} ${balance.currency}`}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SideBar
