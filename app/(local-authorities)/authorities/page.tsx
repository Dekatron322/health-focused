"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import Search from "components/Search/Search"
import CustomDropdown from "components/Search/CustomDropdown"
import { HiOutlineDotsVertical } from "react-icons/hi"
import styles from "../../../components/Dashboard/dashboard.module.css"
import Link from "next/link"
import { IoAddCircleOutline } from "react-icons/io5"
import Placements from "components/Dashboard/Placements"
import Staffs from "components/Dashboard/Staff"
import LocalAuthorities from "components/Dashboard/LocalAuthorities"

// Define the structure of a table row
interface TableRow {
  id: number
  name: string
  placement: string
  date: any
  keyWorker: string
  //   localAuthority: string
  status: string
}

export default function ServiceUsers() {
  const [tableData, setTableData] = useState<TableRow[]>([
    {
      id: 1,
      name: "Adeola Odeku",
      placement: "adeola.ode@ymail.com",
      date: "08040303032",
      keyWorker: "2",
      //   localAuthority: "Croydon",
      status: "7",
    },
    {
      id: 2,
      name: "Adewale Peter",
      placement: "adewalepeter@primarycare.com",
      date: "133949392",
      keyWorker: "0",
      //   localAuthority: "Kent",
      status: "10",
    },
    {
      id: 3,
      name: "Marko Dean",
      placement: "marko.dean@primarycare.com",
      date: "304493294",
      keyWorker: "1",
      //   localAuthority: "Kent",
      status: "8",
    },
    {
      id: 4,
      name: "Michael Andrews",
      placement: "michael.andrews@primarycare.com",
      date: "594924943",
      keyWorker: "3",
      //   localAuthority: "Harrington",
      status: "15",
    },
    {
      id: 5,
      name: "Iyanu Iyanu",
      placement: "iyanu.iyanu@primarycare.com",
      date: "558583495",
      keyWorker: "0",
      //   localAuthority: "Buckinghamshire",
      status: "4",
    },
    {
      id: 6,
      name: "Maxwell Ings",
      placement: "maxwell.ings@primarycare.com",
      date: "099334852",
      keyWorker: "5",
      //   localAuthority: "Arlington",
      status: "8",
    },
    {
      id: 7,
      name: "Loretta James",
      placement: "loretta.james@primarycare.com",
      date: "09068482054",
      keyWorker: "1",
      //   localAuthority: "Kent",
      status: "10",
    },
    {
      id: 8,
      name: "Tems Ayra",
      placement: "tems.ayra@primarycare.com",
      date: "095858494",
      keyWorker: "3",
      //   localAuthority: "Croydon",
      status: "15",
    },
    {
      id: 9,
      name: "Ireoluwa David",
      placement: "ireoluwa.david@primarycare.com",
      date: "050558585",
      keyWorker: "2",
      //   localAuthority: "Hounslow",
      status: "7",
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

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen bg-[#171818]">
          <div className="flex w-full flex-col">
            <div>
              <DashboardNav />
              <div className="mt-6 flex w-full gap-4  px-16  max-md:flex-col max-md:px-3 lg:px-8 2xl:px-16">
                <div className={styles.dashboard_body__lhs}>
                  <div className={styles.service_users}>
                    <LocalAuthorities />
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex  flex-row justify-center gap-3 px-16 max-md:px-3 lg:px-8 2xl:px-16">
              <div className="mb-6 flex w-full flex-col items-center gap-4 rounded-md border-[1px] bg-white p-4">
                <div className="flex w-full justify-between">
                  <div className="flex items-center gap-3">
                    <Link href="/authorities/add" className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2">
                      <p className="text-white max-md:px-0">New Local Authority</p>
                      <IoAddCircleOutline className="text-white" size={20} />
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-full max-md:hidden">
                      <Search />
                    </div>

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
                  {/* <div className="mb-4 flex justify-between gap-4">
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
                    <div className="w-full max-md:hidden">
                      <input
                        type="date"
                        name="date"
                        value={filters.date}
                        onChange={(e) => handleFilterChange("date", e.target.value)}
                        className="rounded border px-4 py-2"
                      />
                    </div>
                    <div className="w-full max-md:hidden">
                      <CustomDropdown
                        options={getUniqueValues("keyWorker")}
                        selectedOption={filters.keyWorker}
                        onChange={(value) => handleFilterChange("keyWorker", value)}
                        placeholder="Key Worker"
                      />
                    </div>
                  </div> */}
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="p-3 text-sm max-md:hidden"></th>
                        <th className="p-3 text-sm">Council Name</th>
                        <th className="p-3 text-sm max-md:hidden">Email</th>
                        <th className="p-3 text-sm max-md:hidden">Phone Number</th>
                        <th className="p-3 text-sm">Active Placements</th>
                        <th className="p-3 text-sm max-md:hidden">Total Placements</th>
                        {/* <th className="p-3">Status</th> */}
                        <th className="p-3 text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRows.map((row, index) => (
                        <tr key={row.id} className={index % 2 === 0 ? "bg-gray" : "white-bg"}>
                          <td className="p-3 text-sm max-md:hidden">
                            <MdCheckBoxOutlineBlank size={18} />
                          </td>
                          <td className="p-3 text-sm">{row.name}</td>
                          <td className="p-3 text-sm max-md:hidden">{row.placement}</td>
                          <td className="p-3 text-sm max-md:hidden">{row.date}</td>
                          <td className="p-3 text-sm">{row.keyWorker}</td>

                          <td className="p-3 text-sm max-md:hidden">{row.status}</td>
                          <td className="relative cursor-pointer p-3 text-sm">
                            <HiOutlineDotsVertical className="self-center" onClick={() => toggleDropdown(row.id)} />
                            {visibleDropdownId === row.id && (
                              <div className="absolute right-0 z-10 mt-1 w-48 rounded border bg-white shadow-lg">
                                <ul className="py-1">
                                  <Link href="/authorities/profile/">
                                    <li
                                      className="cursor-pointer px-4 py-2  hover:bg-gray-100"
                                      onClick={() => handleDropdownAction("View", row)}
                                    >
                                      View
                                    </li>
                                  </Link>

                                  <Link href="/authorities/edit/">
                                    <li
                                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                      onClick={() => handleDropdownAction("End Placement", row)}
                                    >
                                      Edit
                                    </li>
                                  </Link>
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
        {/* <Footer /> */}
      </section>
    </>
  )
}
