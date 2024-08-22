import React, { useState } from "react"
import { Accounts, UserCard, OpenDeposits } from "utils"
import Image from "next/image"
import { IoMdAddCircleOutline } from "react-icons/io"

type UserCardProps = {
  onCardClick: (cardId: number) => void
  // Other props as needed
}

const UserCards: React.FC<UserCardProps> = ({ onCardClick }) => {
  const [activeTab, setActiveTab] = useState("all") // State to manage active tab

  const renderAllCards = () => {
    return (
      <div className="flex w-full flex-wrap">
        {UserCard.map((account, index) => (
          <div
            key={account.id}
            onClick={() => onCardClick(account.id)}
            className="w-full cursor-pointer p-2 md:w-1/2 lg:w-1/2 xl:w-1/3"
          >
            <div className="small-card flex flex-col justify-between rounded-md p-4 transition duration-500 hover:border-none hover:shadow-xl md:border">
              <div className="flex items-start justify-between">
                <div className="mb-4">
                  <p className="p-sm bold">Card number</p>
                  <p className="p-xs">{account.number}</p>
                </div>
                <Image src={account.image} width={28} height={28} alt="" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h4>{account.balance}</h4>
                  <p className="p-xs">Blocked amount {account.blocked}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="p-sm bold">{account.expiry}</p>
                  <p className="p-xs medium capitalize">{account.status}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderOpenPhysicalCards = () => {
    const physicalCards = UserCard.filter((card) => card.type === "physical")

    if (physicalCards.length === 0) {
      return (
        <div className="flex h-48 items-center justify-center">
          <h2>No physical cards available</h2>
        </div>
      )
    }

    return (
      <div className="flex w-full flex-wrap">
        {physicalCards.map((account, index) => (
          <div key={account.id} className="w-full cursor-pointer p-2 md:w-1/2 lg:w-1/2 xl:w-1/3">
            <div
              className={`rounded-md border p-4 transition duration-500 hover:border-none hover:shadow-xl ${
                index === 0 ? "border-none shadow-2xl" : "" // Adding shadow to the first item
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="mb-4">
                  <h5 className="font-semibold">Card number</h5>
                  <small>{account.number}</small>
                </div>
                <Image src={account.image} width={30} height={30} alt="" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h5 className="text-xl font-bold">{account.balance}</h5>
                  <small>Blocked amount {account.blocked}</small>
                </div>
                <div className="flex flex-col items-end">
                  <h5 className="text-sm font-bold">{account.expiry}</h5>
                  <small className="font-semibold capitalize">{account.status}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderYourVirtualCards = () => {
    const virtualCards = UserCard.filter((card) => card.type === "virtual")

    if (virtualCards.length === 0) {
      return (
        <div className="flex h-48 items-center justify-center">
          <Image src="/undraw_create_re_57a3.svg" height={300} width={300} alt="" />
          <h2>No physical cards available</h2>
        </div>
      )
    }

    return (
      <div className="flex w-full flex-wrap">
        {virtualCards.map((account, index) => (
          <div key={account.id} className="w-full cursor-pointer p-2 md:w-1/2 lg:w-1/2 xl:w-1/3 ">
            <div
              className={`rounded-md border p-4 transition duration-500 hover:border-none hover:shadow-xl ${
                index === 0 ? "border-none shadow-2xl" : "" // Adding shadow to the first item
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="mb-4">
                  <h5 className="font-semibold">Card number</h5>
                  <small>{account.number}</small>
                </div>
                <Image src={account.image} width={30} height={30} alt="" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h5 className="text-xl font-bold">{account.balance}</h5>
                  <small>Blocked amount {account.blocked}</small>
                </div>
                <div className="flex flex-col items-end">
                  <h5 className="text-sm font-bold">{account.expiry}</h5>
                  <small className="font-semibold capitalize">{account.status}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderYourDebitCard = () => {
    const debitCards = UserCard.filter((card) => card.type === "debit")

    if (debitCards.length === 0) {
      return (
        <div className="flex h-full flex-col items-center  justify-center gap-4">
          <Image src="/undraw_create_re_57a3.svg" height={400} width={400} alt="" />
          <h2 className="text-center font-bold">No credit cards available</h2>
          <div className="flex items-center gap-1">
            <IoMdAddCircleOutline />
            <small className="font-semibold">add new card</small>
          </div>
        </div>
      )
    }

    return (
      <div className="flex w-full flex-wrap">
        {debitCards.map((account, index) => (
          <div key={account.id} className="w-1/2 p-2 md:w-1/2 lg:w-1/2 xl:w-1/2 ">
            <div
              className={`rounded-md border p-4 transition duration-500 hover:border-none hover:shadow-xl ${
                index === 0 ? "border-none shadow-2xl" : "" // Adding shadow to the first item
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="mb-4">
                  <h5 className="font-semibold">Card number</h5>
                  <small>{account.number}</small>
                </div>
                <Image src={account.image} width={30} height={30} alt="" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h5 className="text-xl font-bold">{account.balance}</h5>
                  <small>Blocked amount {account.blocked}</small>
                </div>
                <div className="flex flex-col items-end">
                  <h5 className="text-sm font-bold">{account.expiry}</h5>
                  <small className="font-semibold capitalize">{account.status}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderYourCreditCards = () => {
    const creditCards = UserCard.filter((card) => card.type === "credit")

    if (creditCards.length === 0) {
      return (
        <div className="flex h-48 items-center justify-center">
          <Image src="/undraw_create_re_57a3.svg" height={300} width={300} alt="" />
          <h2>No credit cards available</h2>
        </div>
      )
    }

    return (
      <div className="flex w-full flex-wrap">
        {creditCards.map((account, index) => (
          <div key={account.id} className="w-full cursor-pointer p-2 md:w-1/2 lg:w-1/2 xl:w-1/3 ">
            <div
              className={`rounded-md border p-4 transition duration-500 hover:border-none hover:shadow-xl ${
                index === 0 ? "border-none shadow-2xl" : "" // Adding shadow to the first item
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="mb-4">
                  <h5 className="font-semibold">Card number</h5>
                  <small>{account.number}</small>
                </div>
                <Image src={account.image} width={30} height={30} alt="" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h5 className="text-xl font-bold">{account.balance}</h5>
                  <small>Blocked amount {account.blocked}</small>
                </div>
                <div className="flex flex-col items-end">
                  <h5 className="text-sm font-bold">{account.expiry}</h5>
                  <small className="font-semibold capitalize">{account.status}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col">
      <div className="tab-bg  mb-8 flex w-[308px] items-center gap-3 rounded-lg p-1 ">
        {/* Tabs */}
        <button
          className={`${activeTab === "all" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`${activeTab === "physical" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("physical")}
        >
          Physical
        </button>

        <button
          className={`${activeTab === "virtual" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("virtual")}
        >
          Virtual
        </button>

        <button
          className={`${activeTab === "credit" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("credit")}
        >
          Credit
        </button>

        <button
          className={`${activeTab === "debit" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("debit")}
        >
          Debit
        </button>
      </div>
      {/* Render content based on active tab */}
      {activeTab === "all" ? renderAllCards() : null}
      {activeTab === "physical" ? renderOpenPhysicalCards() : null}
      {activeTab === "virtual" ? renderYourVirtualCards() : null}
      {activeTab === "debit" ? renderYourDebitCard() : null}
      {activeTab === "credit" ? renderYourCreditCards() : null}
    </div>
  )
}

export default UserCards
