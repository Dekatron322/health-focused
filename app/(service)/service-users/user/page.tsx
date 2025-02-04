"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import styles from "../../../../components/Dashboard/dashboard.module.css"
import { useEffect, useState } from "react"
import { ProfileInfo } from "components/Dashboard/ProfileInfo"
import { SkillsInfo } from "components/Dashboard/SkillsInfo"
import { Logger } from "components/Dashboard/Logger"

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [serviceUser, setServiceUser] = useState(null)

  useEffect(() => {
    const fetchServiceUser = async () => {
      const serviceUserId = localStorage.getItem("serviceUserId")
      if (serviceUserId) {
        try {
          const response = await fetch(`https://health-focused.fyber.site/service-user/service-user/${serviceUserId}/`)
          if (response.ok) {
            const data = (await response.json()) as any
            setServiceUser(data)
          } else {
            console.error("Failed to fetch service user")
          }
        } catch (error) {
          console.error("Error fetching service user:", error)
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }

    fetchServiceUser()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen bg-[#171818]">
          <div className="flex w-full flex-col">
            <DashboardNav />

            <div className="my-4 flex w-full gap-4 px-16 pb-16 max-md:flex-col max-md:px-3 lg:px-8 2xl:px-16">
              <div className="min-w-[220px]">
                <ProfileInfo serviceUser={serviceUser} />
              </div>
              <div className={styles.dashboard_body__lhs}>
                <Logger serviceUser={serviceUser} />
              </div>
              <div className={styles.dashboard_body__2rhs}>
                <SkillsInfo serviceUser={serviceUser} />
              </div>
            </div>

            {/* <Footer /> */}
          </div>
        </div>
      </section>
    </>
  )
}
