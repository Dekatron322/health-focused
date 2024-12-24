"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io"
import Search from "components/Search/Search"
import CustomDropdown from "components/Search/CustomDropdown"
import { HiOutlineDotsVertical } from "react-icons/hi"
import styles from "../../../components/Dashboard/dashboard.module.css"
import Services from "components/Dashboard/ServiceUsers"
import Link from "next/link"
import { IoAddCircleOutline } from "react-icons/io5"
import { Checkbox } from "@mui/material"

// Define the structure of a table row
interface TableRow {
  id: number
  name: string
  placement: string
  date: any
  keyWorker: string
  localAuthority: string
  status: string
}

export default function ServiceUsers() {
  const [tableData, setTableData] = useState<TableRow[]>([
    {
      id: 1,
      name: "Michael Dre",
      placement: "King’s Street",
      date: "25/06/2001",
      keyWorker: "Adeola Odeku",
      localAuthority: "Croydon",
      status: "Active Service User",
    },
    {
      id: 2,
      name: "John Cena",
      placement: "24 Madrid Road",
      date: "11/03/2004",
      keyWorker: "Adewale Peter",
      localAuthority: "Kent",
      status: "Inactive Service User",
    },
    {
      id: 3,
      name: "Mary Earps",
      placement: "Queen’s Court",
      date: "16/01/2009",
      keyWorker: "Marko Dean",
      localAuthority: "Kent",
      status: "Active Service User",
    },
    {
      id: 4,
      name: "Rivaldo Henry",
      placement: "Love Avenue",
      date: "27/12/2006",
      keyWorker: "Michael Andrews",
      localAuthority: "Harrington",
      status: "Active Service User",
    },
    {
      id: 5,
      name: "Black Widow",
      placement: "Avenue Lane",
      date: "15/11/2002",
      keyWorker: "Iyanu Iyanu",
      localAuthority: "Buckinghamshire",
      status: "Active Service User",
    },
    {
      id: 6,
      name: "Alisson Coursera",
      placement: "King’s Street",
      date: "11/05/2008",
      keyWorker: "Maxwell Ings",
      localAuthority: "Arlington",
      status: "Inactive Service User",
    },
    {
      id: 7,
      name: "Maria Maria",
      placement: "Queen’s Court",
      date: "11/09/2009",
      keyWorker: "Loretta James",
      localAuthority: "Kent",
      status: "Active Service User",
    },
    {
      id: 8,
      name: "Helen Aaland",
      placement: "42 Zero Street",
      date: "27/12/2006",
      keyWorker: "Tems Ayra",
      localAuthority: "Croydon",
      status: "Active Service User",
    },
    {
      id: 9,
      name: "Riquelme Joan",
      placement: "Mavin Estate",
      date: "27/12/2006",
      keyWorker: "Ireoluwa David",
      localAuthority: "Hounslow",
      status: "Active Service User",
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
      (filters.localAuthority === "" || row.localAuthority === filters.localAuthority) &&
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
            </div>

            <div className="mt-4 flex w-full gap-4 px-16 max-md:flex-col max-md:px-3 lg:px-8  2xl:px-16 ">
              <div className={styles.dashboard_body__lhs}>
                <div className={styles.service_users}>
                  <Services />
                </div>
              </div>
            </div>

            <div className=" flex  flex-row justify-center gap-3 px-16 max-md:px-3 lg:px-8 2xl:px-16  ">
              <div className="mb-6 flex w-full flex-col items-center gap-4 rounded-md border-[1px] bg-[#F5F5F5] p-4">
                <div className="flex w-full justify-between">
                  <div className="flex items-center gap-3">
                    <Link
                      href="/service-users/add"
                      className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2"
                    >
                      <p className="text-white max-md:px-0">New Service Users</p>
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
                  <div className="mb-4 flex justify-between gap-4">
                    {/* <CustomDropdown
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
                      className="rounded bg-white px-4 text-sm text-black max-md:hidden"
                    />

                    <div className="w-full max-md:hidden">
                      <CustomDropdown
                        options={getUniqueValues("keyWorker")}
                        selectedOption={filters.keyWorker}
                        onChange={(value) => handleFilterChange("keyWorker", value)}
                        placeholder="Key Worker"
                      />
                    </div>
                    <CustomDropdown
                      options={getUniqueValues("localAuthority")}
                      selectedOption={filters.localAuthority}
                      onChange={(value) => handleFilterChange("localAuthority", value)}
                      placeholder="Alert Type"
                    /> */}
                  </div>
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="p-3 max-md:hidden"></th>
                        <th className="p-3 lg:text-xs xl:text-sm">Service User</th>
                        <th className="p-3 max-md:hidden lg:text-xs xl:text-sm">Placement</th>
                        <th className="p-3 max-md:hidden lg:text-xs xl:text-sm">Date</th>
                        <th className="p-3 max-md:hidden lg:text-xs xl:text-sm">Key Worker</th>
                        <th className="p-3 lg:text-xs xl:text-sm">Alert Type</th>
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
                          <td className="p-3 text-sm max-md:hidden lg:text-xs xl:text-sm">{row.placement}</td>
                          <td className="p-3 text-sm max-md:hidden lg:text-xs xl:text-sm">{row.date}</td>
                          <td className="p-3 text-sm max-md:hidden lg:text-xs xl:text-sm">{row.keyWorker}</td>
                          <td className="p-3 text-sm lg:text-xs xl:text-sm">{row.localAuthority}</td>
                          <td className="p-3 text-sm max-md:hidden lg:text-xs xl:text-sm">{row.status}</td>
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
                                  {row.status === "Active Service User" && (
                                    <li
                                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                      onClick={() => handleDropdownAction("End Placement", row)}
                                    >
                                      End Placement
                                    </li>
                                  )}
                                  {row.status === "Inactive Service User" && (
                                    <li
                                      className="cursor-pointer whitespace-nowrap px-4 py-2 hover:bg-gray-100"
                                      onClick={() => handleDropdownAction("Reactivate Service User", row)}
                                    >
                                      Reactivate Service User
                                    </li>
                                  )}
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