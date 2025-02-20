import Link from "next/link"
import React from "react"
import { CiCircleChevDown } from "react-icons/ci"
import { FaCircleInfo } from "react-icons/fa6"

interface GeneralInfoProps {
  onSuccess: () => void // Define onSuccess as a function that returns void
}

const SkillDevelopment: React.FC<GeneralInfoProps> = ({ onSuccess }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const serviceUserId = localStorage.getItem("serviceUserId")

      if (!serviceUserId) {
        console.error("Service user ID not found in local storage")
        alert("Error: Service user ID is missing. Please log in again.")
        return
      }

      const form = e.currentTarget as HTMLFormElement

      // Safely extract form data
      const getFieldValue = (name: string) => {
        const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null
        return field?.value || "" // Avoid null reference errors
      }

      const formData = {
        title: "Weekly Skill Development Report",
        self_care: getFieldValue("self_care"),
        self_care_weekly_grade: getFieldValue("self_care_weekly_grade"),
        cooking: getFieldValue("cooking"),
        cooking_weekly_grade: getFieldValue("cooking_weekly_grade"),
        general_budgeting: getFieldValue("general_budgeting"),
        general_budgeting_weekly_grade: getFieldValue("general_budgeting_weekly_grade"),
        emotional_wellbeing: getFieldValue("emotional_wellbeing"),
        emotional_wellbeing_weekly_grade: getFieldValue("emotional_wellbeing_weekly_grade"),
        cooperation: getFieldValue("cooperation"),
        cooperation_weekly_grade: getFieldValue("cooperation_weekly_grade"),
        status: true,
        pub_date: new Date().toISOString(),
      }

      // Ensure mandatory fields are filled
      if (!formData.self_care || !formData.cooking || !formData.emotional_wellbeing || !formData.cooperation) {
        console.error("Some required fields are empty.")
        alert("Please fill in all required fields before submitting.")
        return
      }

      const response = await fetch(
        `https://health-focused.fyber.site/service-user/add-monthly-report-sd-to-service-user/${serviceUserId}/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        const errorText = await response.text() // Get response details for debugging
        throw new Error(`Failed to submit the form: ${errorText}`)
      }

      const result = await response.json()
      console.log("Form submitted successfully:", result)
      //   alert("Form submitted successfully!")

      // Proceed to next step
      onSuccess()
    } catch (error) {
      console.error("Error submitting the form:", error)
      alert("An error occurred while submitting the form. Please try again.")
    }
  }

  return (
    <div>
      <form className="mt-4 flex w-full flex-col rounded-md bg-white p-4" onSubmit={handleSubmit}>
        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="self_care" className="label-title">
            Self Care / Personal Hygiene
          </label>
          <p className="mb-3 text-xs">
            Staff guide: This personal skill should include regular body hygiene such as showers or a bath. Grooming and
            general care of the body. This also covers weekly laundry and standard of appearance such as state of
            clothing. This section also includes room checks.
          </p>
          <div className="textarea-field">
            <textarea
              id="self_care"
              name="self_care"
              placeholder="Separate names by comma"
              className="bg-transparent text-sm outline-none focus:outline-none"
              style={{ width: "100%", background: "transparent" }}
            ></textarea>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <p className="whitespace-nowrap text-sm">Weekly Grade</p>
            <div className="input-field w-20">
              <input
                type="text"
                id="self_care_weekly_grade"
                name="self_care_weekly_grade"
                placeholder="Select between 1 and 10"
                className="w-20 bg-transparent outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
              <CiCircleChevDown size={18} />
            </div>
            <FaCircleInfo size={24} />
          </div>
        </div>

        <div className="my-3 flex w-full flex-col items-start">
          <label htmlFor="cooking" className="label-title">
            Cooking/Food Shopping
          </label>
          <p className="mb-3 text-xs">
            Staff guide: Describe here cooking skills and frequency. Nutrition and food purchase. Budgeting allowance
            sensibly.
          </p>
          <div className="textarea-field">
            <textarea
              id="cooking"
              name="cooking"
              placeholder="Separate names by comma"
              className="bg-transparent text-sm outline-none focus:outline-none"
              style={{ width: "100%", background: "transparent" }}
            ></textarea>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <p className="whitespace-nowrap text-sm">Weekly Grade</p>
            <div className="input-field w-20">
              <input
                type="text"
                id="cooking_weekly_grade"
                name="cooking_weekly_grade"
                placeholder="Select between 1 and 10"
                className="w-20 bg-transparent outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
              <CiCircleChevDown size={18} />
            </div>
            <FaCircleInfo size={24} />
          </div>
        </div>

        <div className="my-3 flex w-full flex-col items-start">
          <label htmlFor="general_budgeting" className="label-title">
            General Budgeting
          </label>

          <div className="textarea-field">
            <textarea
              id="gen"
              name="general_budgeting"
              placeholder="enter"
              className="bg-transparent text-sm outline-none focus:outline-none"
              style={{ width: "100%", background: "transparent" }}
            ></textarea>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <p className="whitespace-nowrap text-sm">Weekly Grade</p>
            <div className="input-field w-20">
              <input
                type="text"
                id="general_budgeting_weekly_grade"
                name="general_budgeting_weekly_grade"
                placeholder="Select between 1 and 10"
                className="w-20 bg-transparent outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
              <CiCircleChevDown size={18} />
            </div>
            <FaCircleInfo size={24} />
          </div>
        </div>

        <div className="my-3 flex w-full flex-col items-start">
          <label htmlFor="emotional_wellbeing" className="label-title">
            Emotional Well Being
          </label>
          <p className="mb-3 text-xs">
            Staff guide: Describe here the current emotions and feelings of the child. Are they exhibiting low moods? Is
            their emotional state interfering with routine weekly activities such as attending classes, engaging with
            staff and other residents, attitude to support sleepless nights, restlessness or expressive depression.
          </p>
          <div className="textarea-field">
            <textarea
              id="emotional_wellbeing"
              name="emotional_wellbeing"
              placeholder="Separate names by comma"
              className="bg-transparent text-sm outline-none focus:outline-none"
              style={{ width: "100%", background: "transparent" }}
            ></textarea>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <p className="whitespace-nowrap text-sm">Weekly Grade</p>
            <div className="input-field w-20">
              <input
                type="text"
                id="emotional_wellbeing_weekly_grade"
                name="emotional_wellbeing_weekly_grade"
                placeholder="Select between 1 and 10"
                className="w-20 bg-transparent outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
              <CiCircleChevDown size={18} />
            </div>
            <FaCircleInfo size={24} />
          </div>
        </div>

        <div className="my-3 flex w-full flex-col items-start">
          <label htmlFor="cooperation" className="label-title">
            Cooperation and Compliance
          </label>
          <p className="mb-3 text-xs">
            Staff guide: Describe here cooking skills and frequency. Nutrition and food purchase. Budgeting allowance
            sensibly.
          </p>
          <div className="textarea-field">
            <textarea
              id="cooperation"
              name="cooperation"
              placeholder="Separate names by comma"
              className="bg-transparent text-sm outline-none focus:outline-none"
              style={{ width: "100%", background: "transparent" }}
            ></textarea>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <p className="whitespace-nowrap text-sm">Weekly Grade</p>
            <div className="input-field w-20">
              <input
                type="text"
                id="cooperation_weekly_grade"
                name="cooperation_weekly_grade"
                placeholder="Select between 1 and 10"
                className="w-20 bg-transparent outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
              <CiCircleChevDown size={18} />
            </div>
            <FaCircleInfo size={24} />
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

export default SkillDevelopment
