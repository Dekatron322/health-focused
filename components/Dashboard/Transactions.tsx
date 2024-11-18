import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Alerts, Transaction } from "utils"
import dynamic from "next/dynamic"
import clsx from "clsx"
import Link from "next/link"

const DynamicImage = dynamic(() => import("next/image"), { ssr: false })

export const Transactions = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)

  return (
    <section className="max-md:hidden">
      <div className={styles.transactions}>
        <div className="flex items-center justify-between p-4 max-md:px-0">
          <p className="font-semibold text-white lg:text-sm xl:text-sm 2xl:text-base">Latest Appointments</p>
          <Link href="/dashboard/appointment" className="rounded-md border p-2 text-[10px] text-white">
            VIEW ALL
          </Link>
        </div>
        <div className="border-b"></div>
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
                          <p className="text-sm font-medium text-black lg:text-xs xl:text-xs 2xl:text-sm">
                            {item.user}
                          </p>
                          <p className="text-sm font-bold text-black lg:text-xs xl:text-xs 2xl:text-sm">{item.name}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-xs text-black">{item.status}</p>
                        <p className="whitespace-nowrap text-lg font-bold text-black lg:text-sm xl:text-sm 2xl:text-lg">
                          {item.time}
                        </p>
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
      <div className={styles.alerts}>
        <div className="flex items-center justify-between p-4 max-md:px-0">
          <p className="font-semibold text-white lg:text-sm xl:text-sm 2xl:text-base">Latest Alerts</p>
          <Link href="/dashboard/alerts" className="rounded-md border p-2 text-[10px] text-white">
            VIEW ALL
          </Link>
        </div>
        <div className="border-b"></div>
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
                          <p className="text-sm font-medium text-black lg:text-xs xl:text-xs 2xl:text-sm">
                            {item.user}
                          </p>
                          <p className="text-sm font-bold text-black lg:text-xs xl:text-xs 2xl:text-sm">{item.name}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-xs text-black">{item.date}</p>
                        <p className="whitespace-nowrap text-lg font-bold text-black lg:text-sm xl:text-sm 2xl:text-lg">
                          {item.time}
                        </p>
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
    </section>
  )
}
