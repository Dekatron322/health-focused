"use client"
import { useState, useEffect } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import Link from "next/link"
import { IoMdAddCircleOutline, IoMdSearch } from "react-icons/io"
import styles from "../../../components/Dashboard/dashboard.module.css"
import { BiTransfer } from "react-icons/bi"
import { IoReceiptOutline, IoSwapVertical } from "react-icons/io5"
import { BsArrowUpRight } from "react-icons/bs"
import { SlCalender } from "react-icons/sl"
import { TransactionTable } from "components/Transactions/TransactionTable"
import RotateRightOutlinedIcon from "@mui/icons-material/RotateRightOutlined"
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined"
import MultipleStopOutlinedIcon from "@mui/icons-material/MultipleStopOutlined"
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined"

export default function Transactions() {
  // Simulating user account existence with a state
  const [hasTransactions, setHasTransactions] = useState(true)

  // Render the content conditionally based on the 'hasAccount' state
  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            {hasTransactions ? (
              <div>
                <DashboardNav />
                <div className="flex items-center  gap-3 px-16 pb-6 max-md:px-3">
                  <Image src="/united-states-minor-outlying-islands.svg" width={40} height={40} alt="" />
                  <div>
                    <p className="p-xs">Account **** 7890</p>
                    <h4>$120,420.50</h4>
                  </div>
                </div>
                <div className="mb-4 max-md:hidden">
                  <div className="mb-3 flex justify-between px-16">
                    <div className="flex gap-5">
                      <div className="flex items-center gap-2">
                        <MultipleStopOutlinedIcon className="text-lg" />
                        <Link href="" className="p-sm bold">
                          Transfer
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <ReceiptLongOutlinedIcon className="text-lg" />
                        <Link href="" className="p-sm bold">
                          Make a Payment
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <RotateRightOutlinedIcon className="text-lg" />
                        <Link href="" className="p-sm bold">
                          Convert
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <CallMadeOutlinedIcon className="text-lg" />
                        <Link href="" className="p-sm bold">
                          Request
                        </Link>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex items-center gap-2">
                        <SearchOutlinedIcon className="text-lg" />
                        <Link href="" className="p-sm bold">
                          Search
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <EventNoteOutlinedIcon className="text-lg" />
                        <Link href="" className="p-sm bold">
                          August 2022
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border"></div>
                </div>
                <div className="flex w-full gap-4 px-16 pb-16 max-md:px-3">
                  <div className={styles.dashboard_body__lhs}>
                    <div className={styles.in_out}>
                      <TransactionTable />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8 max-md:hidden">
                  <div className="mb-3 flex justify-between px-16">
                    <div className="flex gap-5">
                      <div className="flex gap-2">
                        <BiTransfer />
                        <Link href="" className="text-xs font-semibold">
                          Transfer
                        </Link>
                      </div>
                      <div className="flex gap-2">
                        <IoReceiptOutline />
                        <Link href="" className="text-xs font-semibold">
                          Make a Payment
                        </Link>
                      </div>
                      <div className="flex gap-2">
                        <IoSwapVertical />
                        <Link href="" className="text-xs font-semibold">
                          Convert
                        </Link>
                      </div>
                      <div className="flex gap-2">
                        <BsArrowUpRight />
                        <Link href="" className="text-xs font-semibold">
                          Request
                        </Link>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex gap-2">
                        <IoMdSearch />
                        <Link href="" className="text-xs font-semibold">
                          Search
                        </Link>
                      </div>
                      <div className="flex gap-2">
                        <SlCalender />
                        <Link href="" className="text-xs font-semibold">
                          August 2022
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border"></div>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center px-16 pb-6">
                  <Image src="./undraw_payments_re_77x0.svg" width={250} height={250} alt="" />

                  <h2 className="mb-2 mt-4 text-4xl font-bold">Make a payment</h2>
                  <p className="w-80 text-center">
                    start spending your funds and get detailed list of transactions for each account
                  </p>
                  <div className="mt-8 flex items-center gap-2">
                    <IoMdAddCircleOutline className="text-[#004aff]" />
                    <Link href="" className="text-[#004aff]">
                      Transfer your funds
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
