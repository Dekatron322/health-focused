import { Skeleton, Tooltip } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import Image from "next/image"

import { usePathname, useRouter } from "next/navigation"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import { VscPerson } from "react-icons/vsc"
import { FaHouseChimneyWindow } from "react-icons/fa6"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import { PiBankBold } from "react-icons/pi"
import { IoDocumentTextOutline } from "react-icons/io5"
import { IoSettingsOutline } from "react-icons/io5"
import { BiMessageDetail } from "react-icons/bi"
import { IoIosArrowDown, IoIosNotificationsOutline, IoMdAddCircleOutline, IoMdLock, IoMdSearch } from "react-icons/io"

import Search from "components/Search/Search"
import { RxCross2 } from "react-icons/rx"
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft"
import Link from "next/link"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { LuLogOut } from "react-icons/lu"

interface UserDetails {
  id: number
  username: string
  email: string
  phone_number: string
  address: string
  account_type: string
}

const DashboardNav: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isMoonIcon, setIsMoonIcon] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)
  const [error, setError] = useState("")

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const toggleIcon = () => {
    setIsMoonIcon(!isMoonIcon)
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token")
      const userId = localStorage.getItem("userId")

      if (!token || !userId) {
        setError("You are not authenticated. Please sign in.")
        router.push("/signin")
        return
      }

      try {
        const response = await fetch(`https://hf-api.craftandurban.com/custom-user/get-user-detail/${userId}/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          const errorData = (await response.json()) as UserDetails
          setError("Failed to fetch user details.")
          router.push("/signin")
          return
        }

        const data = (await response.json()) as UserDetails
        setUserDetails(data)
      } catch (err) {
        setError("An unexpected error occurred while fetching user details.")
        router.push("/signin")
      }
    }

    fetchUserDetails()
  }, [])

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  if (!userDetails) {
    return (
      <nav className="hidden border-b bg-white px-16 py-4 md:block">
        <p>Loading user details...</p>
      </nav>
    )
  }

  // useEffect(() => {
  //   setMounted(true)
  //   fetchUserDetails()
  // }, [])

  // const fetchUserDetails = async () => {
  //   try {
  //     const userId = localStorage.getItem("id")
  //     if (userId) {
  //       const response = await axios.get<UserDetails>(
  //         `https://api2.caregiverhospital.com/app_user/get-user-detail/${userId}/`
  //       )
  //       if (response.data) {
  //         setUserDetails(response.data)
  //       } else {
  //         setError("User details not found.")
  //         router.push("/signin")
  //       }
  //     } else {
  //       setError("User ID not found.")
  //       router.push("/signin")
  //     }
  //   } catch (error) {
  //     setError("Failed to load user details.")
  //     console.error("Error fetching user details:", error)
  //     router.push("/signin")
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
  //       setIsDropdownOpen(false)
  //     }
  //     if (navRef.current && !navRef.current.contains(event.target as Node)) {
  //       setIsNavOpen(false)
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [isDropdownOpen, isNavOpen])

  // if (!mounted) {
  //   return null
  // }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const handleProfileClick = () => {
    toggleDropdown()
  }

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true)
    closeDropdown() // Close the dropdown when the logout is clicked
  }

  const getNavLinkClass = (path: string) => {
    return pathname === path ? "text-[#46ffa6]" : "text-white"
  }

  const firstLetter = userDetails?.email.charAt(0).toUpperCase() || "HF"

  return (
    <>
      <nav className="hidden border-b bg-white px-16 py-4 md:block">
        <div className="flex items-center justify-between">
          <h5 className="font-bold capitalize">Admin Dashboard</h5>

          <div className="flex items-center gap-2">
            <Tooltip title="Notifications">
              <div className="flex h-8 cursor-pointer items-center rounded border border-[#CFDBD5] px-2 py-1">
                <IoIosNotificationsOutline />
              </div>
            </Tooltip>

            <Tooltip title="messages">
              <div className="flex h-8 cursor-pointer items-center rounded border border-[#CFDBD5] px-2 py-1">
                <BiMessageDetail />
              </div>
            </Tooltip>

            <div className="flex cursor-pointer items-center gap-1">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#044982]"
                onClick={handleProfileClick}
              >
                <p className="text-[#ffffff]">{firstLetter}</p>
              </div>
              <IoIosArrowDown onClick={handleProfileClick} />
            </div>
          </div>
        </div>
      </nav>
      <nav className="block border-b  px-16 py-4 max-md:px-3 md:hidden">
        <div className="flex items-center justify-between">
          <FormatAlignLeftIcon onClick={toggleNav} style={{ cursor: "pointer" }} />

          <div className="redirect flex h-[50px] items-center justify-center gap-1 rounded-full px-1">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#044982]"
              onClick={handleProfileClick}
            >
              <p className="text-[#ffffff]">{firstLetter}</p>
            </div>
            <KeyboardArrowDownIcon />
          </div>
        </div>

        <div
          ref={navRef}
          className={`fixed left-0 top-0 z-50 h-full w-[250px] bg-[#044982] transition-transform duration-300 ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 pt-6">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image className="" src="/images/logo.png" width={25} height={25} alt="smup" />
                <p className="inter-font font-extrabold text-[#fff] max-md:px-0 max-md:text-center max-md:text-[18px]  md:text-lg">
                  Health Focused{" "}
                </p>
              </div>
            </Link>
            <RxCross2 className="text-white" onClick={toggleNav} style={{ cursor: "pointer" }} />
          </div>
          <div className="mt-4 flex flex-col items-start space-y-2 p-4">
            <Link href="/dashboard" className={`flex items-center  gap-2 pb-4 ${getNavLinkClass("/dashboard")}`}>
              <DashboardOutlinedIcon className="text-lg" />
              <p>Dashboard</p>
            </Link>

            <Link href="/service-users" className={`flex items-center gap-2 pb-4 ${getNavLinkClass("/service-users")}`}>
              <VscPerson className="text-lg" size={18} />
              <p>Service Users</p>
            </Link>
            <Link href="/placement" className={`flex items-center gap-2 pb-4 ${getNavLinkClass("/appointments")}`}>
              <FaHouseChimneyWindow className="text-lg" size={18} />
              <p>Placement</p>
            </Link>

            <Link href="/staff" className={`flex items-center gap-2 pb-4 ${getNavLinkClass("/staff")}`}>
              <BadgeOutlinedIcon className="text-lg" />
              <p>Staff</p>
            </Link>

            <Link href="/authorities" className={`flex items-center gap-2 pb-4 ${getNavLinkClass("/authorities")}`}>
              <PiBankBold className="text-lg" size={18} />
              <p>Local Authorities</p>
            </Link>

            <Link href="/policy" className={`flex items-center gap-2 pb-4 ${getNavLinkClass("/policy")}`}>
              <IoDocumentTextOutline className="text-lg" size={18} />
              <p>Policy</p>
            </Link>

            <Link href="/settings" className={`flex items-center gap-2 pb-4 ${getNavLinkClass("/settings")}`}>
              <IoSettingsOutline className="text-lg" />
              <p>Settings</p>
            </Link>

            <button
              onClick={handleLogoutClick}
              className="fixed bottom-2 mt-10 flex items-center gap-2 pb-4 text-white"
            >
              <LuLogOut className="text-lg" />
              <p>Logout</p>
            </button>
          </div>
        </div>
      </nav>

      {/* <div
        ref={dropdownRef}
        className="auth absolute right-16 top-14 z-10 w-64 rounded border shadow-md transition-opacity duration-300"
      >
        <div className="border-b px-4 py-2">
          <div className="flex items-center gap-2">
            <MdAccountCircle />
            <p className="text-sm font-semibold">Account Information</p>
          </div>

          <>
            <p className="text-xs">xxx</p>
            <p className="text-xs">xxxx</p>
            <p className="text-xs">xxx</p>
          </>
        </div>
        <div className="flex items-center gap-2 border-b px-4 py-2" onClick={handleLogoutClick}>
          <RiLogoutCircleRLine />
          <p className="cursor-pointer text-sm font-semibold">Logout</p>
        </div>
        <div className="flex items-center gap-2 border-b px-4 py-2" onClick={closeDropdown}>
          <IoMdLock />
          <p className="text-sm font-semibold">Security</p>
        </div>
      </div> */}
    </>
  )
}

export default DashboardNav
