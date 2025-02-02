import Link from "next/link"
import React, { useState } from "react"
import { IoIosAddCircleOutline } from "react-icons/io"

const Contact = ({ onSaveAndContinue }: { onSaveAndContinue: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    care_professional_contact: {},
    family_contact: {},
    health_contact: {},
    additional_contacts: "",
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
      <>
        <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6" onSubmit={handleSubmit}>
          <>
            <p className="mt-4">Care Professional Contact</p>
            <p className="mb-4 text-xs">The Manager may give final comments on the accident. </p>
            <form className=" flex w-full flex-col rounded-md border-[1px] border-[#69B7FF] p-4">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Name of Contact
                </label>
                <div className="input-field ">
                  <input
                    type="text"
                    id="serviceUserName"
                    placeholder="Enter name"
                    className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Job Title
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder="job"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Phone Number
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder="enter phone number"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Email
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="email"
                      id="staffOnDuty"
                      placeholder="enter email"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Address
                </label>
                <div className="input-field w-40">
                  <input
                    type="text"
                    id="staffOnDuty"
                    placeholder="Separate names by comma"
                    className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#69B7FF] p-3 text-sm text-white"
            >
              Add Another Contact
              <IoIosAddCircleOutline size={20} />
            </button>
          </>
          <>
            <p className="mt-4">Family Contact</p>
            <p className="mb-4 text-xs">The Manager may give final comments on the accident. </p>
            <form className=" flex w-full flex-col rounded-md border-[1px] border-[#69B7FF] p-4">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Name of Contact
                </label>
                <div className="input-field ">
                  <input
                    type="text"
                    id="serviceUserName"
                    placeholder="Enter name"
                    className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Job Title
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder="job"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Phone Number
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder="enter phone number"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Email
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="email"
                      id="staffOnDuty"
                      placeholder="enter email"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Address
                </label>
                <div className="input-field w-40">
                  <input
                    type="text"
                    id="staffOnDuty"
                    placeholder="Separate names by comma"
                    className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#69B7FF] p-3 text-sm text-white"
            >
              Add Another Contact
              <IoIosAddCircleOutline size={20} />
            </button>
          </>
          <>
            <p className="mt-4">Health Contact</p>
            <p className="mb-4 text-xs">The Manager may give final comments on the accident. </p>
            <form className=" flex w-full flex-col rounded-md border-[1px] border-[#69B7FF] p-4">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Name of Contact
                </label>
                <div className="input-field ">
                  <input
                    type="text"
                    id="serviceUserName"
                    placeholder="Enter name"
                    className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Job Title
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder="job"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Phone Number
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder="enter phone number"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Email
                  </label>
                  <div className="input-field w-40">
                    <input
                      type="email"
                      id="staffOnDuty"
                      placeholder="enter email"
                      className="w-40 bg-transparent text-sm outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Address
                </label>
                <div className="input-field w-40">
                  <input
                    type="text"
                    id="staffOnDuty"
                    placeholder="Separate names by comma"
                    className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#69B7FF] p-3 text-sm text-white"
            >
              Add Another Contact
              <IoIosAddCircleOutline size={20} />
            </button>
          </>

          <div className="my-3 flex w-full flex-col items-start">
            <label htmlFor="email" className="label-title ">
              Additional Contacts
            </label>
            <div className="textarea-field ">
              <textarea
                id="email"
                placeholder="Separate names by comma"
                className="bg-transparent outline-none focus:outline-none lg:text-sm"
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
      </>
    </div>
  )
}

export default Contact
