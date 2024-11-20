import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { About, Alerts, Contact, OtherInfo, Placement, Transaction } from "utils"
import { GoArrowUpRight } from "react-icons/go"
import dynamic from "next/dynamic"
import clsx from "clsx"
import Image from "next/image"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const DynamicImage = dynamic(() => import("next/image"), { ssr: false })

export const ProfileInfo = () => {
  const [loading, setLoading] = useState(true)
  const [openItemId, setOpenItemId] = useState<number | null>(null)

  setTimeout(() => setLoading(false), 5000)

  const toggleAccordion = (id: number) => {
    setOpenItemId(openItemId === id ? null : id)
  }

  return (
    <>
      <div className={styles.transactions2}>
        <div className=" px-4 py-4">
          <div className="flex justify-end">
            <BsThreeDotsVertical />
          </div>
          <div className="flex  justify-center">
            <Image src="/avatar.png" width={120} height={120} alt="smup" />
          </div>
          <p className="py-2 text-center text-base font-bold">Marvin Martin</p>
          <p className="text-center text-xs">
            Status <span className="font-bold text-[#BA4D3C]">INACTIVE</span>
          </p>
        </div>
      </div>
      <div className={styles.transactions2}>
        <div className="flex items-center justify-between p-2 max-md:px-0 2xl:p-4">
          <p className="font-semibold">Placement Info</p>
        </div>
        <div className="border-b"></div>
        <div className="px-2 py-4 max-md:px-0 2xl:px-4">
          {Placement.map((placement, index) => (
            <div key={placement.id}>
              <div className="flex justify-between">
                <div className="flex items-center justify-center gap-2 py-3">
                  <Image src={placement.icon} width={30} height={30} alt="" />
                  <div>
                    <p className="text-xs font-bold text-[#C0C0C0]">{placement.title}</p>
                    <p className="font-regular">{placement.value}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.transactions2}>
        <div className="flex items-center justify-between p-2 max-md:px-0 2xl:p-4">
          <p className="font-semibold">About</p>
        </div>
        <div className="border-b"></div>
        <div className="px-2 py-4 max-md:px-0 2xl:px-4">
          {About.map((placement, index) => (
            <div key={placement.id}>
              <div className="flex justify-between">
                <div className="flex items-center justify-center gap-2 py-3">
                  <Image src={placement.icon} width={30} height={30} alt="" />
                  <div>
                    <p className="text-xs font-bold text-[#C0C0C0]">{placement.title}</p>
                    <p className="font-regular">{placement.value}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.transactions2}>
        <div className="flex items-center justify-between p-2 max-md:px-0 2xl:p-4">
          <p className="font-semibold">Contact</p>
        </div>
        <div className="border-b"></div>
        <div className="px-2 py-4 max-md:px-0 2xl:px-4">
          {Contact.map((placement, index) => (
            <div key={placement.id}>
              <div className="flex justify-between">
                <div className="flex items-center justify-center gap-2 py-3">
                  <Image src={placement.icon} width={30} height={30} alt="" />
                  <div>
                    <p className="text-xs font-bold text-[#C0C0C0]">{placement.title}</p>
                    <p className="font-regular md:text-sm 2xl:text-sm">{placement.value}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.transactions3}>
        <div className="flex items-center justify-between p-2 max-md:px-0 2xl:p-4">
          <p className="font-semibold md:text-sm 2xl:text-base">Other Important Information</p>
        </div>
        <div className="border-b"></div>
        <div className="py-4 max-md:px-0">
          {OtherInfo.map((placement) => (
            <div key={placement.id}>
              <div
                className="flex cursor-pointer items-center justify-between px-2 py-3 2xl:px-4"
                onClick={() => toggleAccordion(placement.id)}
              >
                <p className="text-xs font-bold 2xl:text-sm">{placement.title}</p>
                {openItemId === placement.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openItemId === placement.id && (
                <div className="px-4 pb-4">
                  <p className="text-sm md:text-xs 2xl:text-base">
                    Here is the detailed information <br /> about {placement.title}.
                  </p>
                  {/* Add more content related to the placement here */}
                </div>
              )}
              <div className="border-b"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
