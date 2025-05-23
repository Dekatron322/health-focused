"use client"
import { useEffect, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import Search from "components/Search/Search"
import CustomDropdown from "components/Search/CustomDropdown"
import { HiOutlineDotsVertical } from "react-icons/hi"
import styles from "../../../components/Dashboard/dashboard.module.css"
import Link from "next/link"
import { IoAddCircleOutline } from "react-icons/io5"
import Staffs from "components/Dashboard/Staff"

// Define the structure of a table row
interface TableRow {
  id: string
  name: string
  email: string
  phone: string
  user_role: string
  placements: { name: string }[]
  permissions: { name: string }[]
}

export default function ServiceUsers() {
  const [tableData, setTableData] = useState<TableRow[]>([])
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    phone: "",
    user_role: "",
    status: "",
  })
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 5

  // Fetch staff data from the API
  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch("https://hf-api.craftandurban.com/staff/staff/")
        const data = (await response.json()) as Array<{
          id: string
          full_name: string
          email: string
          phone: string
          user_role: string
          kplacements: Array<{ name: string }>
          kpermissions: Array<{ name: string }>
        }>

        const formattedData = data.map((staff) => ({
          id: staff.id,
          name: staff.full_name,
          email: staff.email,
          phone: staff.phone,
          user_role: staff.user_role,
          placements: staff.kplacements,
          permissions: staff.kpermissions,
        }))
        setTableData(formattedData)
      } catch (error) {
        console.error("Error fetching staff data:", error)
      }
    }

    fetchStaffData()
  }, [])

  const getUniqueValues = (key: keyof TableRow) => {
    const uniqueValues = Array.from(new Set(tableData.map((row) => row[key])))
    return uniqueValues
      .filter((value) => typeof value === "string") // Ensure the value is a string
      .map((value) => ({ id: value as string, name: value as string }))
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
      (filters.name === "" || row.name.includes(filters.name)) &&
      (filters.email === "" || row.email.includes(filters.email)) &&
      (filters.phone === "" || row.phone.includes(filters.phone)) &&
      (filters.user_role === "" || row.user_role.includes(filters.user_role))
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
              <div className="mt-4 flex w-full gap-4 px-16 max-md:flex-col max-md:px-3 lg:px-8 2xl:px-16">
                <div className={styles.dashboard_body__lhs}>
                  <div className={styles.service_users}>
                    <Staffs />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center gap-3 px-16 max-md:px-3 lg:px-8 2xl:px-16">
              <div className="mb-6 flex w-full flex-col items-center gap-4 rounded-md border-[1px] bg-white p-4">
                <div className="flex w-full justify-between">
                  <div className="flex items-center gap-3">
                    <Link href="/staff/add" className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2">
                      <p className="text-white max-md:px-0">New Staff</p>
                      <IoAddCircleOutline className="text-white" size={20} />
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="max-full max-md:hidden">
                      <Search />
                    </div>

                    <CustomDropdown
                      options={getUniqueValues("user_role")}
                      selectedOption={filters.user_role}
                      onChange={(value) => handleFilterChange("user_role", value)}
                      placeholder="User Role"
                    />
                  </div>
                </div>

                {/* Table */}
                <div className="mt-4 w-full">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="p-3 text-sm max-md:hidden"></th>
                        <th className="p-3 text-sm">Staff Name</th>
                        <th className="p-3 text-sm max-md:hidden">Email</th>
                        <th className="p-3 text-sm max-md:hidden">Phone Number</th>
                        <th className="p-3 text-sm max-md:hidden">Placements</th>
                        <th className="p-3 text-sm">User Role</th>
                        <th className="p-3 text-sm">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRows.map((row, index) => (
                        <tr key={row.id} className={index % 2 === 0 ? "bg-gray" : "white-bg"}>
                          <td className="p-3 text-sm max-md:hidden">
                            <MdCheckBoxOutlineBlank size={18} />
                          </td>
                          <td className="p-3 text-sm">{row.name}</td>
                          <td className="p-3 text-sm max-md:hidden">{row.email}</td>
                          <td className="p-3 text-sm max-md:hidden">{row.phone}</td>
                          <td className="p-3 text-sm max-md:hidden">
                            {row.placements.map((placement) => placement.name).join(", ")}
                          </td>
                          <td className="p-3 text-sm">{row.user_role}</td>
                          <td className="relative cursor-pointer p-3 text-sm">
                            <HiOutlineDotsVertical className="self-center" onClick={() => toggleDropdown(row.id)} />
                            {visibleDropdownId === row.id && (
                              <div className="absolute right-0 z-10 mt-1 w-48 rounded border bg-white shadow-lg">
                                <ul className="py-1">
                                  <Link href={`/staff/profile/${row.id}`}>
                                    <li
                                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                      onClick={() => handleDropdownAction("View", row)}
                                    >
                                      View Profile
                                    </li>
                                  </Link>
                                  <Link href={`/staff/edit/${row.id}`}>
                                    <li
                                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                      onClick={() => handleDropdownAction("Edit", row)}
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
                        currentPage === totalPages ? "inactive cursor-not-allowed" : "active"
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
    </>
  )
}
