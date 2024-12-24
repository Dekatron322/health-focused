import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Alerts, Transaction } from "utils"
import { GoArrowUpRight } from "react-icons/go"
import dynamic from "next/dynamic"
import clsx from "clsx"
import Link from "next/link"

const DynamicImage = dynamic(() => import("next/image"), { ssr: false })

export const NextAppointment = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)

  return (
    <>
      <div className={styles.transactions}>
        <div className="flex items-center justify-between p-4 max-md:px-0">
          <p className="font-semibold text-white">Next Appointments</p>
        </div>
        <div className="border-b"></div>
        <div className="px-2 py-4 max-md:px-0 2xl:px-4">
          {Transaction.map((transactions, index) => (
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
                          <p className="text-xs font-medium text-black 2xl:text-base">{item.user}</p>
                          <p className="text-sm font-bold text-black 2xl:text-base">{item.name}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-xs text-black">{item.status}</p>
                        <p className="text-base font-bold text-black 2xl:text-3xl">{item.time}</p>
                        <p className="text-xs text-black">{item.date}</p>
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
          ))}
        </div>
      </div>
    </>
  )
}
