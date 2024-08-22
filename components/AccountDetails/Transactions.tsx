import React from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { AccountTransaction, Transaction } from "utils"
import dynamic from "next/dynamic"
import Image from "next/image"

const DynamicImage = dynamic(() => import("next/image"), { ssr: false })

export const Transactions = () => {
  return (
    <div className={styles.account_transactions}>
      <div className="px-4  max-md:px-0">
        {AccountTransaction.map((transactions, index) => (
          <div key={transactions.date}>
            <div className="p-sm py-4">{transactions.date}</div>
            {transactions.list.map((item, itemIndex) => (
              <div key={item.id} className=" py-2">
                <div className="flex  justify-between">
                  <div key={item.image} className="flex gap-6 pb-2">
                    <Image src={item.image} height={32} width={32} alt="" />
                    <div className="">
                      <p className="p-sm bold">{item.description}</p>
                      <small className="p-xs">{item.date}</small>
                    </div>
                  </div>
                  <p className="p-sm bold">{item.amount}</p>
                </div>
                {/* Check if it's not the last item across all Transactions */}
                {!(index === Transaction.length - 1 && itemIndex === transactions.list.length - 1) && (
                  <div className="border"></div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.blurEffect}></div>
    </div>
  )
}
