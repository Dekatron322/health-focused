"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Policies } from "utils"
import Image from "next/image"

const PolicyDocument = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <>
      {Policies.map((policy, index) => (
        <div className=" w-full rounded border-[0.5px] bg-white p-4 shadow" key={policy.id}>
          <div>
            <div className="flex justify-between">
              <Image src={policy.icon} height={45} width={36} alt="" />
              <Link
                href="/policy/view"
                className="flex h-6 items-center justify-center  rounded-md border border-[#000000] bg-blue-400 px-2 text-xs text-[#000000]"
              >
                View
              </Link>
            </div>
            <h6 className="mt-3 text-base font-bold">{policy.title}</h6>

            <p>{policy.value}</p>

            <div className="mt-2 flex gap-2">
              <Link
                href="#"
                className="flex w-full items-center justify-center rounded-md  border border-[#000000] px-2 py-2 text-xs text-[#000000]"
              >
                DOWNLOAD
              </Link>
              <Link
                href="/policy/edit"
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
