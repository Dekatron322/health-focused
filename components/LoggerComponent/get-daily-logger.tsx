"use client"

import React, { useEffect, useState } from "react"
import Search from "components/Search/Search"
import Image from "next/image"
import Link from "next/link"
import { IoAddCircleOutline } from "react-icons/io5"
import { LuMail } from "react-icons/lu"
import { MdLocalPrintshop, MdOutlineMail } from "react-icons/md"
import { TbEdit } from "react-icons/tb"

interface DailyLog {
  id: string
  service_user_name: string
  updated_by: string
  placement: string
  staff_on_duty: string
  update: string
  status: boolean
  pub_date: string
}

interface ServiceUser {
  id: string
  daily_logs: DailyLog[]
}

const GetDailyLogger = () => {
  const [serviceUser, setServiceUser] = useState<ServiceUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServiceUser = async () => {
      const serviceUserId = localStorage.getItem("serviceUserId")
      if (serviceUserId) {
        try {
          const response = await fetch(`https://hf-api.craftandurban.com/service-user/service-user/${serviceUserId}/`)
          if (response.ok) {
            const data = (await response.json()) as ServiceUser
            setServiceUser(data)
          } else {
            console.error("Failed to fetch service user")
          }
        } catch (error) {
          console.error("Error fetching service user:", error)
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }

    fetchServiceUser()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!serviceUser) {
    return <p>No service user data found.</p>
  }

  return (
    <>
      <div className="flex items-center justify-between gap-3 bg-[#E3F2FF] px-4 py-3">
        <Link
          href="/service-users/daily-report"
          className="flex items-center gap-2 whitespace-nowrap rounded-md bg-[#0085FF] px-3 py-2"
        >
          <p className="text-xs text-white max-md:hidden max-md:px-0 2xl:text-sm">New Daily Log</p>
          <IoAddCircleOutline className="text-white" size={20} />
        </Link>
        <div className="flex items-center gap-3 ">
          <div className="flex h-10 items-center justify-between gap-2 rounded-lg border border-[#CFDBD5] px-3 py-1 max-md:hidden md:hidden lg:w-[160px] 2xl:block">
            <input
              type="date"
              id="search"
              placeholder="Type to search..."
              className="w-full bg-transparent outline-none focus:outline-none"
              style={{ width: "100%" }}
            />
          </div>
          <Search />
          <MdOutlineMail size={24} />
          <MdLocalPrintshop size={24} />
        </div>
      </div>

      {serviceUser.daily_logs?.map((log) => (
        <div key={log.id} className="w-full gap-3 rounded  bg-[#FFFFFF] px-4 py-2 shadow">
          <div className="flex flex-row gap-2">
            <Image className="object-contain" src="/images/user.png" width={35} height={35} alt="dekalo" />
            <div className="flex w-full justify-between">
              <div>
                <p className="text-xs text-[#69B7FF]">Updated by</p>
                <h6 className="font-semibold md:text-sm 2xl:text-base">{log.updated_by}</h6>
                <p className="text-xs">{log.placement}</p>
              </div>
              <div className="flex flex-col items-end justify-end">
                <p className="text-xs">{new Date(log.pub_date).toLocaleDateString()}</p>
                <p className="">{new Date(log.pub_date).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
          <div className="py-3">
            <p className="md:text-sm 2xl:text-base">{log.update}</p>
          </div>
          <div className="border"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image className="object-contain" src="/uil_user-nurse.svg" width={35} height={35} alt="dekalo" />
              <div className="py-3">
                <p className="text-xs text-[#69B7FF]">Service User</p>
                <p>{log.service_user_name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <LuMail />
                <p className="text-xs max-md:px-0">Share</p>
              </Link>

              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <TbEdit />
                <p className="text-xs max-md:px-0">Edit</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default GetDailyLogger
