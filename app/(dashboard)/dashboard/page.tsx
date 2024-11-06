"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoMdAddCircleOutline } from "react-icons/io"
import styles from "../../../components/Dashboard/dashboard.module.css"
import Income from "components/Dashboard/Income"
import Spendings from "components/Dashboard/Spendings"
import { Assets } from "components/Dashboard/Assets"
import { Transactions } from "components/Dashboard/Transactions"
import { Skeleton } from "@mui/material"
import { useState } from "react"
import { AppointmentMobile } from "components/Dashboard/AppointmentMobile"
import Alerts from "./alerts/page"
import { LatestAlerts } from "components/Dashboard/Alerts"
import SideBar from "components/Sidebar/SideBar"

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <>
      <section className=" h-full">
        <DashboardNav />

        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            <div className=" flex  w-full gap-4 bg-[#000000B2] px-16 py-16 max-md:flex-col max-md:px-3">
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

            {/* <Footer /> */}
          </div>
        </div>
      </section>
    </>
  )
}
