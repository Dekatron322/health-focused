"use client"
import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Asset } from "utils"
import Image from "next/image"
import { IoAddCircleOutline } from "react-icons/io5"
import Search from "components/Search/Search"
import { TbEdit } from "react-icons/tb"
import Link from "next/link"
import { LuMail } from "react-icons/lu"
import { MdLocalPrintshop, MdOutlineMail } from "react-icons/md"

export const Logger = () => {
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState("")

  setTimeout(() => setLoading(false), 5000)

  const options = [
    { id: "1", name: "All Service Users" },
    { id: "2", name: "Marvin Martin" },
    { id: "3", name: "Zendaya Ken" },
    { id: "3", name: "Blon Dale" },
  ]

  return (
    <div className={styles.assets}>
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/dashboard/new-logs" className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2">
          <p className="text-white max-md:px-0">New Daily Log</p>
          <IoAddCircleOutline className="text-white" size={20} />
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex h-10 items-center justify-between gap-2 rounded-lg border border-[#CFDBD5] px-3 py-1 lg:w-[160px]">
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

      <div className="grid  gap-3 p-4">
        {Asset.map((assets) => (
          <div key={assets.id} className="w-full gap-3 rounded border-[0.5px] px-4 py-2 shadow">
            <div className="flex flex-row gap-2">
              <Image className="object-contain" src="/images/user.png" width={35} height={35} alt="dekalo" />
              <div className="flex w-full justify-between">
                <div>
                  <p className="text-xs text-[#69B7FF]">Updated by</p>
                  <h6 className="text-base font-semibold">{assets.name}</h6>
                  <p className="text-xs">{assets.location}</p>
                </div>
                <div className="flex flex-col items-end justify-end">
                  <p className="text-xs">{assets.day}</p>
                  <p className="">{assets.time}</p>
                </div>
              </div>
            </div>
            <div className="py-3">
              <p>
                Martin has engaged the staff for about 30 minutes. They are holding a conversation about how to make
                Martin has engaged the staff for about 30 minutes. They are holding a conversation about how to make
                Martin has engaged the staff for about 30 minutes. They are holding a conversation about how tMartin has
                engaged the staff for about 30 minutes. They are holding a conversation about how to make ...{" "}
              </p>
            </div>
            <div className="border"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image className="object-contain" src="/uil_user-nurse.svg" width={35} height={35} alt="dekalo" />
                <div className="py-3">
                  <p className="text-xs text-[#69B7FF]">Service User</p>
                  <p>{assets.user}</p>
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
      </div>
    </div>
  )
}
