"use client"
import { useState, SetStateAction } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import {
  IoIosArrowDropleft,
  IoIosArrowDropdown,
  IoIosAddCircleOutline,
  IoMdArrowBack,
  IoMdArrowForward,
} from "react-icons/io"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useDropzone, FileRejection } from "react-dropzone"
import { FaCloudArrowUp } from "react-icons/fa6"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import Tab from "components/Search/Tab"
import CustomDropdown from "components/Search/CustomDropdown"
import { IoAddCircleOutline } from "react-icons/io5"
import Search from "components/Search/Search"
import { HiOutlineDotsVertical } from "react-icons/hi"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

interface TableRow {
  id: number
  name: string
  placement: string
  date: any
  keyWorker: string
  //   localAuthority: string
  status: string
}

export default function AddServiceUser() {
  // Simulating user account existence with a state
  const [hasTransactions, setHasTransactions] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<string>("general-info")

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

  const [tableData, setTableData] = useState<TableRow[]>([
    {
      id: 1,
      name: "King’s Street",
      placement: "SW1A 2AA",
      date: "5",
      keyWorker: "4",
      //   localAuthority: "Croydon",
      status: "Croydon",
    },
    {
      id: 2,
      name: "24 Madrid Road",
      placement: "W1A 0AX",
      date: "3",
      keyWorker: "1",
      //   localAuthority: "Kent",
      status: "Kent",
    },
    {
      id: 3,
      name: "Queen’s Court",
      placement: "B33 8TH",
      date: "2",
      keyWorker: "1",
      //   localAuthority: "Kent",
      status: "Kent",
    },
    {
      id: 4,
      name: "Love Avenue",
      placement: "DN55 1PT",
      date: "7",
      keyWorker: "3",
      //   localAuthority: "Harrington",
      status: "Harrington",
    },
    {
      id: 5,
      name: "Avenue Lane",
      placement: "EC1A 1BB",
      date: "8",
      keyWorker: "2",
      //   localAuthority: "Buckinghamshire",
      status: "Arlington",
    },
    {
      id: 6,
      name: "King’s Street",
      placement: "BBND 1ZZ",
      date: "6",
      keyWorker: "2",
      //   localAuthority: "Arlington",
      status: "Kent",
    },
    {
      id: 7,
      name: "Queen’s Court",
      placement: "BX1 1LT",
      date: "3",
      keyWorker: "1",
      //   localAuthority: "Kent",
      status: "Croydon",
    },
    {
      id: 8,
      name: "42 Zero Street",
      placement: "CV35 0DB",
      date: "4",
      keyWorker: "3",
      //   localAuthority: "Croydon",
      status: "Hounslow",
    },
    {
      id: 9,
      name: "Mavin Estate",
      placement: "DH98 1BT",
      date: "5",
      keyWorker: "3",
      //   localAuthority: "Hounslow",
      status: "Buckinghamshire",
    },
  ])

  const [filters, setFilters] = useState({
    name: "",
    placement: "",
    date: "",
    keyWorker: "",
    localAuthority: "",
    status: "",
  })

  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 5

  // Function to go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Function to go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Function to extract unique values for dropdowns
  const getUniqueValues = (key: keyof TableRow) => {
    const uniqueValues = Array.from(new Set(tableData.map((row) => row[key])))
    return uniqueValues.map((value) => ({ id: value, name: value }))
  }

  const handleFilterChange = (filterName: keyof typeof filters, selectedValue: string) => {
    setFilters({
      ...filters,
      [filterName]: selectedValue,
    })
  }

  const handleDropdownAction = (action: string, row: TableRow) => {
    console.log(`${action} selected for`, row)
    // Implement your logic for each action
  }
  const [visibleDropdownId, setVisibleDropdownId] = useState<number | null>(null)

  const toggleDropdown = (id: number) => {
    setVisibleDropdownId(visibleDropdownId === id ? null : id)
  }

  const filteredData = tableData.filter((row) => {
    return (
      (filters.name === "" || row.name === filters.name) &&
      (filters.placement === "" || row.placement === filters.placement) &&
      (filters.date === "" || row.date.includes(filters.date)) &&
      (filters.keyWorker === "" || row.keyWorker === filters.keyWorker) &&
      (filters.status === "" || row.status === filters.status)
    )
  })

  // Pagination calculations
  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow)
  const totalPages = Math.ceil(filteredData.length / rowsPerPage)

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const renderContent = () => {
    switch (activeTab) {
      case "general-info":
        return (
          <form className="mt-4 flex w-full flex-col ">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Name
              </label>
              <div className="input-field ">
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
              <label htmlFor="placement" className="label-title">
                Organisation Name
              </label>
              <div className="input-field w-40">
                <input
                  type="text"
                  id="placement"
                  placeholder="Type a name"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="updatedBy" className="label-title">
                Email
              </label>
              <div className="input-field w-40">
                <input
                  type="email"
                  id="updatedBy"
                  placeholder="Select the Placement "
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className=" flex w-full flex-col items-start">
              <label htmlFor="addMedia" className="label-title ">
                Profile Image
              </label>
              <div
                {...getRootProps({
                  className:
                    "flex w-full flex-col items-center justify-center rounded-xl border-[1px] py-4 cursor-pointer",
                })}
              >
                <input {...getInputProps()} />
                <FaCloudArrowUp className="text-3xl" />
                <p className="text-sm">Drag and Drop files here or Browse</p>
                <p className="text-xs">Supported files are JPG, PNG, MP4, PDF, DOC, XLXS, PPTX</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {files.map((file) => (
                  <div key={file.name} className="relative h-20 w-20">
                    <img src={file.preview} alt={file.name} className="h-full w-full rounded object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </form>
        )
      case "bio":
        return (
          <form className="mt-4 flex w-full flex-col ">
            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="serviceUserName" className="label-title">
                Current Password
              </label>
              <div className="input-field ">
                <input
                  type="password"
                  id="serviceUserName"
                  placeholder="*************"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="placement" className="label-title">
                New Password
              </label>
              <div className="input-field w-40">
                <input
                  type="password"
                  id="placement"
                  placeholder="**************"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="mb-3 flex w-full flex-col items-start">
              <label htmlFor="staffOnDuty" className="label-title">
                Confirm Password
              </label>
              <div className="input-field w-40">
                <input
                  type="password"
                  id="staffOnDuty"
                  placeholder="**************"
                  className="w-40 bg-transparent outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </form>
        )
      case "contacts":
        return (
          <>
            <>
              <div className="mt-3 flex w-full flex-col rounded-md border-[1px] border-[#69B7FF] p-4">
                <p className="font-bold">Plan</p>
                <p className="mb-4 text-xs">Change your plan, update your billing info, and download your invoices</p>
                <p className="mb-4 text-xs">
                  You are currently on the{" "}
                  <a className="font-semibold underline" href="#">
                    Premium subscription
                  </a>
                </p>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#0085FF] p-3 text-sm text-white"
                  >
                    CHANGE PLAN
                  </button>

                  <button
                    type="submit"
                    className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#0085FF] p-3 text-sm text-white"
                  >
                    CANCEL PLAN
                  </button>
                </div>
              </div>
            </>
            <div className="mt-3">
              <div className=" flex w-full flex-col rounded-md border-[1px] border-[#69B7FF] p-4">
                <p className="font-bold">Billing Details</p>
                <p className="mb-4 text-xs">Your next invoice is for GBP 352.80 on Jul 5, 2024, 10:30 GMT+1</p>
                <p className="text-sm font-bold">Name</p>
                <p className="mb-3 text-sm">Adeola Odeku</p>

                <p className="text-sm font-bold">Email Address:</p>
                <p className="mb-3 text-sm">adeola.odeku@primarycare.com</p>

                <p className="text-sm font-bold">Address:</p>
                <p className="mb-3 text-sm">Freedom Way, London, England FW5 789, United Kingdom</p>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#0085FF] p-3 text-sm text-white"
                  >
                    CHANGE BILLING ADDRESS
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className=" flex w-full flex-col rounded-md border-[1px] border-[#69B7FF] p-4">
                <p className="font-bold">Payment</p>
                <p className="mb-4 text-xs">Your next invoice is for GBP 352.80 on Jul 5, 2024, 10:30 GMT+1</p>
                <p className="text-sm font-bold">
                  Card Details: <span className="font-normal">mastercard with last 4 digits - 1234</span>
                </p>
                <p className="text-sm font-bold">
                  Name on Card: <span className="font-normal">Adrian Mutu</span>
                </p>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#0085FF] p-3 text-sm text-white"
                  >
                    CHANGE BILLING ADDRESS
                  </button>
                </div>
              </div>
            </div>
          </>
        )
      case "others":
        return (
          <div className=" flex  flex-row justify-center gap-3 py-3">
            <div className="mb-6 flex w-full flex-col items-center gap-4 rounded-md border-[1px] p-4">
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-3">
                  <Link href="/placement/add" className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2">
                    <p className="text-white max-md:px-0">New Placements</p>
                    <IoAddCircleOutline className="text-white" size={20} />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Search />

                  <CustomDropdown
                    options={getUniqueValues("status")}
                    selectedOption={filters.status}
                    onChange={(value) => handleFilterChange("status", value)}
                    placeholder="Service Users"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="mt-4 w-full">
                <div className="mb-4 flex justify-between gap-4">
                  <CustomDropdown
                    options={getUniqueValues("name")}
                    selectedOption={filters.name}
                    onChange={(value) => handleFilterChange("name", value)}
                    placeholder="Service User"
                  />
                  <CustomDropdown
                    options={getUniqueValues("placement")}
                    selectedOption={filters.placement}
                    onChange={(value) => handleFilterChange("placement", value)}
                    placeholder="Placement"
                  />
                  <input
                    type="date"
                    name="date"
                    value={filters.date}
                    onChange={(e) => handleFilterChange("date", e.target.value)}
                    className="rounded border px-4 py-2"
                  />
                  <CustomDropdown
                    options={getUniqueValues("keyWorker")}
                    selectedOption={filters.keyWorker}
                    onChange={(value) => handleFilterChange("keyWorker", value)}
                    placeholder="Key Worker"
                  />
                </div>
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr>
                      <th className="p-3"></th>
                      <th className="p-3">Name of Placement</th>
                      <th className="p-3">Postcode</th>
                      <th className="p-3">Number of Rooms</th>
                      <th className="p-3">Active Service Users</th>
                      <th className="p-3">Location</th>
                      {/* <th className="p-3">Status</th> */}
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRows.map((row, index) => (
                      <tr key={row.id} className={index % 2 === 0 ? "bg-gray" : "white-bg"}>
                        <td className="p-3 text-sm">
                          <MdCheckBoxOutlineBlank size={18} />
                        </td>
                        <td className="p-3 text-sm">{row.name}</td>
                        <td className="p-3 text-sm">{row.placement}</td>
                        <td className="p-3 text-sm">{row.date}</td>
                        <td className="p-3 text-sm">{row.keyWorker}</td>

                        <td className="p-3 text-sm">{row.status}</td>
                        <td className="relative cursor-pointer p-3 text-sm">
                          <HiOutlineDotsVertical className="self-center" onClick={() => toggleDropdown(row.id)} />
                          {visibleDropdownId === row.id && (
                            <div className="absolute right-0 z-10 mt-1 w-48 rounded border bg-white shadow-lg">
                              <ul className="py-1">
                                <Link href="/service-users/user/">
                                  <li
                                    className="cursor-pointer px-4 py-2  hover:bg-gray-100"
                                    onClick={() => handleDropdownAction("View", row)}
                                  >
                                    View Profile
                                  </li>
                                </Link>

                                <li
                                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                  onClick={() => handleDropdownAction("End Placement", row)}
                                >
                                  Edit
                                </li>
                              </ul>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <button
                    className={`flex items-center justify-center gap-3 rounded p-2 ${
                      currentPage === 1 ? "inactive cursor-not-allowed" : "active hover:bg-gray-400"
                    }`}
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    <IoMdArrowBack />
                    Previous
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`rounded-md px-4 py-2 ${currentPage === i + 1 ? "active text-white" : "inactive"}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    className={`flex items-center justify-center gap-4 rounded p-2 ${
                      currentPage === totalPages ? "inactive cursor-not-allowed" : "active "
                    }`}
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <IoMdArrowForward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            <div>
              <DashboardNav />
            </div>
            <div className="mt-8 flex flex-row  justify-center gap-3">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                GO BACK
              </button>
              <div className=" mb-6 flex w-3/4  flex-col rounded-md border-[1px] p-4">
                <div className="flex w-full justify-between">
                  <p className="text-2xl">New Service User</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <div className="flex w-full justify-between">
                  <Tab
                    label="Profile"
                    onClick={() => setActiveTab("general-info")}
                    active={activeTab === "general-info"}
                  />
                  <Tab label="Change Passwords" onClick={() => setActiveTab("bio")} active={activeTab === "bio"} />
                  <Tab label="Bills" onClick={() => setActiveTab("contacts")} active={activeTab === "contacts"} />
                  <Tab label="Payment History" onClick={() => setActiveTab("others")} active={activeTab === "others"} />
                </div>
                {renderContent()}
                <Link
                  href="/dashboard/post/"
                  type="button"
                  className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
                >
                  SAVE AND CONTINUE
                </Link>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
