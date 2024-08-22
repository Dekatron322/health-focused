"use client"
import Footer from "components/Footer/Footer"
import RotateRightOutlinedIcon from "@mui/icons-material/RotateRightOutlined"
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined"
import MultipleStopOutlinedIcon from "@mui/icons-material/MultipleStopOutlined"
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined"

import styles from "components/Dashboard/dashboard.module.css"
import { Transactions } from "components/AccountDetails/Transactions"
import Image from "next/image"
import Link from "next/link"
import { IoReceiptOutline, IoSwapVertical } from "react-icons/io5"
import AccountNav from "components/AccountDetails/AccountNav"
import AccountDetailsModal from "components/AccountDetails/AccountDetailsModal"
import { useState } from "react"

export default function PaymentDetail() {
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
                <h1>$120,420.50</h1>
                <p className="p-xs">Account **** 4567</p>
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
            <div className="flex w-full gap-16 px-16 pb-16 max-md:flex-col-reverse max-md:px-3">
              <div className={styles.dashboard_body__lhs}>
                <h4 className="font-bold md:hidden">Latest Transactions</h4>
                <Transactions />
              </div>
              <div className={styles.dashboard_body__rhs}>
                <div className="flex w-full flex-col">
                  <div className="p-sm py-4 max-md:hidden">Linked Card</div>
                  <div className="tab-bg mb-6 flex w-full items-end justify-between rounded-lg p-6">
                    <div className="flex w-full gap-2 max-md:flex-col">
                      <div className="flex gap-2">
                        <Image src="../../visa-card.svg" height={62} width={92} alt="" />

                        <div className="flex flex-col justify-between">
                          <h6 className="flex-wrap">Visa Gold Payware</h6>
                          <p className="p-sm mt-auto">**** 8790</p>
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
                    </div>
                    <p className="p-sm max-md:hidden">03/22</p>
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
            {isModalOpen && <AccountDetailsModal onClose={closeModal} />}
            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
