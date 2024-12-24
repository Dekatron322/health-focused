"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropleft, IoMdArrowBack, IoMdArrowForward } from "react-icons/io"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import Search from "components/Search/Search"
import CustomDropdown from "components/Search/CustomDropdown"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { CiCircleChevDown } from "react-icons/ci"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Checkbox } from "@mui/material"
import router from "next/router"

// Define the structure of a table row
interface TableRow {
  id: number
  name: string
  placement: string
  date: any
  keyWorker: string
  alertType: string
  status: string
}

export default function Alerts() {
  const [tableData, setTableData] = useState<TableRow[]>([
    {
      id: 1,
      name: "Michael Dre",
      placement: "Info",
      date: "25/06/2001",
      keyWorker: "Adeola Odeku",
      alertType: "Accident",
      status: "String",
    },
    {
      id: 2,
      name: "John Cena",
      placement: "Warning",
      date: "11/03/2004",
      keyWorker: "Adewale Peter",
      alertType: "Incident",
      status: "Pending",
    },
    {
      id: 3,
      name: "Mary Earps",
      placement: "Queen’s Court",
      date: "16/01/2009",
      keyWorker: "Marko Dean",
      alertType: "Missing",
      status: "Resolved",
    },
    {
      id: 4,
      name: "Rivaldo Henry",
      placement: "Love Avenue",
      date: "27/12/2006",
      keyWorker: "Michael Andrews",
      alertType: "Missing",
      status: "Pending",
    },
    {
      id: 5,
      name: "Black Widow",
      placement: "Avenue Lane",
      date: "15/11/2002",
      keyWorker: "Iyanu Iyanu",
      alertType: "Accident",
      status: "Resolved",
    },
    {
      id: 6,
      name: "Alisson Coursera",
      placement: "King’s Street",
      date: "11/05/2008",
      keyWorker: "Maxwell Ings",
      alertType: "Incident",
      status: "Resolved",
    },
    {
      id: 7,
      name: "Maria Maria",
      placement: "Queen’s Court",
      date: "11/09/2009",
      keyWorker: "Loretta James",
      alertType: "Incident",
      status: "Resolved",
    },
    {
      id: 8,
      name: "Helen Aaland",
      placement: "42 Zero Street",
      date: "27/12/2006",
      keyWorker: "Tems Ayra",
      alertType: "Accident",
      status: "Resolved",
    },
    {
      id: 9,
      name: "Riquelme Joan",
      placement: "Mavin Estate",
      date: "27/12/2006",
      keyWorker: "Ireoluwa David",
      alertType: "Accident",
      status: "Resolved",
    },
  ])

  const [filters, setFilters] = useState({
    name: "",
    placement: "",
    date: "",
    keyWorker: "",
    alertType: "",
    status: "",
  })

  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 5

  // Function to extract unique values for dropdowns
  const getUniqueValues = (key: keyof TableRow) => {
    const uniqueValues = Array.from(new Set(tableData.map((row) => row[key])))
    return uniqueValues.map((value) => ({ id: value, name: value }))
  }
  const [isAlertDropdownOpen, setIsAlertDropdownOpen] = useState(false)
  const handleFilterChange = (filterName: keyof typeof filters, selectedValue: string) => {
    setFilters({
      ...filters,
      [filterName]: selectedValue,
    })
  }
  const toggleAlertDropdown = () => {
    setIsAlertDropdownOpen(!isAlertDropdownOpen)
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
      (filters.alertType === "" || row.alertType === filters.alertType) &&
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

  // Function to add a new row
  const addRow = () => {
    // ... (same addRow logic)
  }

  // Function to remove a row
  const removeRow = (id: number) => {
    // ... (same removeRow logic)
  }

  const formOptions = [
    { id: 1, name: "Missing Form", link: "/dashboard/missing" },
    { id: 2, name: "Authorized Absence Form", link: "/dashboard/authorised-absence" },
    { id: 3, name: "Unauthorized Form", link: "/dashboard/unauthorised-absence" },
    { id: 4, name: "Incidence Form", link: "/dashboard/incidence" },
    { id: 5, name: "Accident Form", link: "/dashboard/accident" },
  ]

  const handleFormSelect = (selectedValue: string) => {
    const selectedForm = formOptions.find((option) => option.name === selectedValue)
    if (selectedForm) {
      window.location.href = selectedForm.link
    }
  }

  const handleBackButtonClick = () => {
    router.back()
  }

  return (
    <>
      <section className=" h-full">
        <div className="mx-auto flex min-h-screen bg-[#171818]">
          <div className="flex w-full flex-col">
            <div>
              <DashboardNav />
            </div>
            <div className="my-5 justify-center gap-3  max-md:px-3  md:mt-8 md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className="mb-6 flex flex-col items-center gap-4 rounded-md border-[1px] bg-[#F5F5F5] p-4 md:w-2/3 lg:w-[70%] 2xl:w-2/3">
                <div className="flex w-full justify-between">
                  <div className="flex items-center gap-3">
                    <p className="text-2xl">Alerts</p>
                    <div className="relative">
                      <div
                        onClick={toggleAlertDropdown}
                        className="flex h-10 cursor-pointer items-center gap-6 rounded-md border-[1px] border-[#0085FF] p-2 text-xs"
                      >
                        New Alert
                        <CiCircleChevDown />
                      </div>
                      {isAlertDropdownOpen && (
                        <div className="absolute right-0 z-10 mt-1 w-48 rounded border bg-white shadow-lg">
                          <ul className="py-1">
                            {formOptions.map((option) => (
                              <li
                                key={option.id}
                                className="cursor-pointer whitespace-nowrap px-4 py-2 text-xs hover:bg-gray-100"
                                onClick={() => handleFormSelect(option.name)}
                              >
                                {option.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="max-md:hidden">
                    <Search />
                  </div>
                </div>

                {/* Table */}
                <div className="mt-4 w-full">
                  <div className="mb-4  flex w-full justify-between gap-2">
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
                      className="rounded border bg-white px-4 py-1 text-xs "
                    />

                    <CustomDropdown
                      options={getUniqueValues("keyWorker")}
                      selectedOption={filters.keyWorker}
                      onChange={(value) => handleFilterChange("keyWorker", value)}
                      placeholder="Key Worker"
                    />

                    <CustomDropdown
                      options={getUniqueValues("alertType")}
                      selectedOption={filters.alertType}
                      onChange={(value) => handleFilterChange("alertType", value)}
                      placeholder="Alert Type"
                    />

                    <CustomDropdown
                      options={getUniqueValues("status")}
                      selectedOption={filters.status}
                      onChange={(value) => handleFilterChange("status", value)}
                      placeholder="Status"
                    />
                  </div>
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="p-3 max-md:hidden"></th>
                        <th className="max-lg:text-sm  md:p-3 lg:text-xs xl:text-sm">Service User</th>
                        <th className="max-md:text-sm md:p-3 lg:text-xs xl:text-sm">Placement</th>
                        <th className="p-3 max-md:hidden lg:text-xs xl:text-sm">Date</th>
                        <th className="p-3 max-md:hidden lg:text-xs xl:text-sm">Key Worker</th>
                        <th className="whitespace-nowrap max-md:text-sm md:p-3 lg:text-xs xl:text-sm">Alert Type</th>
                        <th className="p-3 max-md:hidden lg:text-xs xl:text-sm">Status</th>
                        <th className="p-3 lg:text-xs xl:text-sm">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRows.map((row, index) => (
                        <tr key={row.id} className={index % 2 === 0 ? "bg-gray" : "white-bg"}>
                          <td className="p-3 text-sm max-md:hidden">
                            <Checkbox className="checkboxes2" />
                          </td>
                          <td className="p-3 text-sm lg:text-xs xl:text-sm">{row.name}</td>
                          <td className="p-3 text-sm lg:text-xs xl:text-sm">{row.placement}</td>
                          <td className="p-3 text-sm max-md:hidden lg:text-xs xl:text-sm">{row.date}</td>
                          <td className="p-3 text-sm max-md:hidden lg:text-xs xl:text-sm">{row.keyWorker}</td>
                          <td className="p-3 text-sm lg:text-xs xl:text-sm">{row.alertType}</td>
                          <td className="p-3 text-sm max-md:hidden lg:text-xs xl:text-sm">{row.status}</td>
                          <td className="relative cursor-pointer p-3 text-sm">
                            <HiOutlineDotsVertical className="self-center" onClick={() => toggleDropdown(row.id)} />
                            {visibleDropdownId === row.id && (
                              <div className="absolute right-0 z-10 mt-1 w-48 rounded border bg-white shadow-lg">
                                <ul className="py-1">
                                  <li
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 lg:text-xs xl:text-sm"
                                    onClick={() => handleDropdownAction("View", row)}
                                  >
                                    View
                                  </li>
                                  <li
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 lg:text-xs xl:text-sm"
                                    onClick={() => handleDropdownAction("Mark as Resolved", row)}
                                  >
                                    Mark as Resolved
                                  </li>
                                  <li
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 lg:text-xs xl:text-sm"
                                    onClick={() => handleDropdownAction("Mark as Unresolved", row)}
                                  >
                                    Mark as Unresolved
                                  </li>
                                  <li
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 lg:text-xs xl:text-sm"
                                    onClick={() => handleDropdownAction("Mark as Pending", row)}
                                  >
                                    Mark as Pending
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
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  )
}
