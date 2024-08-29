"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropleft } from "react-icons/io"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import Search from "components/Search/Search"
import CustomDropdown from "components/Search/CustomDropdown"
import { HiOutlineDotsVertical } from "react-icons/hi"

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

export default function NewLogs() {
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
      (filters.alertType === "" || row.alertType === filters.alertType) &&
      (filters.status === "" || row.status === filters.status)
    )
  })

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
        <div className="mx-auto flex min-h-screen">
          <div className="flex w-full flex-col">
            <div>
              <DashboardNav />
            </div>
            <div className="mt-8 flex flex-row justify-center gap-3">
              <button className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs">
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                GO BACK
              </button>
              <div className="mb-6 flex w-2/3 flex-col items-center gap-4 rounded-md border-[1px] p-4">
                <div className="flex w-full justify-between">
                  <p className="text-2xl">Alerts</p>
                  <Search />
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
                        <th className="p-3"></th>
                        <th className="p-3">Service User</th>
                        <th className="p-3">Placement</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Key Worker</th>
                        <th className="p-3">Alert Type</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((row, index) => (
                        <tr key={row.id} className={index % 2 === 0 ? "bg-gray" : "white-bg"}>
                          <td className="p-3 text-sm">
                            <MdCheckBoxOutlineBlank size={18} />
                          </td>
                          <td className="p-3 text-sm">{row.name}</td>
                          <td className="p-3 text-sm">{row.placement}</td>
                          <td className="p-3 text-sm">{row.date}</td>
                          <td className="p-3 text-sm">{row.keyWorker}</td>
                          <td className="p-3 text-sm">{row.alertType}</td>
                          <td className="p-3 text-sm">{row.status}</td>
                          <td className="relative cursor-pointer p-3 text-sm">
                            <HiOutlineDotsVertical className="self-center" onClick={() => toggleDropdown(row.id)} />
                            {visibleDropdownId === row.id && (
                              <div className="absolute right-0 z-10 mt-1 w-48 rounded border bg-white shadow-lg">
                                <ul className="py-1">
                                  <li
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                    onClick={() => handleDropdownAction("View", row)}
                                  >
                                    View
                                  </li>
                                  <li
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                    onClick={() => handleDropdownAction("Mark as Resolved", row)}
                                  >
                                    Mark as Resolved
                                  </li>
                                  <li
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                    onClick={() => handleDropdownAction("Mark as Unresolved", row)}
                                  >
                                    Mark as Unresolved
                                  </li>
                                  <li
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
