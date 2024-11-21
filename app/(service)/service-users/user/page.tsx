"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import styles from "../../../../components/Dashboard/dashboard.module.css"

import { useState } from "react"
import { ProfileInfo } from "components/Dashboard/ProfileInfo"
import { SkillsInfo } from "components/Dashboard/SkillsInfo"
import { Logger } from "components/Dashboard/Logger"

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen  bg-[#171818]">
          <div className="flex w-full  flex-col ">
            <DashboardNav />

            <div className="my-4 flex w-full gap-4 px-16 pb-16 max-md:flex-col max-md:px-3 lg:px-8 2xl:px-16 ">
              <div className="min-w-[220px]">
                <ProfileInfo />
              </div>
              <div className={styles.dashboard_body__lhs}>
                <Logger />
              </div>
              <div className={styles.dashboard_body__2rhs}>
                <SkillsInfo />
              </div>
            </div>

            {/* <Footer /> */}
          </div>
        </div>
      </section>
    </>
  )
}
