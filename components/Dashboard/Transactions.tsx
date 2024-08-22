import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Transaction } from "utils"
import { GoArrowUpRight } from "react-icons/go"
import dynamic from "next/dynamic"
import Image from "next/image"

const DynamicImage = dynamic(() => import("next/image"), { ssr: false })

export const Transactions = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className={styles.transactions}>
      <div className="flex items-center justify-between p-4 max-md:px-0">
        <p className="font-semibold">Latest Transactions</p>
        <GoArrowUpRight />
      </div>
      <div className="border"></div>
      <div className="px-4 py-1 max-md:px-0">
        {Transaction.map((transactions, index) => (
          <div key={transactions.date}>
            <div className="my-4 text-xs text-[gray]">{transactions.date}</div>

            {transactions.list.map((item, itemIndex) => (
              <>
                <div key={item.id} className=" py-2">
                  <div className="flex  justify-between ">
                    <div key={item.image} className="flex items-center justify-center  gap-2">
                      <Image src={item.image} height={32} width={32} alt="" className="transition duration-1000" />

                      <div className="">
                        <p className="p-sm bold">{item.description}</p>

                        <p className="p-xs medium">{item.date}</p>
                      </div>
                    </div>

                    <p className="p-sm bold">{item.amount}</p>
                  </div>
                  {/* Check if it's not the last item across all Transactions */}
                </div>
                <div>
                  {!(index === Transaction.length - 1 && itemIndex === transactions.list.length - 1) && (
                    <div className="border-b py-2"></div>
                  )}
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.blurEffect}></div>
    </div>
  )
}
