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

export default function Account() {
  const [hasAccount, setHasAccount] = useState(true)

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            {hasAccount ? (
              <div>
                <DashboardNav />
                <div className="flex items-center justify-between px-16 pb-6 max-md:px-3">
                  <div>
                    <h1>$120,420.50</h1>
                    <p className="p-sm">
                      Total balances for all accounts <span className="font-bold text-[#004aff]">USD</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 max-md:hidden">
                    <IoMdAddCircleOutline />
                    <small className="font-semibold ">Open an account or deposit</small>
                  </div>
                </div>
                <div className="flex w-full gap-4 px-16 pb-16 max-md:px-3">
                  <div className={styles.dashboard_body__lhs}>
                    <div className={styles.in_out}>
                      <UserAccount />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <DashboardNav />
                <div className="flex h-full w-full flex-col items-center justify-center px-16 pb-6">
                  <Image src="./undraw_projections_re_ulc6.svg" width={250} height={250} alt="" />

                  <h2 className="mb-2 mt-4 text-4xl font-bold max-md:text-2xl">Open a bank account</h2>
                  <p className="w-64 text-center max-md:text-base">
                    Apply and start using our bank app after document confirmation
                  </p>
                  <div className="mt-8 flex items-center gap-2">
                    <IoMdAddCircleOutline className="text-[#004aff] max-md:text-sm" />
                    <Link href="" className="text-[#004aff] max-md:text-sm">
                      Open an account or deposit
                    </Link>
                  </div>
                </div>
              </>
            )}

            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
