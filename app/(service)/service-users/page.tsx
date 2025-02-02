"use client"
import { useEffect, useState } from "react"
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

// Define the structure of a service user
interface ServiceUser {
  id: string
  name_of_service_user: string
  placement: string
  placement_start_date: string
  name_of_keyworker: string
  name_of_local_authority: string
  status: string
}

// Define the structure of a table row
interface TableRow {
  id: string
  name: string
  placement: string
  date: string
  keyWorker: string
  localAuthority: string
  status: string
}

export default function ServiceUsers() {
  const [tableData, setTableData] = useState<TableRow[]>([])
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

  // Fetch service users from the API
  useEffect(() => {
    const fetchServiceUsers = async () => {
      try {
        const response = await fetch("https://health-focused.fyber.site/service-user/service-user/")
        if (response.ok) {
          const data = (await response.json()) as ServiceUser[]
          // Map the fetched data to table rows
          const mappedData = data.map((user) => ({
            id: user.id,
            name: user.name_of_service_user,
            placement: user.placement,
            date: user.placement_start_date,
            keyWorker: user.name_of_keyworker,
            localAuthority: user.name_of_local_authority,
            status: user.status ? "Active Service User" : "Inactive Service User",
          }))
          setTableData(mappedData)
        } else {
          console.error("Failed to fetch service users")
        }
      } catch (error) {
        console.error("Error fetching service users:", error)
      }
    }

    fetchServiceUsers()
  }, [])

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

  const [visibleDropdownId, setVisibleDropdownId] = useState<string | null>(null)

  const toggleDropdown = (id: string) => {
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
                  <div className="mb-4 flex justify-between gap-4"></div>
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="p-3 max-md:hidden"></th>
                        <th className="p-3 lg:text-xs xl:text-sm">Service User</th>
                        <th className="p-3 max-md:hidden lg:text-xs xl:text-sm">Placement</th>
                        <th className="p-3 max-md:hidden lg:text-xs xl:text-sm">Date</th>
                        <th className="p-3 max-md:hidden lg:text-xs xl:text-sm">Key Worker</th>
                        <th className="p-3 lg:text-xs xl:text-sm">Local Authority</th>
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
                                  <Link href={`/service-users/user/${row.id}`}>
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
