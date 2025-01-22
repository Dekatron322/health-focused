"use client"
import { useEffect, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { IoCheckmarkCircle } from "react-icons/io5"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

interface LogDetails {
  id: string
  service_user_name: string
  updated_by: string
  placement: string
  staff_on_duty: string
  update: string
  status: boolean
  pub_date: string
}

export default function NewLogs() {
  const [hasTransactions, setHasTransactions] = useState<boolean>(true)
  const [logDetails, setLogDetails] = useState<LogDetails | null>(null)
  const [files, setFiles] = useState<PreviewFile[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editLog, setEditLog] = useState<Partial<LogDetails>>({})

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }

  const router = useRouter()

  useEffect(() => {
    const logId = localStorage.getItem("selectedLogId")

    if (!logId) {
      router.push("/dashboard")
      return
    }

    const fetchLogDetails = async () => {
      try {
        const response = await fetch(`https://health-focused.fyber.site/daily-log/daily-logo/${logId}`)
        const data = (await response.json()) as LogDetails
        setLogDetails(data)
      } catch (error) {
        console.error("Error fetching log details:", error)
      }
    }

    fetchLogDetails()
  }, [logDetails])

  const handleBackButtonClick = () => {
    router.back()
  }

  const formatPubDate = (pub_date: string) => {
    const date = new Date(pub_date)

    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })

    return { time, formattedDate }
  }

  const formattedPubDate = logDetails ? formatPubDate(logDetails.pub_date) : null

  const handleEditClick = () => {
    if (logDetails) {
      setEditLog(logDetails)
      setIsModalOpen(true)
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = (field: keyof LogDetails, value: string | boolean) => {
    setEditLog({ ...editLog, [field]: value })
  }

  const handleSaveChanges = async () => {
    if (!logDetails) return

    try {
      const updatedPayload = { ...logDetails, ...editLog }
      const response = await fetch(`https://health-focused.fyber.site/daily-log/daily-logo/${logDetails.id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPayload),
      })

      if (response.ok) {
        const updatedLog = await response.json()
        console.log("Updated log from server:", updatedLog) // Debugging
        // Test with dummy data
        setLogDetails({ ...logDetails }) // Test simple state update
        setIsModalOpen(false)
      } else {
        const errorResponse = await response.json()
        console.error("Failed to update log:", errorResponse)
      }
    } catch (error) {
      console.error("Error updating log:", error)
    }
  }

  return (
    <>
      <section className="h-full md:bg-[#171818]">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full flex-col">
            <div>
              <DashboardNav />
            </div>
            <div className="my-3 justify-center gap-3 max-md:px-3 md:mt-8 md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className="mb-6 flex flex-col gap-4 rounded-md bg-white md:w-1/2 md:border-[1px] lg:w-2/3 2xl:w-1/2">
                <div className="flex w-full justify-between md:p-4">
                  <div className="flex flex-row gap-3">
                    <Image
                      className="object-contain max-md:hidden"
                      src="/Number=104.png"
                      width={40}
                      height={30}
                      alt="smup"
                    />
                    <div>
                      <p className="text-xs text-[#69B7FF]">Updated by</p>
                      <p className="lg:text-sm 2xl:text-base">{logDetails?.updated_by}</p>
                      <p className="text-xs">Keystone Avenue</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-[#69B7FF]">Service User</p>
                    <p className="lg:text-sm 2xl:text-base">{logDetails?.service_user_name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#69B7FF]">Staff on Duty</p>
                    <p className="lg:text-sm 2xl:text-base">{logDetails?.staff_on_duty}</p>
                  </div>
                  <div className="max-sm:hidden">
                    {formattedPubDate && (
                      <>
                        <p className="text-xs text-[#69B7FF]">{formattedPubDate.time}</p>
                        <p className="lg:text-sm 2xl:text-base">{formattedPubDate.formattedDate}</p>
                      </>
                    )}
                  </div>
                </div>
                <div className="w-full border-b"></div>
                <p className="md:p-4 lg:text-sm 2xl:text-base">{logDetails?.update}</p>
                <div className="flex gap-3 sm:px-4">
                  <div>
                    <Image
                      className="object-contain pb-2"
                      src="/images/cooking.png"
                      width={150}
                      height={170}
                      alt="smup"
                    />
                    <p className="text-xs">Martin making food</p>
                  </div>
                  <div>
                    <Image
                      className="object-contain pb-2"
                      src="/images/cooking.png"
                      width={150}
                      height={170}
                      alt="smup"
                    />
                    <p className="text-xs">Martin’s Recipe Notes</p>
                  </div>
                </div>
                <div className="items-center justify-between sm:p-4 md:flex">
                  <div className="flex items-center gap-2">
                    <IoCheckmarkCircle size={24} className="text-[#B5DBFF]" />
                    <p className="lg:text-sm xl:text-base">Marked relevant for weekly report</p>
                  </div>
                  <div className="flex gap-4 max-md:mt-5">
                    <button className="flex h-10 items-center gap-2 rounded-md bg-[#0085FF] p-2 text-xs text-[#fff]">
                      VIEW IN LOG
                    </button>
                    <button
                      onClick={handleEditClick}
                      className="flex h-10 items-center gap-2 rounded-md bg-[#0085FF] px-4 py-2 text-xs text-[#fff]"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={isModalOpen} onClose={handleModalClose} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Log</DialogTitle>
        <DialogContent>
          <TextField
            label="Service User Name"
            fullWidth
            margin="dense"
            value={editLog.service_user_name || ""}
            onChange={(e) => handleInputChange("service_user_name", e.target.value)}
          />
          <TextField
            label="Updated By"
            fullWidth
            margin="dense"
            value={editLog.updated_by || ""}
            onChange={(e) => handleInputChange("updated_by", e.target.value)}
          />
          <TextField
            label="Placement"
            fullWidth
            margin="dense"
            value={editLog.placement || ""}
            onChange={(e) => handleInputChange("placement", e.target.value)}
          />
          <TextField
            label="Staff On Duty"
            fullWidth
            margin="dense"
            value={editLog.staff_on_duty || ""}
            onChange={(e) => handleInputChange("staff_on_duty", e.target.value)}
          />
          <TextField
            label="Update"
            fullWidth
            margin="dense"
            multiline
            rows={4}
            value={editLog.update || ""}
            onChange={(e) => handleInputChange("update", e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
