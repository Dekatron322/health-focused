import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Alerts, Appointments, Transaction } from "utils"
import { GoArrowUpRight } from "react-icons/go"
import dynamic from "next/dynamic"
import clsx from "clsx"
import Link from "next/link"

const DynamicImage = dynamic(() => import("next/image"), { ssr: false })

export const AppointmentMobile = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)

  return (
    <section className="md:hidden">
      <Link href="/dashboard/appointment" className="flex items-center justify-between p-4 max-md:px-0">
        <p className="font-semibold">Latest Appointments</p>
        <GoArrowUpRight />
      </Link>

      {/* Container for horizontal scroll with hidden scrollbar */}
      <div className="scrollbar-hide overflow-x-auto px-4 max-md:px-0 md:py-4">
        <div className="flex gap-4">
          {Appointments.map((transactions, index) => (
            <div key={transactions.date} className="flex-shrink-0">
              <React.Fragment key={transactions.id}>
                <div
                  className={clsx(
                    "w-full min-w-[300px] rounded-md px-3 py-3", // Set minimum width for horizontal display
                    transactions.status === "Cancelled" && styles.cancelled,
                    transactions.status === "Missed" && styles.missed,
                    transactions.status === "Booked" && styles.booked
                  )}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center justify-center gap-2">
                      <div>
                        <p className="text-sm font-medium text-black">{transactions.user}</p>
                        <p className="text-sm font-bold text-black">{transactions.name}</p>
                      </div>
                    </div>
                    <div className="transactionss-end flex flex-col">
                      <p className="text-xs text-black">{transactions.status}</p>
                      <p className="whitespace-nowrap text-lg font-bold text-black">{transactions.time}</p>
                      <p className="text-xs text-black">{transactions.date}</p>
                    </div>
                  </div>
                </div>
                {/* Spacing between items */}
              </React.Fragment>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
