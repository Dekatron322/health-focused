"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import Tab from "components/Search/Tab"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function AddServiceUser() {
  // Simulating user account existence with a state
  const [hasTransactions, setHasTransactions] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<string>("section1")

  // Use an array of PreviewFile for files state
  const [files, setFiles] = useState<PreviewFile[]>([])

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "video/*": [],
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": [],
    },
  })

  const router = useRouter()

  const handleBackButtonClick = () => {
    router.back()
  }

  const renderContent = () => {
    switch (activeTab) {
      case "section1":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Name of Service User
              </label>
              <div className="input-field bg-white">
                <input
                  type="text"
                  id="serviceUserName"
                  placeholder="Enter name"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="updatedBy" className="label-title">
                Update by
              </label>
              <div className="input-field w-40 bg-white">
                <input
                  type="text"
                  id="updatedBy"
                  placeholder="Select the Placement "
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <IoIosArrowDropdown size={18} />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                Allocated Keyworker
              </label>
              <div className="input-field w-40 bg-white">
                <input
                  type="text"
                  id="placement"
                  placeholder="Type a name"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Date of Review
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="date"
                    id="staffOnDuty"
                    placeholder="Separate names by comma"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="staffOnDuty" className="label-title">
                  Date of Next Review
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="date"
                    id="staffOnDuty"
                    placeholder="Separate names by comma"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <Link
              href="/dashboard/post/"
              type="button"
              className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
            >
              SAVE AND CONTINUE
            </Link>
          </form>
        )
      case "section2":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Preparation between carer and young person for LAC review:
              </label>
              <p className="mb-3 text-xs">
                Staff guide: What number LAC review will this be? Add confirmation from young person that they
                understand the aim of the LAC review and why they are participating.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                 Progress in placement
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Provide a brief summary of significant milestones, key developments that highlight positive
                progression.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Stability of placement
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Provide a brief summary of key developments that highlight situations that have compromised
                the value of care received. Also include details of situations that threaten the continuation of care or
                barriers to sustainable care within the placement. This should include self - imposed barriers or
                barriers imposed by external factors, issues of concern.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Young person&apos;s thoughts and feedback about their present care provision?
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Please interview the young person to find out what they know about the care expectations
                they are entitled to as provided by the care home.
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                What are the known risks associated with the young person?
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Please list in summary the identified risks the young person is exposed to and what are the
                risks the young person may bring to the other residents at the care home
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Current standard of compliance and cooperation
              </label>
              <p className="mb-3 text-xs">
                Staff guide: Describe the level of cooperation and compliance demonstrated by the young person in terms
                of abiding by the rules of the home and the response to supervised support from duty support workers and
                management. Does the child display a rebellious , non -compliant attitude to staff correction, requests
                or supervision
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>

            <div className="my-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Has the young person gone mission over the last 3 months
              </label>
              <p className="mb-3 text-xs">
                Staff guide: add dates where police or EST was called only. For the dates of missing add date child
                returned
              </p>
              <div className="textarea-field bg-white">
                <textarea
                  id="email"
                  placeholder="Separate names by comma"
                  className="bg-transparent text-sm outline-none focus:outline-none"
                  style={{ width: "100%", background: "transparent" }}
                ></textarea>
              </div>
            </div>
            <Link
              href="/dashboard/post/"
              type="button"
              className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
            >
              SAVE AND CONTINUE
            </Link>
          </form>
        )
      case "section3":
        return (
          <>
            <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  General state of physical health
                </label>
                <p className="mb-3 text-xs">
                  Staff guide: Add details of any incident that has affected the young person&apos;s affect negatively
                  or positively. Are there new developments around an existing medical condition? Also include the
                  health affecting use of any substance abuse, drugs alcohol or excessive smoking. Describe measures
                  taken to counter any form of compromise to the young person&apos;s health. Include details of any
                  developments in an existing health issue or disability.
                </p>
                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Last date of dental Appointment
                  </label>
                  <div className="input-field w-40 bg-white">
                    <input
                      type="date"
                      id="staffOnDuty"
                      placeholder="Separate names by comma"
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Last date of hospital appointment
                  </label>
                  <div className="input-field w-40 bg-white">
                    <input
                      type="date"
                      id="staffOnDuty"
                      placeholder="Separate names by comma"
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Last date of optical appointment
                  </label>
                  <div className="input-field w-40 bg-white">
                    <input
                      type="date"
                      id="staffOnDuty"
                      placeholder="Separate names by comma"
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Emotional Wellbeing
                </label>
                <p className="mb-3 text-xs">
                  Staff guide: Describe in summary the state of the young persons emotional health. How the young person
                  is coping mentally with challenges and difficult situations. Is the young person exhibiting any form
                  of outbursts, symptoms of depression, anxiety, fear or worry? Is the young person showing anger and
                  frustration? Is the young person moody or aggressive? Include any use of medicinal effects, drugs or
                  substance abuse contributing to the emotional imbalance. Is the young person happy and open, also
                  include positive emotional wellbeing.
                </p>
                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Education
                </label>

                <div className="grid w-full grid-cols-4 items-end justify-between gap-2">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title ">
                      Latest PEP Date
                    </label>
                    <div className="input-field w-40 bg-white">
                      <input
                        type="date"
                        id="staffOnDuty"
                        placeholder="Separate names by comma"
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <p className="label-title">Have the PEP targets been reached?</p>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Attended
                    </label>
                    <div className="input-field__sm w-40 bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder=""
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Missed
                    </label>
                    <div className="input-field__sm w-40 bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder=""
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  If no, what are the barriers preventing this?
                </label>
                <p className="mb-3 text-xs">
                  Staff guide: Include self made barriers, external influence or whatever acts as a factor preventing
                  the education/training progress planned for the young person.
                </p>
                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  What actions were taken?
                </label>
                <p className="mb-3 text-xs">
                  Staff guide: Include details of attempts to support the young persons progress in education or
                  qualification based training. What steps have been made to remove barriers preventing the progress of
                  the education plan.
                </p>
                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  If the PEP target were reached, list them
                </label>
                <p className="mb-3 text-xs">
                  Staff guide: list milestones for PEP targets, this would usually be dates for enrolment, progress made
                  to a higher level or class, completion of a course or an aspect of it. Getting a young person to start
                  a course or class attendance where there has been previous resistance.
                </p>
                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="my-3 grid grid-cols-2 gap-2">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Date of last parent evening
                  </label>
                  <div className="input-field w-40 bg-white">
                    <input
                      type="date"
                      id="staffOnDuty"
                      placeholder="Separate names by comma"
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Who attended?
                  </label>
                  <div className="input-field w-40 bg-white">
                    <input
                      type="text"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Education
                </label>

                <div className="flex w-full  items-end justify-between gap-2">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <p className="label-title">
                      Has there been any internal or fixed term exclusions, if &apos;yes&apos; provide date/s and
                      reason/s
                    </p>
                  </div>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Attended
                    </label>
                    <div className="input-field__sm bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder=""
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Missed
                    </label>
                    <div className="input-field__sm w-40 bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder=""
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/dashboard/post/"
                type="button"
                className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
              >
                SAVE AND CONTINUE
              </Link>
            </form>
          </>
        )
      case "section4":
        return (
          <>
            <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
              <p className="mb-4 text-xl">Contact</p>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  What are the contact arrangements and with whom?
                </label>
                <p className="mb-3 text-xs">
                  Staff guide: Please include contact days and hours and who with. Are there any issues around the
                  contact arrangements -restrictions or supervision.
                </p>
                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="mb-3 flex w-full flex-col items-start">
                <p className="mb-4 text-xl">Independent Skills</p>
                <label htmlFor="serviceUserName" className="label-title">
                  Work undertaken with young person in relation to independent skills
                </label>
                <p className="mb-3 text-xs">
                  Staff guide: Please provide details of staff activities to progress independent skills towards agreed
                  targets
                </p>
                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                   Progress being made on independent skills
                </label>
                <p className="mb-3 text-xs">
                  Staff guide: in summary briefly list independent skills showing progress.
                </p>
                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <p className="mb-4 text-xl">Achievables</p>
                <label htmlFor="serviceUserName" className="label-title">
                  Achieved actions from last review
                </label>
                <p className="mb-3 text-xs">
                  Staff guide: in summary briefly list independent skills showing progress.
                </p>
                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>
              <Link
                href="/dashboard/post/"
                type="button"
                className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
              >
                SAVE AND CONTINUE
              </Link>
            </form>
          </>
        )

      case "section5":
        return (
          <>
            <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
              <p className="mb-4 text-xl">Savings</p>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Where we the savings held?
                </label>

                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  How often has money been paid into the account?
                </label>

                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Total amount paid into the account?
                </label>

                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>
              <Link
                href="/dashboard/post/"
                type="button"
                className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
              >
                SAVE AND CONTINUE
              </Link>
            </form>
          </>
        )
      case "section6":
        return (
          <>
            <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
              <div className="my-3 flex w-full flex-col items-start">
                <p className="mb-4 text-xl">Holidays</p>

                <div className="flex w-full  items-end justify-between gap-2">
                  <div className="mb-3 flex w-full flex-col items-start">
                    <p className="label-title">Is the service user booked for a holiday?</p>
                  </div>
                  <div className="mb-3 flex w-full flex-col ">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Attended
                    </label>
                    <div className="input-field__sm w-40 bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder=""
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col ">
                    <label htmlFor="staffOnDuty" className="label-title">
                      Missed
                    </label>
                    <div className="input-field__sm w-40 bg-white">
                      <input
                        type="text"
                        id="staffOnDuty"
                        placeholder=""
                        className="w-40 bg-transparent outline-none focus:outline-none"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                  Holiday destination
                </label>

                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <label htmlFor="serviceUserName" className="label-title">
                   Who with?
                </label>

                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>

              <div className="my-3 grid grid-cols-2 gap-2">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Return Date
                  </label>
                  <div className="input-field w-40 bg-white">
                    <input
                      type="date"
                      id="staffOnDuty"
                      placeholder="Separate names by comma"
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="staffOnDuty" className="label-title">
                    Departure Date
                  </label>
                  <div className="input-field w-40 bg-white">
                    <input
                      type="date"
                      id="staffOnDuty"
                      placeholder=""
                      className="w-40 bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="my-3 flex w-full flex-col items-start">
                <p className="mb-4 text-xl">Supervisors</p>
                <label htmlFor="serviceUserName" className="label-title">
                  Supervising social workers
                </label>

                <div className="textarea-field bg-white">
                  <textarea
                    id="email"
                    placeholder="Separate names by comma"
                    className="bg-transparent text-sm outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  ></textarea>
                </div>
              </div>
              <Link
                href="/dashboard/post/"
                type="button"
                className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
              >
                SAVE AND CONTINUE
              </Link>
            </form>
          </>
        )
      default:
        return null
    }
  }

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen bg-[#171818]">
          <div className="flex w-full  flex-col ">
            <div>
              <DashboardNav />
            </div>
            <div className="justify-center gap-3 max-md:px-3 md:mt-8  md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className=" mb-6 flex flex-col rounded-md   md:w-1/2 lg:w-2/3 2xl:w-1/2">
                <div className="flex w-full items-center justify-between rounded-md bg-white p-4">
                  <p className="font-bold max-md:text-xl">LAC Report</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="mt-3 flex w-full justify-between rounded-t-md bg-white">
                  <Tab label="Section 1" onClick={() => setActiveTab("section1")} active={activeTab === "section1"} />
                  <Tab label="Section 2" onClick={() => setActiveTab("section2")} active={activeTab === "section2"} />
                  <Tab label="Section 3" onClick={() => setActiveTab("section3")} active={activeTab === "section3"} />
                  <Tab label="Section 4" onClick={() => setActiveTab("section4")} active={activeTab === "section4"} />
                  <Tab label="Section 5" onClick={() => setActiveTab("section5")} active={activeTab === "section5"} />
                  <Tab label="Section 6" onClick={() => setActiveTab("section6")} active={activeTab === "section6"} />
                </div>
                {renderContent()}
              </div>
            </div>

            {/* <Footer /> */}
          </div>
        </div>
      </section>
    </>
  )
}
