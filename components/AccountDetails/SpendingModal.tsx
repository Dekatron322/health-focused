import React from "react"
import styles from "./accountDetailsModal.module.css"
import { PiPeace } from "react-icons/pi"
import { MdCalendarMonth } from "react-icons/md"
import { UserCard } from "Utils"
import { GoDotFill } from "react-icons/go"

interface SpendingModalProps {
  params?: { CardId: string }
  onClose: () => void
}

const SpendingModal: React.FC<SpendingModalProps> = ({ params, onClose }) => {
  if (!params || !params.CardId) {
    // Handle the case where params are undefined or CardId is missing
    return <p>Error: CardId is missing</p>
  }

  const { CardId } = params
  const cardIdNumber = parseInt(CardId, 10)

  // Find the card in UserCard data array based on CardId
  const card = UserCard.find((card) => card.id === cardIdNumber)
  return (
    <div onClick={onClose}>
      {card ? (
        <div className={styles.modalOverlay} onClick={onClose}>
          <div className={`${styles.modalContent} sidebar`} onClick={(e) => e.stopPropagation()}>
            <div className="h-auto w-full rounded-md">
              <div className="flex items-center justify-between border-b p-2 px-3">
                <p className="font-bold">Breakdown</p>
                <MdCalendarMonth />
              </div>
              <div className={styles.horizontal_line}></div>
              <div className="flex h-64 flex-col items-center justify-center">
                <h5 className="text-center text-xl font-bold">$6,195.80</h5>
                <small>Spent in August</small>
              </div>

              {card.spendings.map((item, index) => (
                <div className="px-4">
                  <div key={index} className="mb-3 flex w-full justify-between py-3">
                    <div className="flex items-center gap-2">
                      {item.name === "Grocery" ? (
                        <GoDotFill className="text-blue-500" />
                      ) : item.name === "Shopping" ? (
                        <GoDotFill className="text-green-500" />
                      ) : item.name === "Car & Transport" ? (
                        <GoDotFill className="text-yellow-500" />
                      ) : item.name === "Health" ? (
                        <GoDotFill className="text-purple-500" />
                      ) : item.name === "Utilities" ? (
                        <GoDotFill className="text-pink-500" />
                      ) : (
                        <GoDotFill />
                      )}
                      <p className="text-sm ">{item.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold">{item.value}</p>
                    </div>
                  </div>
                  {index !== card.spendings.length - 1 && <div className="h-[1px] w-full bg-gray-300"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Card not found</p>
      )}
    </div>
  )
}

export default SpendingModal
