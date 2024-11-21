"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import styles from "../../../components/Dashboard/dashboard.module.css"
import Income from "components/Dashboard/Income"
import { Assets } from "components/Dashboard/Assets"
import { Transactions } from "components/Dashboard/Transactions"
import { useState } from "react"
import { AppointmentMobile } from "components/Dashboard/AppointmentMobile"
import { LatestAlerts } from "components/Dashboard/Alerts"

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <>
      <section className="h-full">
        <DashboardNav />

        <div className="mx-auto flex min-h-screen bg-[#171818] max-sm:h-auto">
          <div className="flex w-full  flex-col ">
            <div className=" flex  w-full gap-4 px-5 py-16 max-md:flex-col max-md:px-3 2xl:px-16">
              <div className={styles.dashboard_body__lhs}>
                <div className={styles.in_out}>
                  <Income />
                  <AppointmentMobile />
                </div>
                <Assets />
              </div>
              <div className={styles.dashboard_body__rhs}>
                <LatestAlerts />
                <Transactions />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
