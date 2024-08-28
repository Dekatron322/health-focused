import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Alerts, Transaction } from "utils"
import { GoArrowUpRight } from "react-icons/go"
import dynamic from "next/dynamic"
import clsx from "clsx"

const DynamicImage = dynamic(() => import("next/image"), { ssr: false })

export const Transactions = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)

  return (
    <>
      <div className={styles.transactions}>
        <div className="flex items-center justify-between p-4 max-md:px-0">
          <p className="font-semibold">Latest Appointments</p>
          <GoArrowUpRight />
        </div>
        <div className="border"></div>
        <div className="px-4 py-4 max-md:px-0">
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
                          <p className="font-medium text-black">{item.user}</p>
                          <p className="font-bold text-black">{item.name}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-xs text-black">{item.status}</p>
                        <p className="text-3xl font-bold text-black">{item.time}</p>
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
      <div className={styles.transactions}>
        <div className="flex items-center justify-between p-4 max-md:px-0">
          <p className="font-semibold">Latest Appointments</p>
          <GoArrowUpRight />
        </div>
        <div className="border"></div>
        <div className="px-4 py-4 max-md:px-0">
          {Alerts.map((transactions, index) => (
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
                          <p className="font-bold text-black">{item.name}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-xs text-black">{item.date}</p>
                        <p className="text-3xl font-bold text-black">{item.time}</p>
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
