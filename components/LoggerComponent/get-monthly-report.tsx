"use client"

import React, { useEffect, useState } from "react"
import Search from "components/Search/Search"
import Image from "next/image"
import Link from "next/link"
import { IoAddCircleOutline } from "react-icons/io5"
import { LuMail } from "react-icons/lu"
import { MdLocalPrintshop, MdOutlineCheckBoxOutlineBlank, MdOutlineLocalPrintshop, MdOutlineMail } from "react-icons/md"
import { TbEdit } from "react-icons/tb"

interface MonthlyReport {
  id: string
  title: string
  service_user_name: string
  updated_by: string
  placement: string
  start: string
  end: string
  note: string
  status: boolean
  pub_date: string
}

interface ServiceUser {
  id: string
  monthly_report_gs: MonthlyReport[]
}

const GetMonthlyReport = () => {
  const [serviceUser, setServiceUser] = useState<ServiceUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServiceUser = async () => {
      const serviceUserId = localStorage.getItem("serviceUserId")
      if (serviceUserId) {
        try {
          const response = await fetch(`https://health-focused.fyber.site/service-user/service-user/${serviceUserId}/`)
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
          href="/service-users/monthly-report"
          className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2"
        >
          <p className="whitespace-nowrap text-xs text-white max-md:hidden max-md:px-0 2xl:text-sm">New Monthly Log</p>
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

      {serviceUser.monthly_report_gs?.map((report) => (
        <div key={report.id} className="w-full gap-3 rounded border-[0.5px] bg-[#ffffff] px-4 py-2 shadow">
          <div className="flex flex-row gap-2">
            <Image className="object-contain" src="/images/user.png" width={35} height={35} alt="dekalo" />
            <div className="flex w-full justify-between">
              <div>
                <p className="text-xs text-[#69B7FF]">Updated by</p>
                <h6 className="text-base font-semibold">{report.updated_by}</h6>
                <p className="text-xs">{report.placement}</p>
              </div>
              <div className="flex flex-col items-end ">
                <p className="text-xs">{new Date(report.pub_date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          <div className="my-4 flex items-center gap-2">
            <MdOutlineCheckBoxOutlineBlank />
            <p className="text-[#0085FF]">
              {new Date(report.start).toLocaleDateString()} - {new Date(report.end).toLocaleDateString()}
            </p>
          </div>
          {/* <div className="py-3">
            <p className="text-sm">{report.note}</p>
          </div> */}
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 rounded-md  px-3 py-2">
                <MdOutlineLocalPrintshop />
                <p className="text-xs max-md:px-0">Print</p>
              </Link>

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

export default GetMonthlyReport
