"use client"
import { useState, useEffect } from "react"
import Sidebar from "components/Sidebar/SideBar"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import Link from "next/link"
import { IoMdAddCircleOutline } from "react-icons/io"
import styles from "../../../components/Dashboard/dashboard.module.css"
import UserAccount from "components/UserAccount/UserAccount"
import ProfileSettings from "components/UserAccount/ProfileSettings"

export default function Settings() {
  // Render the content conditionally based on the 'hasAccount' state
  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            <div>
              <DashboardNav />

              <div className="flex w-full gap-4 px-16 pb-16 pt-6">
                <div className={styles.dashboard_body__lhs}>
                  <div className={styles.in_out}>
                    <ProfileSettings />
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
