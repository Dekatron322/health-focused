import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Alerts, Plans, SkillDevelopment, Transaction } from "utils"
import { GoArrowUpRight } from "react-icons/go"
import dynamic from "next/dynamic"
import clsx from "clsx"
import Link from "next/link"
import { IoAddCircleOutline } from "react-icons/io5"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { FaFolder } from "react-icons/fa"

const DynamicImage = dynamic(() => import("next/image"), { ssr: false })

export const SkillsInfo = ({ serviceUser }: { serviceUser: any }) => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)

  if (!serviceUser) {
    return <div>No service user data available</div>
  }

  return (
    <>
      <div className={styles.transactions2}>
        <div className="flex items-center justify-between p-4 max-md:px-0">
          <p className="font-semibold">Skill Developer</p>
          {/* <GoArrowUpRight /> */}
        </div>
        <div className="border-b"></div>
        <div className="py-4 max-md:px-0">
          {SkillDevelopment.map((placement) => (
            <div key={placement.id}>
              <div className="flex cursor-pointer items-center gap-3 px-4 py-3">
                <MdCheckBoxOutlineBlank size={18} />

                <p className="text-sm font-bold">{placement.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.transactions}>
        <div className="flex items-center justify-between p-4 max-md:px-0">
          <p className="font-semibold text-white"> Appointments</p>
          <Link href="/dashboard/appointment" className="rounded-md border p-2 text-[10px] text-white">
            VIEW ALL
          </Link>
        </div>
        <div className="border-b"></div>
        <div className="px-4 py-4 max-md:px-0">
          {Transaction.length === 0 ? (
            <div className="flex h-20 flex-col items-center justify-center ">
              <p>No new appointment</p>
              <Link
                href="/dashboard/new-logs"
                className="mt-3 flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2"
              >
                <p className="text-white max-md:px-0">New Appointment</p>
                <IoAddCircleOutline className="text-white" size={20} />
              </Link>
            </div>
          ) : (
            Transaction.map((transactions, index) => (
              <div key={transactions.date}>
                {transactions.list.map((item, itemIndex) => (
                  <React.Fragment key={item.id}>
                    <div
                      className={clsx(
                        "rounded-md px-3 py-3",
                        item.status === "Cancelled" && styles.cancelled,
                        item.status === "Missed" && styles.missed,
                        item.status === "Booked" && styles.booked
                      )}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center justify-center gap-2">
                          <div>
                            <p className="text-sm font-medium text-black md:text-xs 2xl:text-sm">{item.user}</p>
                            <p className="text-sm font-bold text-black md:text-xs 2xl:text-sm">{item.name}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-xs text-black">{item.status}</p>
                          <p className="whitespace-nowrap text-sm font-bold text-black  2xl:text-lg">{item.time}</p>
                          <p className="text-[10px] text-black 2xl:text-xs">{item.date}</p>
                        </div>
                      </div>
                    </div>
                    {/* Check if it's not the last item across all Transactions */}
                    <div>
                      {!(index === Transaction.length - 1 && itemIndex === transactions.list.length - 1) && (
                        <div className="py-2"></div>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            ))
          )}
        </div>
      </div>

      <div className={styles.alerts}>
        <div className="flex items-center justify-between p-4 max-md:px-0">
          <p className="font-semibold text-white">Alerts</p>
          <Link href="/dashboard/alerts" className="rounded-md border p-2 text-[10px] text-white">
            VIEW ALL
          </Link>
        </div>
        <div className="border-b"></div>
        <div className="px-4 py-4 max-md:px-0">
          {Alerts.length === 0 ? (
            <div className="flex h-20 items-center justify-center">
              <p>No new alert</p>
              <Link
                href="/dashboard/new-logs"
                className="mt-3 flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2"
              >
                <p className="text-white max-md:px-0">New Alert</p>
                <IoAddCircleOutline className="text-white" size={20} />
              </Link>
            </div>
          ) : (
            Alerts.map((transactions, index) => (
              <div key={transactions.date}>
                {transactions.list.map((item, itemIndex) => (
                  <React.Fragment key={item.id}>
                    <div
                      className={clsx(
                        "rounded-md px-3 py-3",
                        item.status === "Accident" && styles.accident,
                        item.status === "Incidence" && styles.incidence,
                        item.status === "Missing" && styles.missing
                      )}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center justify-center gap-2">
                          <div>
                            <p className="text-xs font-medium text-black">{item.user}</p>
                            <p className="text-xs font-bold  text-black 2xl:text-sm">{item.name}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-xs text-black">{item.date}</p>
                          <p className="whitespace-nowrap text-sm font-bold text-black 2xl:text-lg">{item.time}</p>
                        </div>
                      </div>
                    </div>
                    {/* Check if it's not the last item across all Transactions */}
                    <div>
                      {!(index === Alerts.length - 1 && itemIndex === transactions.list.length - 1) && (
                        <div className="py-2"></div>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            ))
          )}
        </div>
      </div>

      <div className={styles.transactions2}>
        <div className="flex items-center justify-between p-4 max-md:px-0">
          <p className="text-sm font-bold 2xl:text-base">Plans, Reports and Resources</p>
        </div>
        <div className="border-b"></div>
        <div className="py-4 max-md:px-0">
          {Plans.map((placement) => (
            <div key={placement.id}>
              <Link href={placement.link} className="flex cursor-pointer items-center gap-3 px-4 py-3">
                <FaFolder size={18} className="text-[#0085FF]" />

                <p className="text-xs  font-bold 2xl:text-sm">{placement.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
