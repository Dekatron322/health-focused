"use client"
import React, { useEffect, useState } from "react"
import Search from "components/Search/Search"
import { IoMdAddCircleOutline, IoMdLock, IoMdSearch } from "react-icons/io"
import Image from "next/image"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Tooltip } from "@mui/material"
import { MdAccountCircle, MdDeleteForever } from "react-icons/md"
import { RiLogoutCircleRLine } from "react-icons/ri"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"

const DashboardNav = () => {
  const pathname = usePathname()
  const [isMoonIcon, setIsMoonIcon] = useState(true)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  setTimeout(() => setLoading(false), 5000)

  const toggleIcon = () => {
    setIsMoonIcon(!isMoonIcon)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const handleProfileClick = () => {
    toggleDropdown()
  }

  const isDashboardPage = pathname.includes("/dashboard")

  return (
    <>
      <nav className="hidden px-16 py-4 md:block">
        <div className="flex items-center justify-between">
          <h6 className="text-lg font-bold capitalize">{pathname.split("/").pop()}</h6>

          <div className="flex items-center gap-2">
            <Search />

            <Tooltip title="Notifications">
              <div className="flex h-10 w-10 items-center justify-center rounded border border-[#CFDBD5] px-2 py-1">
                <NotificationsNoneOutlinedIcon />
              </div>
            </Tooltip>

            <Image
              src="/Img.svg"
              width={40}
              height={40}
              alt="profile"
              className="pointer rounded-full"
              onClick={handleProfileClick}
            />
          </div>
        </div>
      </nav>
      <nav className="mb-4 block border-b px-16 py-4 max-md:px-3 md:hidden">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer p-1 transition duration-300">
            {isDashboardPage ? <IoMdSearch /> : <IoMdAddCircleOutline />}
          </div>
          <h5 className="font-bold capitalize">{pathname.split("/").pop()}</h5>
          <Image src="/Img.svg" width={35} height={16} alt="profile" />
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="absolute right-16 top-14 z-10  w-64 rounded border bg-white  shadow-md">
          <div className="border-b px-4 py-2">
            <div className="flex items-center gap-2  ">
              <MdAccountCircle />

              <p className="font-semibold">Account Information</p>
            </div>
            <small>Dekalo-Inc</small>
          </div>
          <div className="flex items-center gap-2 border-b px-4 py-2">
            <IoMdLock />

            <p className="font-semibold">Security</p>
          </div>
          <div className="flex items-center gap-2 border-b px-4 py-2">
            <RiLogoutCircleRLine />

            <p className="font-semibold">Logout</p>
          </div>
          <div className="flex items-center gap-2  px-4 py-2">
            <MdDeleteForever className="text-red-500" />
            <p className="font-semibold text-red-500">Delete</p>
          </div>
        </div>
      )}
    </>
  )
}

export default DashboardNav
