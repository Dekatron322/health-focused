"use client"
import { UserCard } from "utils"
import { useState } from "react"
import Footer from "components/Footer/Footer"
import CardDetailNav from "components/Navbar/CardDetailNav"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import styles from "../../../../components/Dashboard/dashboard.module.css"
import Image from "next/image"
import { IoDocumentTextOutline } from "react-icons/io5"
import { MdOutlineDownload } from "react-icons/md"
import { GoDotFill } from "react-icons/go"
import { PiArrowElbowRightDuotone } from "react-icons/pi"
import { HiArrowsRightLeft } from "react-icons/hi2"
import CardManagementModal from "components/AccountDetails/CardManagementModal"
import Link from "next/link"
import SpendingModal from "components/AccountDetails/SpendingModal"
import CallMissedOutgoingOutlinedIcon from "@mui/icons-material/CallMissedOutgoingOutlined"
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone"
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined"
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined"
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined"
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined"
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined"
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined"
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined"
import { FiDownload } from "react-icons/fi"

export default function CardDetail({ params }: { params: { CardId: string } }) {
  const { CardId } = params

  // Convert CardId to a number
  const cardIdNumber = parseInt(CardId, 10)

  // Find the card in UserCard data array based on CardId
  const card = UserCard.find((card) => card.id === cardIdNumber)

  const [activeTab, setActiveTab] = useState("details")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const formatCardNumber = (number: string) => {
    if (window.innerWidth <= 600) {
      // Adjust the breakpoint as needed
      return number.substring(0, 10)
    }
    return number
  }

  const [isModalOpen, setModalOpen] = useState(false)
  const [isSpendingModalOpen, setSpendingModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const openSpendingModal = () => {
    setSpendingModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const closeSpendingModal = () => {
    setSpendingModalOpen(false)
  }

  return (
    <section className="h-full">
      <div className="mx-auto flex min-h-screen ">
        <div className="flex w-full  flex-col ">
          <CardDetailNav />

          <div className="py-4 pb-6 max-md:px-3 md:px-16">
            {card ? (
              <div>
                <div className="flex items-center gap-3 pb-6 max-md:hidden">
                  {card.logo === "visa" ? (
                    <Image src="/Visa11.svg" width={45} height={45} alt="" />
                  ) : card.logo === "mastercard" ? (
                    <Image src="/mastercard.svg" width={45} height={45} alt="" />
                  ) : card.logo === "maestro" ? (
                    <Image src="/maestro.svg" width={45} height={45} alt="" />
                  ) : card.logo === "amex" ? (
                    <Image src="/amex.svg" width={45} height={45} alt="" />
                  ) : (
                    <Image src="/default-card-logo.svg" width={45} height={45} alt="" />
                  )}
                  <div>
                    <h4>{card.balance}</h4>
                    <p className="p-sm">
                      Card <span>{card.number}</span> - <span>{card.expiry}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between max-md:hidden">
                    <div className="tab-bg    mb-8 flex w-[440px] items-center gap-3 rounded-lg p-1">
                      <button
                        className={
                          activeTab === "details" ? "active-tab whitespace-nowrap" : "inactive-tab whitespace-nowrap"
                        }
                        onClick={() => handleTabChange("details")}
                      >
                        Card Rquisities
                      </button>
                      <button
                        className={activeTab === "transactions" ? "active-tab" : "inactive-tab"}
                        onClick={() => handleTabChange("transactions")}
                      >
                        Transactions
                      </button>
                      <button
                        className={activeTab === "limits" ? "active-tab" : "inactive-tab"}
                        onClick={() => handleTabChange("limits")}
                      >
                        Limits
                      </button>
                      <button
                        className={activeTab === "spendings" ? "active-tab" : "inactive-tab"}
                        onClick={() => handleTabChange("spendings")}
                      >
                        Spendings
                      </button>
                      <button
                        className={activeTab === "settings" ? "active-tab" : "inactive-tab"}
                        onClick={() => handleTabChange("settings")}
                      >
                        Settings
                      </button>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <CallMissedOutgoingOutlinedIcon />
                      <p className="p-sm bold">Make a transfer</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full gap-4 pb-16">
                  {activeTab === "details" && (
                    <>
                      <div className={styles.dashboard_body__lhs}>
                        <div className="h-auto rounded-md md:border">
                          <div className="flex items-center justify-between p-4 max-md:hidden">
                            <p className="p-lg font-bold">Card Details</p>
                            <HiOutlineDotsHorizontal />
                          </div>
                          <div className="border"></div>

                          <div className="my-8 flex items-center justify-center">
                            <Image src="/visa-card-info.svg" height={200} width={325} alt="" />
                          </div>
                          <div className="flex items-center justify-center gap-10 md:hidden">
                            <div className="rounded-md border p-2" onClick={openModal}>
                              <FiDownload />
                            </div>
                            <Link href="/transactions" className="rounded-md border p-2">
                              <HiArrowsRightLeft />
                            </Link>
                            <div className="rounded-md border p-2" onClick={openSpendingModal}>
                              <PiArrowElbowRightDuotone />
                            </div>
                            {isModalOpen && <CardManagementModal onClose={closeModal} />}
                            {isSpendingModalOpen && <SpendingModal params={{ CardId }} onClose={closeSpendingModal} />}
                          </div>
                          <div className="px-4 pt-4">
                            {card.requisite.map((item, index) => (
                              <div>
                                <div key={index} className="flex w-full justify-between border-b py-3">
                                  <p className="p-sm">{item.name}</p>
                                  <p className="p-sm bold">{item.value}</p>
                                </div>
                                <div className={styles.horizontal_line}></div>
                              </div>
                            ))}
                            <div className="flex w-full justify-between py-3">
                              <p className="p-sm">3D Security</p>
                              <p className="p-sm bold">Enable</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dashboard_body__rhs}>
                        <div className="h-auto w-full rounded-md border max-md:hidden">
                          <div className="flex items-center justify-between p-4">
                            <p className="p-lg font-bold">Your Documents</p>
                          </div>
                          <div className="border"></div>
                          <div className="px-4 pt-4">
                            {card.documents.map((item, index) => (
                              <div>
                                <div key={index} className="flex w-full items-center justify-between py-5">
                                  <div className="w-1/4">
                                    <p className=" p-sm">{item.date}</p>
                                  </div>
                                  <div className="tab-bg rounded-full bg-[#EBF0F0] p-3">
                                    {item.name === "Term Deposit" ? (
                                      <HomeRepairServiceOutlinedIcon className="text-[#747A80]" />
                                    ) : item.name === "Accumulative Deposit" ? (
                                      <InsertChartOutlinedTwoToneIcon className="text-[#747A80]" />
                                    ) : item.name === "Digital Visa Opening" ? (
                                      <CreditCardOutlinedIcon className="text-[#747A80]" />
                                    ) : item.name === "Personal Details Upload" ? (
                                      <HowToRegOutlinedIcon className="text-[#747A80]" />
                                    ) : item.name === "Account Opening" ? (
                                      <InboxOutlinedIcon className="text-[#747A80]" />
                                    ) : item.name === "Term Change" ? (
                                      <InsertDriveFileOutlinedIcon className="text-[#747A80]" />
                                    ) : (
                                      <IoDocumentTextOutline className="text-[#747A80]" />
                                    )}
                                  </div>
                                  <div className="w-1/3">
                                    <p className="p-sm bold">{item.name}</p>
                                  </div>
                                  <div className="w-1/7 h-[42px] w-[42px]">
                                    {item.download === "true" ? (
                                      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-lg border">
                                        <MdOutlineDownload />{" "}
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}
                                  </div>
                                </div>
                                <div className={styles.horizontal_line}></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {activeTab === "transactions" && (
                    <div className=" w-full">
                      {card.transactions.map((transactionGroup, index) => (
                        <div key={index}>
                          <p className="my-4">{transactionGroup.date}</p>
                          <div>
                            {transactionGroup.list.map((transactionItem, innerIndex) => (
                              <>
                                <div key={innerIndex} className="flex  justify-between py-2 ">
                                  <div className="flex  gap-6">
                                    <Image src={transactionItem.image} height={32} width={32} alt="" />
                                    <div className=" pb-2">
                                      <p className="p-sm bold">{transactionItem.description}</p>
                                      <small className="p-xs">{transactionItem.date}</small>
                                    </div>
                                  </div>
                                  <p className="p-sm bold">{transactionItem.amount}</p>
                                </div>

                                {innerIndex !== transactionGroup.list.length - 1 && <div className="border"></div>}
                              </>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === "limits" && <div>settings</div>}
                  {activeTab === "spendings" && (
                    <div className="flex w-full gap-4 pb-16">
                      <div className={styles.dashboard_body__rhs}>
                        <div className="h-auto w-full rounded-lg border">
                          <div className="flex items-center justify-between p-4">
                            <p className="p-sm bold">Breakdown</p>
                            <EventNoteOutlinedIcon className="text-lg" />
                          </div>
                          <div className="border"></div>
                          <div className="flex h-64 flex-col items-center justify-center">
                            <h5 className="text-center text-xl font-bold">$6,195.80</h5>
                            <small>Spent in August</small>
                          </div>
                          {card.spendings.map((item, index) => (
                            <div className="px-4">
                              <div key={index} className="flex w-full justify-between py-4">
                                <div className="flex items-center gap-2">
                                  {item.name === "Grocery" ? (
                                    <GoDotFill className="text-[#0052FF]" />
                                  ) : item.name === "Shopping" ? (
                                    <GoDotFill className="text-[#23E33E]" />
                                  ) : item.name === "Car & Transport" ? (
                                    <GoDotFill className="text-[#F4C952]" />
                                  ) : item.name === "Health" ? (
                                    <GoDotFill className="text-[#9800FF]" />
                                  ) : item.name === "Utilities" ? (
                                    <GoDotFill className="text-[#F20089]" />
                                  ) : (
                                    <GoDotFill />
                                  )}
                                  <p className="text-sm ">{item.name}</p>
                                </div>
                                <div>
                                  <p className="p-sm bold">{item.value}</p>
                                </div>
                              </div>
                              {index !== card.spendings.length - 1 && <div className="border"></div>}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={styles.dashboard_body__lhs}>
                        <div className="h-auto w-full rounded-lg border">
                          <div className="flex items-center justify-between p-4">
                            <p className="p-sm bold">Income and Expenses</p>
                            <EventNoteOutlinedIcon className="text-lg" />
                          </div>
                          <div className="border"></div>
                          <div className="relative mt-10 h-80">
                            <Image fill src="/Report-Chart.svg" alt="" objectFit="cover" />
                          </div>
                          {card.incomeAndExpenses.map((item, index) => (
                            <div className="px-4">
                              <div key={index} className="flex w-full justify-between py-4">
                                <div className="flex items-center gap-2">
                                  {item.name === "Income" ? (
                                    <GoDotFill className="text-[#0052FF]" />
                                  ) : item.name === "Expenses" ? (
                                    <GoDotFill className="text-[#23E33E]" />
                                  ) : item.name === "Difference" ? (
                                    <GoDotFill className="text-[#F4C952]" />
                                  ) : (
                                    <GoDotFill />
                                  )}
                                  <p className="text-sm ">{item.name}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-bold">{item.value}</p>
                                </div>
                              </div>

                              {index !== card.incomeAndExpenses.length - 1 && <div className="border"></div>}
                            </div>
                          ))}
                          <div className="flex p-2">
                            <button className="p-sm bold m-2 flex h-[52px] w-full items-center justify-center gap-2 rounded-lg border p-4 py-2">
                              <PieChartOutlineOutlinedIcon />
                              See detailed report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "settings" && <div>settings</div>}
                </div>
              </div>
            ) : (
              <p>Card not found</p>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </section>
  )
}
