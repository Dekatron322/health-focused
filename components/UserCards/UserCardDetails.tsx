"use client"
import React, { useState } from "react"
import { Accounts, UserCard, OpenDeposits } from "Utils"
import Image from "next/image"
import { IoMdAddCircleOutline } from "react-icons/io"

type UserCardProps = {
  onCardClick: (cardId: number) => void
  // Other props as needed
}

export default function UserCardDetail({ params }: { params: { CardId: string } }) {
  const [activeTab, setActiveTab] = useState("all") // State to manage active tab

  const { CardId } = params

  // Convert CardId to a number
  const cardIdNumber = parseInt(CardId, 10)

  // Find the card in UserCard data array based on CardId
  const card = UserCard.find((card) => card.id === cardIdNumber)

  const renderAllCards = () => {
    return (
      <div className="flex w-full flex-wrap">
        {card ? (
          <div>
            <div className="flex items-center px-16 py-4 pb-6">
              <div>
                <h3 className="text-4xl font-bold">{card.balance}</h3>
                <small className="text-xs">
                  Card <span className="text-xs">{card.number}</span> - <span className="text-xs">{card.expiry}</span>
                </small>
              </div>
            </div>

            <div>
              <h1>Card Details</h1>
              <p>Card Number: {card.requisite?.[0]?.card_name}</p>
              <p>Balance: {card.balance}</p>
              <p>Blocked Amount: {card.blocked}</p>
              {/* Render other card details as needed */}
            </div>
          </div>
        ) : (
          <p>Card not found</p>
        )}
      </div>
    )
  }

  const renderOpenPhysicalCards = () => {
    return (
      <div className="flex w-full flex-wrap">
        {card ? (
          <div>
            <div className="flex items-center px-16 py-4 pb-6">
              <div>
                <h3 className="text-4xl font-bold">{card.balance}</h3>
                <small className="text-xs">
                  Card <span className="text-xs">{card.number}</span> - <span className="text-xs">{card.expiry}</span>
                </small>
              </div>
            </div>

            <div>
              <h1>Card Details</h1>
              <p>Card Number: {card.requisite?.[0]?.card_name}</p>
              <p>Balance: {card.balance}</p>
              <p>Blocked Amount: {card.blocked}</p>
              {/* Render other card details as needed */}
            </div>
          </div>
        ) : (
          <p>Card not found</p>
        )}
      </div>
    )
  }

  const renderYourVirtualCards = () => {
    return (
      <div className="flex w-full flex-wrap">
        {card ? (
          <div>
            <div className="flex items-center px-16 py-4 pb-6">
              <div>
                <h3 className="text-4xl font-bold">{card.balance}</h3>
                <small className="text-xs">
                  Card <span className="text-xs">{card.number}</span> - <span className="text-xs">{card.expiry}</span>
                </small>
              </div>
            </div>

            <div>
              <h1>Card Details</h1>
              <p>Card Number: {card.requisite?.[0]?.card_name}</p>
              <p>Balance: {card.balance}</p>
              <p>Blocked Amount: {card.blocked}</p>
              {/* Render other card details as needed */}
            </div>
          </div>
        ) : (
          <p>Card not found</p>
        )}
      </div>
    )
  }

  const renderYourDebitCard = () => {
    return (
      <div className="flex w-full flex-wrap">
        {card ? (
          <div>
            <div className="flex items-center px-16 py-4 pb-6">
              <div>
                <h3 className="text-4xl font-bold">{card.balance}</h3>
                <small className="text-xs">
                  Card <span className="text-xs">{card.number}</span> - <span className="text-xs">{card.expiry}</span>
                </small>
              </div>
            </div>

            <div>
              <h1>Card Details</h1>
              <p>Card Number: {card.requisite?.[0]?.card_name}</p>
              <p>Balance: {card.balance}</p>
              <p>Blocked Amount: {card.blocked}</p>
              {/* Render other card details as needed */}
            </div>
          </div>
        ) : (
          <p>Card not found</p>
        )}
      </div>
    )
  }

  const renderYourCreditCards = () => {
    return (
      <div className="flex w-full flex-wrap">
        {card ? (
          <div>
            <div className="flex items-center px-16 py-4 pb-6">
              <div>
                <h3 className="text-4xl font-bold">{card.balance}</h3>
                <small className="text-xs">
                  Card <span className="text-xs">{card.number}</span> - <span className="text-xs">{card.expiry}</span>
                </small>
              </div>
            </div>

            <div>
              <h1>Card Details</h1>
              <p>Card Number: {card.requisite?.[0]?.card_name}</p>
              <p>Balance: {card.balance}</p>
              <p>Blocked Amount: {card.blocked}</p>
              {/* Render other card details as needed */}
            </div>
          </div>
        ) : (
          <p>Card not found</p>
        )}
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col">
      <div className="mb-8  flex w-[308px] items-center gap-3 rounded-lg bg-gray-100 p-1 ">
        {/* Tabs */}
        <button
          className={`${
            activeTab === "all"
              ? "flex items-center rounded-lg bg-black p-2 px-4  text-xs font-semibold text-[sidebar] text-white"
              : "px-2 text-xs font-semibold"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`${
            activeTab === "physical"
              ? "flex items-center rounded-lg bg-black p-2 px-4 text-xs font-semibold text-white"
              : "px-2 text-xs font-semibold"
          }`}
          onClick={() => setActiveTab("physical")}
        >
          Physical
        </button>

        <button
          className={`${
            activeTab === "virtual"
              ? "flex items-center rounded-lg bg-black p-2 px-4 text-xs font-semibold text-white"
              : "px-2 text-xs font-semibold"
          }`}
          onClick={() => setActiveTab("virtual")}
        >
          Virtual
        </button>

        <button
          className={`${
            activeTab === "credit"
              ? "flex items-center rounded-lg bg-black p-2 px-4 text-xs font-semibold text-white"
              : "px-2 text-xs font-semibold"
          }`}
          onClick={() => setActiveTab("credit")}
        >
          Credit
        </button>

        <button
          className={`${
            activeTab === "debit"
              ? "flex items-center rounded-lg bg-black p-2 px-4 text-xs font-semibold text-white"
              : "px-2 text-xs font-semibold"
          }`}
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
