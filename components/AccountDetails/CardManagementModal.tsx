import React from "react"
import styles from "./accountDetailsModal.module.css" // You need to create this CSS file for styling
import { PiPeace } from "react-icons/pi"
import { IoMdAddCircleOutline } from "react-icons/io"
import { MdBlock, MdOutlineEdit } from "react-icons/md"
import { FiDownload } from "react-icons/fi"

interface CardManagementModalProps {
  onClose: () => void
}

const CardManagementModal: React.FC<CardManagementModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={`${styles.modalContent} sidebar`} onClick={(e) => e.stopPropagation()}>
        <div className="border-b">
          <h4 className="px-3 py-3 font-semibold">Card management</h4>
        </div>
        <div className="  rounded-md p-4">
          <p className="py-6">Actions</p>
          <div className={styles.cardManagement}>
            <IoMdAddCircleOutline className="font-bold" />
            <p className="text-sm font-bold">Card Details</p>
          </div>

          <div className={styles.cardManagement}>
            <FiDownload className="font-bold" />
            <p className="text-sm font-bold">Download Statement</p>
          </div>
          <div className={styles.cardManagement}>
            <MdOutlineEdit className="font-bold" />
            <p className="text-sm font-bold">Change Pin</p>
          </div>
          <div className={styles.cardManagement}>
            <MdBlock className="font-bold" />
            <p className="text-sm font-bold">Block Card</p>
          </div>

          <div className="mb-3 w-full gap-2 border-t max-md:flex-col">
            <div className="mt-3 flex gap-2">
              <div>
                <small>ATM Withdrawals</small>
                <h4 className="font-bold">$6,900.00</h4>
              </div>
            </div>

            <div className="my-4">
              <div className="relative pt-1">
                <div className="mb-2 flex items-center justify-between">
                  <div></div>
                </div>
                <div className="flex">
                  <div className="w-full rounded-full bg-gray-300">
                    <div className="h-1 w-1/2 rounded-full bg-yellow-500" style={{ width: "50%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">$5,100.00</h4>
                <small>Spent</small>
              </div>
              <div>
                <h4 className="text-end font-semibold">$1,800.00</h4>
                <small>Left</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardManagementModal
