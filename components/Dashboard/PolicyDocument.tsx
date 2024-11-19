"use client"
import React, { useState } from "react"
import { VscPerson } from "react-icons/vsc"
import { FaHouseChimneyWindow } from "react-icons/fa6"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import { PiBankBold } from "react-icons/pi"
import Link from "next/link"
import { Policies } from "utils"
import Image from "next/image"
import { IoAddCircleOutline } from "react-icons/io5"

const PolicyDocument = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <>
      {Policies.map((policy, index) => (
        <div className=" w-full rounded border-[0.5px] bg-white p-4 shadow" key={policy.id}>
          <div>
            <Image src={policy.icon} height={45} width={36} alt="" />
            <h6 className="mt-3 text-base font-bold">{policy.title}</h6>
            <p>{policy.value}</p>
            <div className="mt-2 flex gap-2">
              <Link
                href="/department"
                className="flex w-full items-center justify-center rounded-md  border border-[#000000] px-2 py-2 text-xs text-[#000000]"
              >
                DOWNLOAD
              </Link>
              <Link
                href="/department"
                className="flex w-full items-center justify-center rounded-md  border border-[#000000] px-2 py-2 text-xs text-[#000000]"
              >
                EDIT
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PolicyDocument
