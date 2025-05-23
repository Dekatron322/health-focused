import React from "react"
import { CiCircleChevDown } from "react-icons/ci"
import { FaCircleInfo } from "react-icons/fa6"

interface GeneralInfoProps {
  onSuccess: () => void // Define onSuccess as a function that returns void
}

const SkillDevelopment2: React.FC<GeneralInfoProps> = ({ onSuccess }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Retrieve the service user ID from local storage
    const serviceUserId = localStorage.getItem("serviceUserId")

    if (!serviceUserId) {
      console.error("Service user ID not found in local storage")
      return
    }

    // Construct the payload using form data
    const payload = {
      title: "Weekly Report", // You can modify this as needed
      social_interation: (e.target as any).socialInteraction.value,
      social_interation_wg: (e.target as any).socialInteractionWg.value,
      physical_health: (e.target as any).physicalHealth.value,
      physical_health_wg: (e.target as any).physicalHealthWg.value,
      local_resource_knowledge: (e.target as any).localResourceKnowledge.value,
      local_resource_knowledge_wg: (e.target as any).localResourceKnowledgeWg.value,
      education: (e.target as any).education.value,
      education_wg: (e.target as any).educationWg.value,
      employment: (e.target as any).employment.value,
      employment_wg: (e.target as any).employmentWg.value,
      status: true,
      pub_date: new Date().toISOString(),
    }

    try {
      const response = await fetch(
        `https://hf-api.craftandurban.com/service-user/add-monthly-report-sd2-to-service-user/${serviceUserId}/`,
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
      onSuccess()
    } catch (error) {
      console.error("Error submitting weekly report:", error)
    }
  }

  return (
    <div>
      <form className="mt-4 flex w-full flex-col rounded-md bg-white p-4" onSubmit={handleSubmit}>
        {/* Social Interaction/Relationships */}
        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="socialInteraction" className="label-title">
            Social Interaction/Relationships
          </label>
          <p className="mb-3 text-xs">
            Staff guide: This personal skill should include regular body hygiene such as showers or a bath. Grooming and
            general care of the body. This also covers weekly laundry and standard of appearance such as state of
            clothing. This section also includes room checks.
          </p>
          <div className="textarea-field">
            <textarea
              id="socialInteraction"
              name="socialInteraction"
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
                id="socialInteractionWg"
                name="socialInteractionWg"
                placeholder="Select between 1 and 10"
                className="w-20 bg-transparent outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
              <CiCircleChevDown size={18} />
            </div>
            <FaCircleInfo size={24} />
          </div>
        </div>

        {/* Physical Health */}
        <div className="my-3 flex w-full flex-col items-start">
          <label htmlFor="physicalHealth" className="label-title">
            Physical Health
          </label>
          <p className="mb-3 text-xs">
            Staff guide: Describe here cooking skills and frequency. Nutrition and food purchase. Budgeting allowance
            sensibly.
          </p>
          <div className="textarea-field">
            <textarea
              id="physicalHealth"
              name="physicalHealth"
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
                id="physicalHealthWg"
                name="physicalHealthWg"
                placeholder="Select between 1 and 10"
                className="w-20 bg-transparent outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
              <CiCircleChevDown size={18} />
            </div>
            <FaCircleInfo size={24} />
          </div>
        </div>

        {/* Knowledge of Local Resources */}
        <div className="my-3 flex w-full flex-col items-start">
          <label htmlFor="localResourceKnowledge" className="label-title">
            Knowledge of Local Resources
          </label>
          <div className="textarea-field">
            <textarea
              id="localResourceKnowledge"
              name="localResourceKnowledge"
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
                id="localResourceKnowledgeWg"
                name="localResourceKnowledgeWg"
                placeholder="Select between 1 and 10"
                className="w-20 bg-transparent outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
              <CiCircleChevDown size={18} />
            </div>
            <FaCircleInfo size={24} />
          </div>
        </div>

        {/* Education/Training */}
        <div className="my-3 flex w-full flex-col items-start">
          <label htmlFor="education" className="label-title">
            Education/Training
          </label>
          <p className="mb-3 text-xs">
            Staff guide: Describe here the current emotions and feelings of the child. Are they exhibiting low moods? Is
            their emotional state interfering with routine weekly activities such as attending classes, engaging with
            staff and other residents, attitude to support sleepless nights, restlessness or expressive depression.
          </p>
          <div className="textarea-field">
            <textarea
              id="education"
              name="education"
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
                id="educationWg"
                name="educationWg"
                placeholder="Select between 1 and 10"
                className="w-20 bg-transparent outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
              <CiCircleChevDown size={18} />
            </div>
            <FaCircleInfo size={24} />
          </div>
        </div>

        {/* Employment */}
        <div className="my-3 flex w-full flex-col items-start">
          <label htmlFor="employment" className="label-title">
            Employment
          </label>
          <p className="mb-3 text-xs">
            Staff guide: Describe here cooking skills and frequency. Nutrition and food purchase. Budgeting allowance
            sensibly.
          </p>
          <div className="textarea-field">
            <textarea
              id="employment"
              name="employment"
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
                id="employmentWg"
                name="employmentWg"
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

export default SkillDevelopment2
