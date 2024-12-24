import React from "react"
import styles from "./modal.module.css"
import { IoMdClose } from "react-icons/io"
import { GrDownload } from "react-icons/gr"
import { AiOutlinePrinter } from "react-icons/ai"
import Image from "next/image"

interface TransactionModalProps {
  isOpen: boolean
  closeModal: () => void
  transactionInfo: {
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
  } | null
}

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, closeModal, transactionInfo }) => {
  if (!isOpen || !transactionInfo) {
    return null
  }

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 h-[200px] rounded-b-2xl bg-[#0164AF]">
          <div className="flex justify-between p-4 text-[#ffffff]">
            <small className="text-[16px] font-bold">Transaction Detail</small>
            <IoMdClose className="cursor-pointer" onClick={closeModal} />
          </div>
          <div className={styles.horizontal_line}></div>
          <div className="mt-10 flex h-full w-full items-center justify-center">
            <div className="rounded-full border-3 border-white">
              <Image src={transactionInfo.image} width={74} height={74} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.middleContent}>
          <div className="flex flex-col items-center justify-center pt-10">
            <h5>
              {transactionInfo.amount} USD Paid to {transactionInfo.payer}
            </h5>
            <p className="p-sm">Completed {transactionInfo.date}</p>
            <p className="mt-2 flex h-9 w-[84px] items-center justify-center rounded-md bg-[#e9fcec] pt-2 text-xs font-semibold text-[#23E33E]">
              {transactionInfo.status}
            </p>
          </div>

          <div className="flex justify-between px-4 py-2">
            <p className="p-xs">Transfer</p>
            <p className="text-sm">{transactionInfo.transfer}</p>
          </div>

          <div className="flex justify-between px-4 py-2">
            <p className="p-xs">Payeer</p>
            <p className="text-sm">{transactionInfo.payer}</p>
          </div>

          <div className="flex justify-between px-4 py-2">
            <p className="p-xs">Bank Account</p>
            <p className="text-sm">{transactionInfo.bank}</p>
          </div>

          <div className="flex justify-between px-4 py-2">
            <p className="p-xs">Card</p>
            <p className="text-sm">{transactionInfo.card}</p>
          </div>

          <div className="flex justify-between px-4 py-2">
            <p className="p-xs">Amount</p>
            <p className="text-sm">{transactionInfo.amount}</p>
          </div>

          <div className="flex justify-between px-4 py-2">
            <p className="p-xs">Fee</p>
            <p className="text-sm">{transactionInfo.fee}</p>
          </div>
        </div>

        <div className={styles.footer}>
          <div className="flex gap-2">
            <GrDownload />
            <small className="font-bold">Download</small>
          </div>
          <div className="flex gap-2">
            <AiOutlinePrinter />
            <small className="font-bold">Print</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionModal
