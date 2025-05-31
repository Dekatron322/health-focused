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
import LocalAuthorities from "components/Dashboard/LocalAuthorities"

interface Placement {
  id: string
  name: string
  locaton: string
  post_code: string
  bedrooms: string
  addition_info: string
  status: boolean
  pub_date: string
}

interface LocalAuthority {
  id: string
  placements: Placement[]
  name: string
  email: string
  phone: string
  bedrooms: string
  file: string
  status: boolean
  pub_date: string
}

export default function ServiceUsers() {
  const [localAuthorities, setLocalAuthorities] = useState<LocalAuthority[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [filters, setFilters] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
  })

  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 5

  useEffect(() => {
    const fetchLocalAuthorities = async () => {
      try {
        const response = await fetch("https://hf-api.craftandurban.com/local-authority/local-authority/")
        if (!response.ok) {
          throw new Error("Failed to fetch local authorities")
        }
        const data = await response.json()
        setLocalAuthorities(data as any)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchLocalAuthorities()
  }, [])

  const getUniqueValues = (key: keyof LocalAuthority) => {
    const uniqueValues = Array.from(new Set(localAuthorities.map((item) => item[key])))
    return uniqueValues.map((value) => ({ id: value, name: value }))
  }

  const handleFilterChange = (filterName: keyof typeof filters, selectedValue: string) => {
    setFilters({
      ...filters,
      [filterName]: selectedValue,
    })
  }

  const handleDropdownAction = (action: string, row: LocalAuthority) => {
    console.log(`${action} selected for`, row)
  }

  const [visibleDropdownId, setVisibleDropdownId] = useState<string | null>(null)

  const toggleDropdown = (id: string) => {
    setVisibleDropdownId(visibleDropdownId === id ? null : id)
  }

  const filteredData = localAuthorities.filter((item) => {
    return (
      (filters.name === "" || item.name.includes(filters.name)) &&
      (filters.email === "" || item.email.includes(filters.email)) &&
      (filters.phone === "" || item.phone.includes(filters.phone)) &&
      (filters.status === "" || item.status.toString() === filters.status)
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

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
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
                      options={[
                        { id: "true", name: "Active" },
                        { id: "false", name: "Inactive" },
                      ]}
                      selectedOption={filters.status}
                      onChange={(value) => handleFilterChange("status", value)}
                      placeholder="Filter by status"
                    />
                  </div>
                </div>

                {/* Table */}
                <div className="mt-4 w-full">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="p-3 text-sm max-md:hidden"></th>
                        <th className="p-3 text-sm">Council Name</th>
                        <th className="p-3 text-sm max-md:hidden">Email</th>
                        <th className="p-3 text-sm max-md:hidden">Phone Number</th>
                        <th className="p-3 text-sm">Active Placements</th>
                        <th className="p-3 text-sm max-md:hidden">Total Placements</th>
                        <th className="p-3 text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRows.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? "bg-gray" : "white-bg"}>
                          <td className="p-3 text-sm max-md:hidden">
                            <MdCheckBoxOutlineBlank size={18} />
                          </td>
                          <td className="p-3 text-sm">{item.name}</td>
                          <td className="p-3 text-sm max-md:hidden">{item.email}</td>
                          <td className="p-3 text-sm max-md:hidden">{item.phone}</td>
                          <td className="p-3 text-sm">{item.placements.filter((p) => p.status).length}</td>
                          <td className="p-3 text-sm max-md:hidden">{item.placements.length}</td>
                          <td className="relative cursor-pointer p-3 text-sm">
                            <HiOutlineDotsVertical className="self-center" onClick={() => toggleDropdown(item.id)} />
                            {visibleDropdownId === item.id && (
                              <div className="absolute right-0 z-10 mt-1 w-48 rounded border bg-white shadow-lg">
                                <ul className="py-1">
                                  <Link href={`/authorities/profile/${item.id}`}>
                                    <li
                                      className="cursor-pointer px-4 py-2  hover:bg-gray-100"
                                      onClick={() => handleDropdownAction("View", item)}
                                    >
                                      View
                                    </li>
                                  </Link>

                                  {/* <Link href={`/authorities/edit/${item.id}`}>
                                    <li
                                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                      onClick={() => handleDropdownAction("Edit", item)}
                                    >
                                      Edit
                                    </li>
                                  </Link> */}
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
    </>
  )
}
