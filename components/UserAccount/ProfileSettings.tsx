import React, { useState } from "react"
import { Notifications, PaymentLimits, ProfileData, TransactionLimits } from "Utils"
import Image from "next/image"
import { IoAddCircleSharp, IoLaptopOutline } from "react-icons/io5"
import styles from "../../components/Dashboard/dashboard.module.css"
import { IoIosPhonePortrait } from "react-icons/io"
import { FaDropbox, FaFacebookF } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import { MdOutlineInsertLink } from "react-icons/md"
import { BiToggleLeft, BiToggleRight } from "react-icons/bi"
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia"
import Slider from "@mui/material/Slider"

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile") // State to manage active tab
  const [notificationStates, setNotificationStates] = useState(Notifications.map(() => true))

  const handleToggle = (index: number) => {
    setNotificationStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = !newStates[index]
      return newStates
    })
  }
  const renderProfile = () => {
    return (
      <div className=" flex flex-col ">
        {ProfileData.map((profile) => (
          <div key={profile.id}>
            <h4 className="py-4 text-base font-bold">{profile.title}</h4>
            {profile.list.map((item, itemIndex) => (
              <div key={itemIndex} className="py-2">
                <div className="tab-bg flex flex-col rounded-md p-4">
                  {/* Render each item property with labels */}
                  {Object.entries(item).map(([key, value]) => (
                    <div key={key} className="mb-3 flex flex-col">
                      <p className="mr-2 text-[13px]">{getLabel(key)}</p>
                      <p className="text-[13px] font-bold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="mt-4 flex justify-between">
          <button className="w-36 rounded-md bg-blue-700 p-2 text-[13px] font-bold text-white">Update Settings</button>
          <button className="w-36 rounded-md bg-blue-200 p-2 text-[13px] font-bold text-blue-700">Cancel</button>
        </div>
      </div>
    )
  }

  // Function to get labels based on property names
  const getLabel = (key: string) => {
    switch (key) {
      case "name":
        return "Full name"
      case "gender":
        return "Gender"
      case "date_of_birth":
        return "Date of birth"
      case "gmail":
        return "Email address"
      case "phone":
        return "Phone number"
      case "address":
        return "Address"
      default:
        return key
    }
  }

  const renderSecurity = () => {
    return (
      <div className=" flex flex-col ">
        <div>
          <h4 className="py-4 text-base font-bold">Login Details</h4>

          <div className="py-2">
            <div className="tab-bg flex flex-col rounded-md p-4">
              <div className="mb-3 flex flex-col">
                <p className="mr-2 text-[13px]">Current Password</p>
                <p className="text-[13px] font-bold">*****</p>
              </div>
              <div className="mb-3 flex flex-col">
                <p className="mr-2 text-[13px]">Security questions</p>
                <p className="text-[13px] font-bold">Your fathers name</p>
              </div>

              <div className="mb-3 flex flex-col">
                <p className="mr-2 text-[13px]">2-Step verification</p>
                <p className="text-[13px] font-bold">Enabled</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="py-4 text-base font-bold">Security credentials</h4>

          <div className="py-2">
            <div className="tab-bg flex flex-col rounded-md p-4">
              <div className="flex items-center justify-between">
                <div className="mb-3 flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border p-2">
                      <IoLaptopOutline />
                    </div>
                    <div>
                      <p className="mr-2 text-[13px]">Current Password</p>
                      <p className="text-[13px] font-bold">*****</p>
                    </div>
                  </div>
                </div>
                <button className="w-36 rounded-md bg-black p-2 text-[13px] font-bold text-white">
                  Update Settings
                </button>
              </div>
              <div className="mb-3 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="rounded-md border p-2">
                    <IoLaptopOutline />
                  </div>
                  <div>
                    <p className="mr-2 text-[13px]">Security questions</p>
                    <p className="text-[13px] font-bold">Your fathers name</p>
                  </div>
                </div>
              </div>

              <div className="mb-3 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="rounded-md border p-2">
                    <IoIosPhonePortrait />
                  </div>
                  <div>
                    <p className="mr-2 text-[13px]">2-Step verification</p>
                    <p className="text-[13px] font-bold">Enabled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <button className="w-36 rounded-md bg-blue-700 p-2 text-[13px] font-bold text-white">Update Settings</button>
          <button className="w-36 rounded-md bg-blue-200 p-2 text-[13px] font-bold text-blue-700">Cancel</button>
        </div>
      </div>
    )
  }

  const renderSocials = () => {
    return (
      <div className=" flex flex-col ">
        <div>
          <h4 className="py-4 text-base font-bold">Extensions</h4>

          <div className="py-2">
            <div className="tab-bg flex flex-col rounded-md p-4">
              <div className="flex items-center justify-between">
                <div className="mb-3 flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border p-2">
                      <FaDropbox className="text-blue-500" />
                    </div>
                    <div>
                      <p className="mr-2 text-[13px]">Dropbox</p>
                      <p className="text-[13px] font-bold">@whiteui.store</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlineInsertLink />
                  <small className="font-bold">Connect</small>
                </div>
              </div>
              <div className="my-3 flex items-center gap-2">
                <IoAddCircleSharp />
                <p className="mr-2 text-[13px] font-bold">Add more</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="py-4 text-base font-bold">Social Profiles</h4>

          <div className="py-2">
            <div className="tab-bg flex flex-col rounded-md p-4">
              <div className="flex items-center justify-between">
                <div className="mb-3 flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border p-2">
                      <FaFacebookF className="text-blue-500" />
                    </div>
                    <div>
                      <p className="mr-2 text-[13px]">Facebook</p>
                      <p className="text-[13px] font-bold">https://www.facebook.com/whiteui.store</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="mb-3 flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border p-2">
                      <FaXTwitter />
                    </div>
                    <div>
                      <p className="mr-2 text-[13px]">Twitter</p>
                      <p className="text-[13px] font-bold">Not connected</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlineInsertLink />
                  <small className="font-bold">Connect</small>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="mb-3 flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border p-2">
                      <FcGoogle />
                    </div>
                    <div>
                      <p className="mr-2 text-[13px]">Google</p>
                      <p className="text-[13px] font-bold">Not connected</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlineInsertLink />
                  <small className="font-bold">Connect</small>
                </div>
              </div>
              <div className="my-3 flex items-center gap-2">
                <IoAddCircleSharp />
                <p className="mr-2 text-[13px] font-bold">Add more</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <button className="w-36 rounded-md bg-blue-700 p-2 text-[13px] font-bold text-white">Update Settings</button>
          <button className="w-36 rounded-md bg-blue-200 p-2 text-[13px] font-bold text-blue-700">Cancel</button>
        </div>
      </div>
    )
  }

  const renderNotifications = () => {
    return (
      <>
        <h4 className="py-4 text-base font-bold">Notifications</h4>
        <div className="tab-bg flex flex-col rounded-md p-4">
          {Notifications.map((notification, index) => (
            <div key={notification.id}>
              <small>{notification.name}</small>
              <div className="mb-4 flex items-center justify-between">
                {notificationStates[index] ? (
                  <p className="font-bold">{notification.description}</p>
                ) : (
                  <p>{notification.description}</p>
                )}
                <div onClick={() => handleToggle(index)}>
                  {notificationStates[index] ? (
                    <LiaToggleOnSolid className="text-blue-500" />
                  ) : (
                    <LiaToggleOffSolid className="text-red-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <button className="w-36 rounded-md bg-blue-700 p-2 text-[13px] font-bold text-white">Update Settings</button>
          <button className="w-36 rounded-md bg-blue-200 p-2 text-[13px] font-bold text-blue-700">Cancel</button>
        </div>
      </>
    )
  }

  const renderLimits = () => {
    return (
      <>
        <h4 className="py-4 text-base font-bold">Payment Limits</h4>
        <div className="tab-bg flex flex-col rounded-md p-4">
          {PaymentLimits.map((limits, index) => (
            <div key={limits.id}>
              <small>{limits.name}</small>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-bold">{limits.description}</p>
                  <p>
                    {limits.value} USD/ <span className="font-semibold text-blue-500">{limits.limit} USD</span>
                  </p>
                </div>
                <div className=" w-44">
                  <Slider
                    aria-label="Small steps"
                    defaultValue={parseFloat(limits.value)}
                    step={10}
                    marks
                    min={10}
                    max={parseFloat(limits.limit)}
                    valueLabelDisplay="auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4 className="py-4 text-base font-bold">Transaction Limits</h4>
        <div className="tab-bg flex flex-col rounded-md p-4">
          {TransactionLimits.map((limits, index) => (
            <div key={limits.id}>
              <small>{limits.name}</small>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-bold">{limits.description}</p>
                  <p>
                    <span className="font-semibold text-blue-500">{limits.limit} USD</span>
                  </p>
                </div>
                <div className=" w-44">
                  <Slider
                    aria-label="Small steps"
                    defaultValue={parseFloat(limits.value)}
                    step={10}
                    marks
                    min={10}
                    max={parseFloat(limits.limit)}
                    valueLabelDisplay="auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <button className="w-36 rounded-md bg-blue-700 p-2 text-[13px] font-bold text-white">Update Settings</button>
          <button className="w-36 rounded-md bg-blue-200 p-2 text-[13px] font-bold text-blue-700">Cancel</button>
        </div>
      </>
    )
  }

  return (
    <div className="flex w-full flex-col">
      <div className=" mb-8 flex  items-center gap-3 rounded-lg p-1 ">
        {/* Tabs */}
        <button
          className={`${activeTab === "profile" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`${activeTab === "security" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("security")}
        >
          Security
        </button>

        <button
          className={`${activeTab === "socials" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("socials")}
        >
          Social Networks
        </button>

        <button
          className={`${activeTab === "notifications" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>

        <button
          className={`${activeTab === "limits" ? "active-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("limits")}
        >
          Payment Limits
        </button>
      </div>
      {/* Render content based on active tab */}
      {activeTab === "profile" ? renderProfile() : null}
      {activeTab === "security" ? renderSecurity() : null}
      {activeTab === "socials" ? renderSocials() : null}
      {activeTab === "notifications" ? renderNotifications() : null}
      {activeTab === "limits" ? renderLimits() : null}
    </div>
  )
}

export default ProfileSettings
