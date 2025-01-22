"use client"
import { useState, useEffect } from "react"
import DashboardNav from "components/Navbar/DashboardNav"

import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import Search from "components/Search/Search"
import CustomDropdown from "components/Search/CustomDropdown"
import { HiOutlineDotsVertical } from "react-icons/hi"
import styles from "../../../components/Dashboard/dashboard.module.css"
import Link from "next/link"
import { IoAddCircleOutline } from "react-icons/io5"
import Placements from "components/Dashboard/Placements"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"

interface Placement {
  id: string
  name: string
  locaton: string
  post_code: string
  bedrooms: string
  addition_info: string
  status: string // Updated to string for filter matching
  pub_date: string
}

export default function ServiceUsers() {
  const [tableData, setTableData] = useState<Placement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [selectedPlacement, setSelectedPlacement] = useState<Placement | null>(null)

  const handleEdit = (placement: Placement) => {
    setSelectedPlacement(placement)
    setEditModalOpen(true)
  }

  const handleEditModalClose = () => {
    setEditModalOpen(false)
    setSelectedPlacement(null)
  }

  const handleEditSave = async () => {
    if (!selectedPlacement) return

    try {
      console.log("Selected Placement:", selectedPlacement)

      const response = await fetch(`https://health-focused.fyber.site/placement/placement/${selectedPlacement.id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: selectedPlacement.name,
          locaton: selectedPlacement.locaton,
          post_code: selectedPlacement.post_code,
          bedrooms: selectedPlacement.bedrooms,
          addition_info: selectedPlacement.addition_info,
        }),
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("Error response body:", errorText)
        throw new Error("Failed to save placement")
      }

      const updatedPlacement = (await response.json()) as Placement
      console.log("Updated Placement:", updatedPlacement)

      setTableData((prev) =>
        prev.map((placement) => (placement.id === updatedPlacement.id ? updatedPlacement : placement))
      )

      setEditModalOpen(false)
      setSelectedPlacement(null)
    } catch (err: any) {
      console.error("Error:", err)
      setError(err.message)
    }
  }

  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 5

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await fetch("https://health-focused.fyber.site/placement/placement/")
        if (!response.ok) {
          throw new Error("Failed to fetch placements")
        }
        const data = (await response.json()) as Placement[]

        // Map 'locaton' to 'location' and 'addition_info' to 'additional_info'
        const mappedData = data.map((item: any) => ({
          ...item,
        }))

        setTableData(mappedData)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPlacements()
  }, [])

  const [filters, setFilters] = useState({
    name: "", // Filter by name now
  })

  const handleFilterChange = (filterName: keyof typeof filters, selectedValue: string) => {
    setFilters({
      ...filters,
      [filterName]: selectedValue,
    })
  }

  // Filter placements by selected name
  const filteredData = tableData
    .filter((placement) => filters.name === "" || placement.name === filters.name)
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)

  const totalPages = Math.ceil(tableData.length / rowsPerPage)

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1)
  }

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
  }

  const [visibleDropdownId, setVisibleDropdownId] = useState<string | null>(null)
  const toggleDropdown = (id: string) => {
    setVisibleDropdownId(visibleDropdownId === id ? null : id)
  }

  const getUniqueValues = (key: keyof Placement) => {
    const uniqueValues = Array.from(new Set(tableData.map((row) => row[key])))
    return uniqueValues.map((value) => ({ id: value, name: String(value) })) // Ensure 'name' is always a string
  }

  const handleDropdownAction = (action: string, row: Placement) => {
    // Implement your logic for each action
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen bg-[#171818]">
          <div className="flex w-full flex-col">
            <DashboardNav />

            <div className="mt-4 flex w-full gap-4  px-16 max-md:flex-col max-md:px-3">
              <div className={styles.dashboard_body__lhs}>
                <div className={styles.service_users}>
                  <Placements />
                </div>
              </div>
            </div>

            <div className="mb-4 flex w-full gap-4 px-16 max-md:flex-col max-md:px-3">
              <div className={styles.dashboard_body__lhs}>
                <div className={styles.service_users}></div>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-3 px-16 max-md:px-3">
              <div className="mb-6 flex w-full flex-col items-center gap-4 rounded-md border-[1px] bg-[#f1f1f1] p-4">
                <div className="flex w-full justify-between">
                  <Link href="/placement/add" className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2">
                    <p className="text-white max-md:px-0">New Placements</p>
                    <IoAddCircleOutline className="text-white" size={20} />
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="max-md:hidden">
                      <Search />
                    </div>
                    <CustomDropdown
                      options={getUniqueValues("name")}
                      selectedOption={filters.name}
                      onChange={(value) => handleFilterChange("name", value)}
                      placeholder="Filter Placements"
                    />
                  </div>
                </div>

                {/* Table */}
                <div className="mt-4 w-full">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="p-3 text-sm max-md:hidden"></th>
                        <th className="p-3 text-sm">Name of Placement</th>
                        <th className="p-3 text-sm max-md:hidden">Postcode</th>
                        <th className="p-3 text-sm">Number of Rooms</th>
                        <th className="p-3 text-sm max-md:hidden">Location</th>
                        <th className="p-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((row, index) => (
                        <tr key={row.id} className={index % 2 === 0 ? "bg-gray" : "white-bg"}>
                          <td className="p-3 text-sm max-md:hidden">
                            <MdCheckBoxOutlineBlank size={18} />
                          </td>
                          <td className="p-3 text-sm">{row.name}</td>
                          <td className="p-3 text-sm max-md:hidden">{row.post_code}</td>
                          <td className="p-3 text-sm">{row.bedrooms}</td>
                          <td className="p-3 text-sm max-md:hidden">{row.locaton}</td>
                          <td className="relative cursor-pointer p-3 text-sm">
                            <HiOutlineDotsVertical onClick={() => toggleDropdown(row.id)} />
                            {visibleDropdownId === row.id && (
                              <div className="absolute right-0 z-10 mt-1 w-48 rounded border bg-white shadow-lg">
                                <ul className="py-1">
                                  <Link href="/placement/placement-profile/">
                                    <li
                                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                      onClick={() => handleDropdownAction("View", row)}
                                    >
                                      View Profile
                                    </li>
                                  </Link>

                                  <li
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                    onClick={() => handleEdit(row)}
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
                      <IoMdArrowBack /> Prev
                    </button>
                    <button
                      className={`flex items-center justify-center gap-3 rounded p-2 ${
                        currentPage === totalPages ? "inactive cursor-not-allowed" : "active hover:bg-gray-400"
                      }`}
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next <IoMdArrowForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={editModalOpen} onClose={handleEditModalClose}>
        <DialogTitle>Edit Placement</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={selectedPlacement?.name || ""}
            onChange={(e) => setSelectedPlacement((prev) => (prev ? { ...prev, name: e.target.value } : null))}
          />
          <TextField
            margin="dense"
            label="Postcode"
            fullWidth
            value={selectedPlacement?.post_code || ""}
            onChange={(e) => setSelectedPlacement((prev) => (prev ? { ...prev, post_code: e.target.value } : null))}
          />
          <TextField
            margin="dense"
            label="Number of Rooms"
            fullWidth
            type="number" // Specify type for number input
            value={selectedPlacement?.bedrooms || ""}
            onChange={
              (e) => setSelectedPlacement((prev) => (prev ? { ...prev, bedrooms: e.target.value } : null)) // Cast to number
            }
          />
          <TextField
            margin="dense"
            label="Location"
            fullWidth
            value={selectedPlacement?.locaton || ""}
            onChange={(e) => setSelectedPlacement((prev) => (prev ? { ...prev, locaton: e.target.value } : null))}
          />
          <TextField
            margin="dense"
            label="Additional Info"
            fullWidth
            multiline
            rows={4}
            value={selectedPlacement?.addition_info || ""}
            onChange={(e) => setSelectedPlacement((prev) => (prev ? { ...prev, addition_info: e.target.value } : null))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditModalClose}>Cancel</Button>
          <Button onClick={handleEditSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
