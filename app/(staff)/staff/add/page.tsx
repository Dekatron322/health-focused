"use client"
import { useEffect, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"
import { useDropzone } from "react-dropzone"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import Tab from "components/Search/Tab"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function AddStaff() {
  const [activeTab, setActiveTab] = useState<string>("general-info")
  const [staffId, setStaffId] = useState<string | null>(null)
  const [files, setFiles] = useState<PreviewFile[]>([])
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    user_role: "",
    username: "",
    password: "",
  })
  const [permissions, setPermissions] = useState<string[]>([])
  const [allocations, setAllocations] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false) // Loading state to disable the button

  const router = useRouter()

  useEffect(() => {
    const storedStaffId = localStorage.getItem("staffId")
    if (storedStaffId) {
      setStaffId(storedStaffId)
    }
  }, [])

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

  const handleBackButtonClick = () => {
    router.back()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handlePermissionChange = (permission: string) => {
    setPermissions((prev) => (prev.includes(permission) ? prev.filter((p) => p !== permission) : [...prev, permission]))
  }

  const handleAllocationChange = (allocation: string) => {
    setAllocations((prev) => (prev.includes(allocation) ? prev.filter((a) => a !== allocation) : [...prev, allocation]))
  }

  const handleSaveAndContinue = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true) // Disable the button

    try {
      if (activeTab === "general-info") {
        // Create staff
        const response = await fetch("https://health-focused.fyber.site/staff/staff/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            status: true,
            pub_date: new Date().toISOString(),
          }),
        })

        const data = (await response.json()) as any
        if (data.id) {
          localStorage.setItem("staffId", data.id)
          setStaffId(data.id)
          setActiveTab("risk-to-self")
        }
      } else if (activeTab === "risk-to-self" && staffId) {
        // Add permissions individually
        for (const permission of permissions) {
          await fetch(`https://health-focused.fyber.site/staff/add-permission-to-staff/${staffId}/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: permission,
              status: true,
              pub_date: new Date().toISOString(),
            }),
          })
        }

        setActiveTab("risk-to-others")
      } else if (activeTab === "risk-to-others" && staffId) {
        // Add allocations individually
        for (const allocation of allocations) {
          await fetch(`https://health-focused.fyber.site/staff/add-placement-to-staff/${staffId}/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: allocation,
              status: true,
              pub_date: new Date().toISOString(),
            }),
          })
        }

        // Clear local storage after all steps are done
        localStorage.removeItem("staffId")
        setStaffId(null)
        alert("Staff created successfully!")
        router.push("/staff") // Redirect to dashboard or another page
      }
    } catch (error) {
      console.error("Error during form submission:", error)
    } finally {
      setLoading(false) // Re-enable the button
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "general-info":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6" onSubmit={handleSaveAndContinue}>
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="full_name" className="label-title">
                Staff’s Full Name
              </label>
              <div className="input-field bg-white">
                <input
                  type="text"
                  id="full_name"
                  placeholder="Enter name"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                  value={formData.full_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="email" className="label-title">
                Staff Email
              </label>
              <div className="input-field w-40 bg-white">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="phone" className="label-title">
                  Phone Number
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="text"
                    id="phone"
                    placeholder="Type number"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="user_role" className="label-title">
                  User Role
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="text"
                    id="user_role"
                    placeholder="Select app role"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                    value={formData.user_role}
                    onChange={handleInputChange}
                    required
                  />
                  <IoIosArrowDropdown size={18} />
                </div>
              </div>

              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="username" className="label-title">
                  Username
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="text"
                    id="username"
                    placeholder="Username to login to the app"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="password" className="label-title">
                  Password
                </label>
                <div className="input-field w-40 bg-white">
                  <input
                    type="password"
                    id="password"
                    placeholder="Please type a password"
                    className="w-40 bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Processing..." : "SAVE AND CONTINUE"}
            </button>
          </form>
        )

      case "risk-to-self":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6" onSubmit={handleSaveAndContinue}>
            <div className="mb-3 flex w-full flex-col items-end">
              <p className="text-end">Tick which applies</p>
            </div>

            {[
              "Profile",
              "Daily logs",
              "Weekly and Monthly Reports",
              "Units",
              "Care/support plans",
              "Lac reports and notes",
              "Local Authorities",
              "Risk assessment",
              "Alerts - Incident, Missing, Absent, Accident",
              "Staff Management",
              "Email Settings",
              "Appointments",
              "User Management",
              "PEP Plan/Report",
              "Admin Centre",
              "Independent Living Skill Inventory",
              "Keywork Activity Planner",
            ].map((permission) => (
              <div key={permission} className="mb-3 flex w-full justify-between">
                <p className="text-sm">{permission}</p>
                <div className="w-20">
                  <input
                    type="checkbox"
                    id={permission}
                    checked={permissions.includes(permission)}
                    onChange={() => handlePermissionChange(permission)}
                  />
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Processing..." : "SAVE AND CONTINUE"}
            </button>
          </form>
        )

      case "risk-to-others":
        return (
          <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6" onSubmit={handleSaveAndContinue}>
            <div className="mb-3 flex w-full justify-end gap-2">
              <MdOutlineCheckBoxOutlineBlank size={24} />
              <p className="text-end">Assign</p>
            </div>

            {["London", "Manchester", "King’s Landing", "River Couts", "Magic Gardens"].map((allocation) => (
              <div key={allocation} className="mb-3 flex w-full justify-between">
                <p className="text-sm">{allocation}</p>
                <div className="w-20">
                  <input
                    type="checkbox"
                    id={allocation}
                    checked={allocations.includes(allocation)}
                    onChange={() => handleAllocationChange(allocation)}
                  />
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Processing..." : "SAVE AND CONTINUE"}
            </button>
          </form>
        )

      default:
        return null
    }
  }

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen bg-[#171818]">
          <div className="flex w-full flex-col">
            <div>
              <DashboardNav />
            </div>
            <div className="justify-center gap-3 max-md:px-3 md:mt-8 md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className="mb-6 flex flex-col md:w-1/3 lg:w-1/2 2xl:w-1/3">
                <div className="flex w-full justify-between rounded-md bg-white p-4">
                  <p className="text-lg font-semibold">New Staff</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="mt-4 flex w-full justify-between rounded-t-md bg-white">
                  <Tab label="Bio" onClick={() => setActiveTab("general-info")} active={activeTab === "general-info"} />
                  <Tab
                    label="Permission"
                    onClick={() => setActiveTab("risk-to-self")}
                    active={activeTab === "risk-to-self"}
                  />
                  <Tab
                    label="Placement Allocation"
                    onClick={() => setActiveTab("risk-to-others")}
                    active={activeTab === "risk-to-others"}
                  />
                </div>
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
