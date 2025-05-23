import React, { useState } from "react"
import { CiCircleChevDown } from "react-icons/ci"
import { IoIosAddCircleOutline } from "react-icons/io"

interface GeneralInfoProps {
  onSuccess: () => void
}

const Appointment: React.FC<GeneralInfoProps> = ({ onSuccess }) => {
  const [appointments, setAppointments] = useState([{ id: Date.now() }])
  const [formData, setFormData] = useState<{ [key: number]: any }>({})

  const handleChange = (id: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }))
  }

  const addAppointmentForm = () => {
    setAppointments([...appointments, { id: Date.now() }])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const serviceUserId = localStorage.getItem("serviceUserId")
    if (!serviceUserId) {
      alert("No service user selected")
      return
    }

    try {
      for (const appointment of Object.values(formData)) {
        const payload = {
          title: appointment.title || "",
          date: appointment.date || "",
          appointment_type: appointment.appointment_type || "",
          attended: appointment.attended || "",
          missed: appointment.missed || "",
          status: true,
          pub_date: new Date().toISOString(),
        }

        await fetch(
          `https://hf-api.craftandurban.com/service-user/add-weekly-report-a-to-service-user/${serviceUserId}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        )
      }
      //   alert("Appointments added successfully!")
      onSuccess()
    } catch (error) {
      console.error("Error adding appointment:", error)
      alert("Failed to add appointment")
    }
  }
  return (
    <>
      <div className="mt-4 w-full rounded-md bg-white p-6">
        <form onSubmit={handleSubmit}>
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className=" mb-4 flex w-full flex-col gap-3 rounded-md border-[1px] border-[#C0C0C0] bg-[#E6E6E6] p-4"
            >
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Title of Appointment
                </label>
                <div className="input-field bg-white">
                  <input
                    type="text"
                    id="serviceUserName"
                    onChange={(e) => handleChange(appointment.id, "title", e.target.value)}
                    placeholder="Enter name"
                    className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Date
                  </label>
                  <div className="input-field flex w-full bg-white">
                    <input
                      type="date"
                      id="staffOnDuty"
                      onChange={(e) => handleChange(appointment.id, "date", e.target.value)}
                      placeholder="job"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Appointment Type
                  </label>
                  <div className="input-field w-full bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      onChange={(e) => handleChange(appointment.id, "appointment_type", e.target.value)}
                      placeholder="enter phone number"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                    <CiCircleChevDown size={18} />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Attended
                  </label>
                  <div className="input-field w-20 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      onChange={(e) => handleChange(appointment.id, "attended", e.target.value)}
                      placeholder=""
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Missed
                  </label>
                  <div className="input-field w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      onChange={(e) => handleChange(appointment.id, "missed", e.target.value)}
                      placeholder=""
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addAppointmentForm}
            className="mb-10 mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#69B7FF] p-3 text-sm text-white"
          >
            Add Another Appointment
            <IoIosAddCircleOutline size={20} />
          </button>

          <button
            type="submit"
            className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
          >
            SAVE AND CONTINUE
          </button>
        </form>
      </div>
    </>
  )
}

export default Appointment
