"use client"
import Footer from "components/Footer/Footer"

import styles from "components/Dashboard/dashboard.module.css"
import { Transactions } from "components/AccountDetails/Transactions"
import Link from "next/link"
import { IoReceiptOutline, IoSwapVertical } from "react-icons/io5"
import AccountNav from "components/AccountDetails/AccountNav"
import { useState } from "react"
import DepositDetailsModal from "components/AccountDetails/DepositDetailsModal"
import RotateRightOutlinedIcon from "@mui/icons-material/RotateRightOutlined"
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined"
import MultipleStopOutlinedIcon from "@mui/icons-material/MultipleStopOutlined"
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined"
import { Deposits } from "components/AccountDetails/Deposits"

export default function DepositDetail() {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            <AccountNav />
            <div className="flex items-center justify-between px-16 pb-6 max-md:px-3">
              <div>
                <h1>$48.140,00</h1>
                <p className="p-sm">Cumulative deposit</p>
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
                    <MoreHorizOutlinedIcon className="text-lg" />
                    <Link href="" className="p-sm bold">
                      Additional Actions
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border"></div>
            </div>
            <div className="flex w-full gap-16 px-16 pb-16 max-md:flex-col-reverse max-md:px-3">
              <div className={styles.dashboard_body__lhs}>
                <h4 className="font-bold md:hidden">Latest Transactions</h4>
                <Deposits />
              </div>
              <div className={styles.dashboard_body__rhs}>
                <div className="flex w-full flex-col">
                  <div className="p-sm py-4">Overview</div>
                  <div className=" mb-6 w-full items-end rounded-md p-4 md:border">
                    <div className=" w-full gap-2 max-md:flex-col">
                      <div className="flex gap-2">
                        <div>
                          <p className="p-sm">Accrued Interest</p>
                          <h6>$6,900.00</h6>
                        </div>
                      </div>

                      <div className="my-4">
                        <div className="relative pt-1">
                          <div className="mb-2 flex items-center justify-between">
                            <div></div>
                          </div>
                          <div className="flex">
                            <div className="w-full rounded-full bg-gray-300">
                              <div className="h-1 w-1/2 rounded-full bg-[#FFBD00]" style={{ width: "50%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="p-sm bold">20.06.2024</h4>
                          <p className="p-xs">Expiration date</p>
                        </div>
                        <div>
                          <h4 className="p-sm bold text-end">379</h4>
                          <p className="p-xs">Days left</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-3 hidden w-full items-center justify-center gap-2 border-t max-md:flex "
                      onClick={openModal}
                    >
                      <div className="mt-2 flex items-center gap-2">
                        <IoReceiptOutline className="text-sm font-bold" />
                        <p className="text-sm font-bold">See account details</p>
                      </div>
                    </div>
                    {isModalOpen && <DepositDetailsModal onClose={closeModal} />}
                  </div>
                  <div className="p-sm pb-4 max-md:hidden">Account Detail</div>
                  <div className="  rounded-md border p-6 max-md:hidden">
                    <div className="flex w-full justify-between pb-3">
                      <p className="p-sm">Account name</p>
                      <p className="p-sm bold">Premium Account</p>
                    </div>
                    <div className="border"></div>
                    <div className="flex w-full justify-between py-4">
                      <p className="p-sm">Account number</p>
                      <p className="p-sm bold">UK64CT0000000010034567</p>
                    </div>
                    <div className="border"></div>
                    <div className="flex w-full justify-between py-4">
                      <p className="p-sm">Account type</p>
                      <p className="p-sm bold">Single Currency</p>
                    </div>
                    <div className="border"></div>
                    <div className="flex w-full justify-between py-4">
                      <p className="p-sm">Bonus program</p>
                      <p className="p-sm bold">Premium </p>
                    </div>
                    <div className="border"></div>
                    <div className="flex w-full justify-between py-4">
                      <p className="p-sm">Insurance</p>
                      <p className="p-sm bold">Enabled</p>
                    </div>
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
