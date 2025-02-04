import { Button, Checkbox, TextField } from "@mui/material"
import React, { useState } from "react"

interface GeneralInfoProps {
  onSuccess: () => void // Define onSuccess as a function that returns void
}

const behaviours = [
  { key: "bullying", label: "Bullying" },
  { key: "fire_setting", label: "Fire Setting" },
  { key: "criminal_damage", label: "Criminal Damage" },
  { key: "property_damage", label: "Property Damage" },
  { key: "drug_substance_use", label: "Drug/Substance Use" },
  { key: "drug_dealing", label: "Drug Dealing" },
  { key: "racial_abuse", label: "Racial Abuse" },
  { key: "verbal_abuse", label: "Verbal Abuse" },
  { key: "argument_or_altercation", label: "Argument or Altercation" },
  { key: "assault", label: "Assault" },
  { key: "non_cooperation_or_non_compliance", label: "Non-cooperation or Non-compliance" },
  { key: "unauthorised_absence", label: "Unauthorised Absence" },
  { key: "inciting_terrorist_acts", label: "Inciting Terrorist Acts" },
  { key: "self_harm", label: "Self Harm" },
  { key: "suicidal_ideation", label: "Suicidal Ideation" },
  { key: "theft", label: "Theft" },
]

const Behaviour: React.FC<GeneralInfoProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState(
    behaviours.reduce(
      (acc, behaviour) => {
        acc[`${behaviour.key}_occured_once`] = false
        acc[`${behaviour.key}_occured_more_than_once`] = false
        return acc
      },
      {} as Record<string, boolean>
    )
  )

  const [title, setTitle] = useState("")

  const handleCheckboxChange = (key: string, type: "once" | "more_than_once") => {
    setFormData((prev) => ({
      ...prev,
      [`${key}_occured_${type}`]: !prev[`${key}_occured_${type}`],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const serviceUserId = localStorage.getItem("serviceUserId")
    if (!serviceUserId) {
      alert("Service User ID not found.")
      return
    }

    const payload = {
      title: "Behaviour Statistics",
      ...formData,
      status: true,
      pub_date: new Date().toISOString(),
    }

    try {
      const response = await fetch(
        `https://health-focused.fyber.site/service-user/add-weekly-report-bs-to-service-user/${serviceUserId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )

      if (response.ok) {
        alert("Report submitted successfully!")
        onSuccess()
      } else {
        alert("Failed to submit report.")
      }
    } catch (error) {
      console.error("Error submitting report:", error)
      alert("An error occurred.")
    }
  }

  return (
    <form className="mt-4 flex w-full flex-col rounded-md bg-white px-4 py-2" onSubmit={handleSubmit}>
      {/* <TextField
        label="Report Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        className="mb-4"
        required
      /> */}

      <div className="mb-3 flex w-full justify-end gap-5">
        <p className="text-end max-md:text-xs">Happened Just Once</p>
        <p className="text-end max-md:text-xs">Happened More than Once</p>
      </div>

      {behaviours.map((behaviour) => (
        <div key={behaviour.key} className="mb-3 flex w-full items-center justify-between bg-[#F5F5F5] px-4 py-2">
          <p className="text-sm">{behaviour.label}</p>
          <div className="flex gap-60 max-md:gap-32">
            <Checkbox
              checked={formData[`${behaviour.key}_occured_once`]}
              onChange={() => handleCheckboxChange(behaviour.key, "once")}
            />
            <Checkbox
              checked={formData[`${behaviour.key}_occured_more_than_once`]}
              onChange={() => handleCheckboxChange(behaviour.key, "more_than_once")}
            />
          </div>
        </div>
      ))}

      <Button type="submit" variant="contained" color="primary" className="mt-4">
        Submit Report
      </Button>
    </form>
  )
}

export default Behaviour
