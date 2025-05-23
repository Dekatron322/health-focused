import Link from "next/link"
import React from "react"
import { CiCircleChevDown } from "react-icons/ci"

interface KeyworkSessionProps {
  onSuccess: () => void // Define onSuccess as a function that returns void
}

const KeyworkSession: React.FC<KeyworkSessionProps> = ({ onSuccess }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Retrieve the service user ID from local storage
    const serviceUserId = localStorage.getItem("serviceUserId")

    if (!serviceUserId) {
      console.error("Service user ID not found in local storage")
      return
    }

    // Construct the payload using form data
    const form = e.target as HTMLFormElement
    const payload = {
      title: "Weekly Report", // You can modify this as needed
      summary: (form.elements.namedItem("summary") as HTMLTextAreaElement).value,
      delivered_by: (form.elements.namedItem("deliveredBy") as HTMLInputElement).value,
      total_duration: (form.elements.namedItem("totalDuration") as HTMLInputElement).value,
      session_outcome: (form.elements.namedItem("sessionOutcome") as HTMLTextAreaElement).value,
      follow_up_action: (form.elements.namedItem("followUpAction") as HTMLTextAreaElement).value,
      status: true,
      pub_date: new Date().toISOString(),
    }

    try {
      const response = await fetch(
        `https://hf-api.craftandurban.com/service-user/add-monthly-report-ks-to-service-user/${serviceUserId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to submit weekly report")
      }

      const data = await response.json()
      console.log("Weekly report submitted successfully:", data)

      // Call the onSuccess callback to move to the next tab
      onSuccess() // This should trigger the next tab
    } catch (error) {
      console.error("Error submitting weekly report:", error)
    }
  }

  return (
    <form className="mt-4 flex w-full flex-col bg-white p-4" onSubmit={handleSubmit}>
      <div className="mb-3 flex w-full flex-col items-start">
        <label htmlFor="summary" className="label-title">
          Summary of Keywork Sessions
        </label>
        <div className="textarea-field">
          <textarea
            id="summary"
            name="summary"
            placeholder="Separate names by comma"
            className="bg-transparent text-sm outline-none focus:outline-none"
            style={{ width: "100%", background: "transparent" }}
          ></textarea>
        </div>
      </div>

      <div className="mt-3 flex flex-col">
        <label htmlFor="deliveredBy" className="label-title">
          Delivered by
        </label>
        <div className="input-field w-20">
          <input
            type="text"
            id="deliveredBy"
            name="deliveredBy"
            placeholder="enter name"
            className="w-20 bg-transparent outline-none focus:outline-none"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="mt-3 flex flex-col">
        <label htmlFor="totalDuration" className="label-title">
          Total Duration (hours)
        </label>
        <div className="input-field w-20">
          <input
            type="text"
            id="totalDuration"
            name="totalDuration"
            placeholder="Select between 1 and 10"
            className="w-20 bg-transparent outline-none focus:outline-none"
            style={{ width: "100%" }}
          />
          <CiCircleChevDown size={18} />
        </div>
      </div>

      <div className="my-3 flex w-full flex-col items-start">
        <label htmlFor="sessionOutcome" className="label-title">
          Session Outcome
        </label>
        <div className="textarea-field">
          <textarea
            id="sessionOutcome"
            name="sessionOutcome"
            placeholder="Separate names by comma"
            className="bg-transparent text-sm outline-none focus:outline-none"
            style={{ width: "100%", background: "transparent" }}
          ></textarea>
        </div>
      </div>

      <div className="my-3 flex w-full flex-col items-start">
        <label htmlFor="followUpAction" className="label-title">
          Follow up actions
        </label>
        <div className="textarea-field">
          <textarea
            id="followUpAction"
            name="followUpAction"
            placeholder="Separate names by comma"
            className="bg-transparent text-sm outline-none focus:outline-none"
            style={{ width: "100%", background: "transparent" }}
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
      >
        SAVE AND CONTINUE
      </button>
    </form>
  )
}

export default KeyworkSession
