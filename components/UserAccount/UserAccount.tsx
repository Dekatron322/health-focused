"use client"
import React, { useState } from "react"
import { Accounts, Credits, OpenDeposits } from "utils"
import Image from "next/image"
import { PiWalletLight, PiDotsThree } from "react-icons/pi"
import { CiTrophy } from "react-icons/ci"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { MdOutlineDevices, MdCreditScore } from "react-icons/md"
import { useRouter } from "next/navigation"
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined"
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined"
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined"

const UserAccount = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("payment") // State to manage active tab

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-[#23E33E]"
      case "On Hold":
        return "text-[#FFBD00]"
      case "Closed":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  const handlePaymentClick = (accountId: number) => {
    router.push(`/accounts/details/${accountId}`)
  }

  const handleDepositClick = (accountId: number) => {
    router.push(`/accounts/deposit/${accountId}`)
  }

  interface PaymentAccount {
    id: number
    name: string
    number: string
    image: string
    balance: string
    blocked: string
    status: string
  }

  const renderPaymentAccounts = () => {
    return (
      <div className="flex w-full flex-wrap">
        {Accounts.map((account: PaymentAccount, index: number) => (
          <div key={account.id} className="w-full cursor-pointer p-2 md:w-1/2 lg:w-1/2 xl:w-1/3">
            <div
              onClick={() => handlePaymentClick(account.id)}
              className="small-card flex flex-col justify-between rounded-md p-4 transition duration-500 hover:border-none hover:shadow-xl md:border"
            >
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  <p className="p-sm bold">{account.name}</p>
                  <p className="p-xs">{account.number}</p>
                </div>
                <Image src={account.image} width={28} height={28} alt="" />
              </div>
              <div className="mt-auto flex items-end justify-between">
                <div>
                  <h4>{account.balance}</h4>
                  <p className="p-xs">Blocked amount {account.blocked}</p>
                </div>
                <p className={`text-sm font-bold capitalize ${getStatusColor(account.status)}`}>{account.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderOpenDeposits = () => {
    const renderIcon = (name: any) => {
      switch (name) {
        case "Cummulative":
          return <BusinessCenterOutlinedIcon className="text-[20px] text-[#747A80]" />
        case "Cashbook":
          return <EmojiEventsOutlinedIcon className="text-[20px] text-[#747A80]" />
        case "creditCard":
          return <EmojiEventsOutlinedIcon className="text-[20px] text-[#747A80]" />
        default:
          return <EmojiEventsOutlinedIcon className="text-[20px] text-[#747A80]" />
      }
    }
    return (
      <>
        <div className="flex flex-col gap-2 max-md:hidden ">
          {OpenDeposits.map((deposit) => (
            <div
              key={deposit.id}
              onClick={() => handleDepositClick(deposit.id)}
              className="flex w-full cursor-pointer  items-center justify-between rounded-lg border p-2 "
            >
              <div className="w-[20%]">{renderIcon(deposit.name)}</div>
              <div className="w-full">
                <p className="p-sm bold">{deposit.name}</p>
                <small className="p-sm">Name</small>
              </div>
              <div className="w-full">
                <p className="p-sm bold">{deposit.rate}</p>
                <small className="p-sm ">Rate</small>
              </div>
              <div className="w-full">
                <p className="p-sm bold">{deposit.account_balance}</p>
                <small className="p-sm ">Account balance</small>
              </div>
              <div className="w-full">
                <p className="p-sm bold">{deposit.interest}</p>
                <small className="p-sm ">Accrued interest</small>
              </div>
              <div className="flex w-full ">
                <div className="date-bg flex h-9 w-[104px] items-center justify-center rounded-md   ">
                  <p className="text-xs">{deposit.date}</p>
                </div>
              </div>
              <div>
                <PiDotsThree />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:hidden ">
          {OpenDeposits.map((deposit) => (
            <div
              key={deposit.id}
              onClick={() => handleDepositClick(deposit.id)}
              className="small-card flex w-full  cursor-pointer items-center justify-between rounded-lg p-2 "
            >
              <div className="flex items-center gap-3">
                {renderIcon(deposit.name)}
                <div>
                  <p className="text-sm font-bold">{deposit.name}</p>
                  <p className="text-sm ">{deposit.rate}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold">{deposit.account_balance}</p>
                <p className="text-sm ">{deposit.interest}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }

  const renderYourCredit = () => {
    const renderIcon = (name: any) => {
      switch (name) {
        case "Mortgage loan":
          return <MapsHomeWorkOutlinedIcon className="text-[20px] text-[#747A80]" />
        case "Consumer loan":
          return <MdOutlineDevices className="text-[20px] text-[#747A80]" />

        default:
          return <MdCreditScore className="text-[20px] text-[#747A80]" />
      }
    }
    return (
      <>
        <div className="flex flex-col gap-2 max-md:hidden">
          {Credits.map((credit) => (
            <div className="flex w-full  items-center justify-between rounded-lg border p-2">
              <div className="w-[20%]">{renderIcon(credit.name)}</div>
              <div className="w-full">
                <p className="p-sm bold">{credit.name}</p>
                <small className="p-sm ">Name</small>
              </div>
              <div className="w-full">
                <p className="p-sm bold">{credit.rate}</p>
                <small className="p-sm ">Rate</small>
              </div>
              <div className="w-full">
                <p className="p-sm bold">{credit.account_balance}</p>
                <small className="p-sm ">Account balance</small>
              </div>
              <div className="w-full">
                <p className="p-sm bold">{credit.interest}</p>
                <small className="p-sm ">Accrued interest</small>
              </div>
              <div className="flex w-full ">
                <div className="date-bg flex h-9 w-[104px] items-center justify-center rounded-md   ">
                  <p className="text-xs">{credit.date}</p>
                </div>
              </div>
              <div>
                <PiDotsThree />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 md:hidden ">
          {Credits.map((credit) => (
            <div
              key={credit.id}
              className="small-card flex w-full  cursor-pointer items-center justify-between rounded-lg p-2 "
            >
              <div className="flex items-center gap-3">
                {renderIcon(credit.name)}
                <div>
                  <p className="text-sm font-bold">{credit.name}</p>
                  <p className="text-sm ">{credit.rate}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold">{credit.account_balance}</p>
                <p className="text-sm ">{credit.interest}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className="flex w-full flex-col">
      <div className="tab-bg mb-8 flex w-[365px] items-center gap-3 rounded-lg p-1">
        {/* Tabs */}
        <button
          className={`${activeTab === "payment" ? "active-tab whitespace-nowrap" : "inactive-tab whitespace-nowrap"}`}
          onClick={() => setActiveTab("payment")}
        >
          Payment Accounts
        </button>
        <button
          className={`${activeTab === "deposit" ? "active-tab whitespace-nowrap" : "inactive-tab whitespace-nowrap"}`}
          onClick={() => setActiveTab("deposit")}
        >
          Open Deposits
        </button>

        <button
          className={`${activeTab === "credit" ? "active-tab whitespace-nowrap" : "inactive-tab whitespace-nowrap"}`}
          onClick={() => setActiveTab("credit")}
        >
          Your Credits
        </button>
      </div>
      {/* Render content based on active tab */}
      {activeTab === "payment" ? renderPaymentAccounts() : null}
      {activeTab === "deposit" ? renderOpenDeposits() : null}
      {activeTab === "credit" ? renderYourCredit() : null}
    </div>
  )
}

export default UserAccount
