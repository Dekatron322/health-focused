"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import Link from "next/link"
import { IoMdAddCircleOutline } from "react-icons/io"
import styles from "../../../components/Dashboard/dashboard.module.css"
import UserCards from "components/UserCards/UserCards"

export default function Cards() {
  const router = useRouter()
  // Simulating user account existence with a state
  const [hasAccount, setHasAccount] = useState(true)

  // Function to handle card click and navigate to card details
  const handleCardClick = (cardId: number) => {
    router.push(`/cards/${cardId}`)
  }

  // Render the content conditionally based on the 'hasAccount' state
  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            {hasAccount ? (
              <div>
                <DashboardNav />
                <div className="flex items-center justify-between  pb-6 max-md:px-3 md:px-16">
                  <div>
                    <h3 className="font-bold max-md:text-3xl md:text-4xl">$120,420.50</h3>
                    <small className="text-xs">
                      Total balances for all accounts <span className="text-[#004aff]">USD</span>
                    </small>
                  </div>
                  <Link href="" className="flex items-center gap-1 max-md:hidden">
                    <IoMdAddCircleOutline />
                    <small className="font-semibold">Add new card</small>
                  </Link>
                </div>
                <div className="flex w-full gap-4  pb-16 max-md:px-3 md:px-16">
                  <div className={styles.dashboard_body__lhs}>
                    <div className={styles.in_out}>
                      <UserCards onCardClick={handleCardClick} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <DashboardNav />
                <div className="flex h-full w-full flex-col items-center justify-center pb-6 max-md:px-3 md:px-16">
                  <Image src="./undraw_projections_re_ulc6.svg" width={250} height={250} alt="" />

                  <h2 className="mb-2 mt-4 text-center font-bold max-md:text-2xl md:text-4xl">Open a bank account</h2>
                  <p className="w-64 text-center">Apply and start using our bank app after document confirmation</p>
                  <div className="mt-8 flex items-center gap-2">
                    <IoMdAddCircleOutline className="text-sm text-[#004aff]" />
                    <Link href="" className="text-sm text-[#004aff]">
                      Open an account or deposit
                    </Link>
                  </div>
                </div>
              </>
            )}

            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
