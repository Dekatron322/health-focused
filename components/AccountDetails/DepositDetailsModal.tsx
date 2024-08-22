import React from "react"
import styles from "./accountDetailsModal.module.css" // You need to create this CSS file for styling
import { PiPeace } from "react-icons/pi"

const DepositDetailsModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={`${styles.modalContent} sidebar`} onClick={(e) => e.stopPropagation()}>
        <div className="border-b">
          <h4 className="px-3 py-3 font-semibold">Account Details</h4>
        </div>
        <div className="  rounded-md p-4">
          <div className="flex w-full justify-between border-b pb-2">
            <p className="text-sm">Account name</p>
            <p className="font-semibold">Premium Account</p>
          </div>

          <div className="flex w-full justify-between border-b py-2">
            <p className="text-sm">Account number</p>
            <p className="font-semibold">UK64CT0000000010034567</p>
          </div>

          <div className="flex w-full justify-between border-b py-2">
            <p className="text-sm">Rate</p>
            <p className="font-semibold">2.00%</p>
          </div>

          <div className="flex w-full justify-between border-b py-2">
            <p className="text-sm">Start date</p>
            <p className="font-semibold">20.06.2022 </p>
          </div>

          <div className="flex w-full justify-between py-2">
            <p className="text-sm">End date</p>
            <p className="font-semibold">20.06.2024 </p>
          </div>
          <button className="my-2 flex w-full items-center justify-center gap-2 rounded-sm border px-4 py-2">
            <PiPeace />
            Update your details
          </button>
        </div>
      </div>
    </div>
  )
}

export default DepositDetailsModal
