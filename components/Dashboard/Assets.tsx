"use client"
import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Asset } from "utils"
import Image from "next/image"

export const Assets = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className={styles.assets}>
      <p className="p-4 font-semibold max-md:px-0">Your Assets</p>
      <div className="border "></div>
      <div className=" py-1 max-md:px-0">
        <div className="relative mt-4 h-64">
          <Image fill src="/Report.svg" alt="" objectFit="cover" />
        </div>
        {Asset.map((assets) => (
          <div key={assets.id} className=" flex items-center justify-between px-4 py-3">
            <div className=" flex gap-2">
              <Image src={assets.image} width={24} height={24} alt="dekalo" />

              <div>
                <h6 className="p-sm bold">{assets.number}</h6>
                <p className="p-xs">Account number</p>
              </div>
            </div>

            <div className="flex flex-col items-end justify-end">
              <p className="p-sm bold">{assets.balance}</p>
              <small className="p-xs">Account balance</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
