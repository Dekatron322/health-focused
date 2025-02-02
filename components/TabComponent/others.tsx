import { Checkbox } from "@mui/material"
import Link from "next/link"
import React, { useState } from "react"

const Others = ({ onSaveAndContinue }: { onSaveAndContinue: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    health_summary: "",
    education_training_summary: "",
    employment_summary: "",
    risk_summary: "",
    identified_needs: "",
    additional_information: "",
    medical_registrations: false,
    in_education: false,
    job_ready: false,
    risk_assessed: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target
    setFormData({ ...formData, [id]: checked })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSaveAndContinue(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
        {[
          {
            label: "Health Summary",
            id: "health_summary",
            checkboxLabel: "Medical Registrations",
            checkboxId: "medical_registrations",
          },
          {
            label: "Education/Training Summary",
            id: "education_training_summary",
            checkboxLabel: "In Education",
            checkboxId: "in_education",
          },
          {
            label: "Employment Summary",
            id: "employment_summary",
            checkboxLabel: "Job Ready",
            checkboxId: "job_ready",
          },
          { label: "Risk Summary", id: "risk_summary", checkboxLabel: "Risk Assessed", checkboxId: "risk_assessed" },
          { label: "Identified Needs", id: "identified_needs" },
          { label: "Additional Information", id: "additional_information" },
        ].map(({ label, id, checkboxLabel, checkboxId }) => (
          <div key={id} className="mb-3 flex w-full flex-col items-start">
            <label htmlFor={id} className="label-title">
              {label}
            </label>
            <div className="textarea-field">
              <textarea
                id={id}
                value={
                  typeof formData[id as keyof typeof formData] === "boolean"
                    ? ""
                    : (formData[id as keyof typeof formData] as string)
                }
                onChange={handleChange}
                placeholder="Enter additional information"
                className="bg-transparent outline-none focus:outline-none lg:text-sm"
                style={{ width: "100%", background: "transparent" }}
              />
            </div>
            {checkboxLabel && checkboxId && (
              <div className="flex items-center">
                <Checkbox
                  id={checkboxId}
                  checked={formData[checkboxId as keyof typeof formData] as boolean}
                  onChange={handleCheckboxChange}
                />
                <p className="text-xs">{checkboxLabel}</p>
              </div>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
        >
          SAVE AND CONTINUE
        </button>
      </form>
    </div>
  )
}

export default Others
