"use client"
import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { AccountTransaction } from "utils"
import Image from "next/image"
import TransactionModal from "./TransactionModal"

interface TransactionTableProps {}

export const TransactionTable: React.FC<TransactionTableProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState<{
    date: string
    description: string
    amount: string
    status: string
    type: string
    fee: string
    image: string
    payer: string
    card: string
    bank: string
    transfer: string

    // Add more properties as needed
  } | null>(null)

  const openModal = (transaction: (typeof AccountTransaction)[0]["list"][0]) => {
    setSelectedTransaction(transaction)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedTransaction(null)
    setIsModalOpen(false)
  }
  return (
    <div className="flex w-full">
      <div className="w-full px-2 py-1">
        {AccountTransaction.map((transactions, index) => (
          <div key={transactions.date}>
            <div className="my-4 text-xs text-[gray] max-md:my-1">{transactions.date}</div>
            {transactions.list.map((item, itemIndex) => (
              <div key={item.id} className="py-2 max-md:py-0" onClick={() => openModal(item)}>
                <div className="flex cursor-pointer  justify-between pb-3">
                  <div key={item.image} className="flex  gap-6">
                    <Image src={item.image} height={32} width={32} alt="" />
                    <div className="">
                      <p className="p-sm bold">{item.description}</p>
                      <p className="p-xs">{item.date}</p>
                    </div>
                  </div>
                  <p className="p-sm bold">{item.amount}</p>
                </div>
                {/* Check if it's not the last item across all Transactions */}

                {!(index === AccountTransaction.length - 1 && itemIndex === transactions.list.length - 1) && (
                  <div className="border"></div>
                )}
              </div>
            ))}
            <TransactionModal isOpen={isModalOpen} closeModal={closeModal} transactionInfo={selectedTransaction} />
          </div>
        ))}
      </div>
      <div className={styles.blurEffect}></div>
    </div>
  )
}
