import Link from "next/link"
import React, { useState } from "react"

const Bio = ({ onSaveAndContinue }: { onSaveAndContinue: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    phone_number: "",
    email: "",
    gender: "",
    language: "",
    dob: "",
    medical_condition: "",
    allergies: "",
    ethnic_origin: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSaveAndContinue(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
        {/* Phone Number */}
        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="phone_number" className="label-title">
            Service User’s Phone Number
          </label>
          <div className="input-field">
            <input
              type="text"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Enter details"
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="email" className="label-title">
            Service User’s Email
          </label>
          <div className="input-field">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="language" className="label-title">
            Language
          </label>
          <div className="input-field">
            <input
              type="text"
              id="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Gender & Date of Birth */}
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-3 flex w-full flex-col items-start">
            <label htmlFor="gender" className="label-title">
              Gender
            </label>
            <div className="input-field">
              <input
                type="text"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Enter gender"
                className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <div className="mb-3 flex w-full flex-col items-start">
            <label htmlFor="dob" className="label-title">
              Date of Birth
            </label>
            <div className="input-field">
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Medical Condition */}
        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="medical_condition" className="label-title">
            Medical Condition or Special Needs
          </label>
          <div className="textarea-field">
            <textarea
              id="medical_condition"
              value={formData.medical_condition}
              onChange={handleChange}
              placeholder="Enter details"
              className="bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%", background: "transparent" }}
            ></textarea>
          </div>
        </div>

        {/* Allergies */}
        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="allergies" className="label-title">
            Allergies
          </label>
          <div className="input-field">
            <input
              type="text"
              id="allergies"
              value={formData.allergies}
              onChange={handleChange}
              placeholder="Enter details"
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Ethnic Origin */}
        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="ethnic_origin" className="label-title">
            Ethnic Origin
          </label>
          <div className="input-field">
            <input
              type="text"
              id="ethnic_origin"
              value={formData.ethnic_origin}
              onChange={handleChange}
              placeholder="Enter details"
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>

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

export default Bio
