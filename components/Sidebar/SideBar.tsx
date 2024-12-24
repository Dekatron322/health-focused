"use client"
import Link from "next/link"
import React, { useState } from "react"
import { Links } from "./Links"
import { LogoIcon, SettingsIcon } from "./Icons"
import { Box, Skeleton } from "@mui/material"
import Image from "next/image"

const SideBar = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className="sidebar flex h-full flex-col justify-between overflow-auto border-0 border-black max-md:hidden ">
      <div className="h-full justify-between border-0 border-red-700 lg:mt-6 lg:h-auto lg:space-y-8">
        <div className="hidden border-0 border-white px-7 lg:block lg:px-4 xl:px-5 2xl:px-7">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image className="" src="/images/logo.png" width={25} height={25} alt="smup" />
              <p className="inter-font font-normal text-white max-md:px-0 max-md:text-center max-md:text-[18px] md:text-lg lg:text-sm xl:text-sm 2xl:text-lg">
                Health Focused{" "}
              </p>
            </div>
          </Link>
        </div>

        <div className="h-full border-0 border-primary-700 lg:h-auto lg:space-y-4">
          <Links />
        </div>
      </div>

      <div className="my-4 hidden h-auto border-0 border-yellow-700 px-7 lg:block">
        <Link
          href="/settings"
          className="flex h-10 items-center space-x-2 border-0 border-black text-[#747A80] hover:bg-blue-100"
        >
          <SettingsIcon />
          <p className="hidden text-xs font-semibold text-[#747A80] lg:block 2xl:text-sm">Profile Settings</p>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
