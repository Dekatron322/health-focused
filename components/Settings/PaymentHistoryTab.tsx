// components/Settings/PaymentHistoryTab.tsx
"use client"

import { MdCheckBoxOutlineBlank, MdOutlineFileDownload } from "react-icons/md"
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io"
import Link from "next/link"
import { IoAddCircleOutline } from "react-icons/io5"
import Search from "components/Search/Search"
import CustomDropdown from "components/Search/CustomDropdown"

export interface TableRow {
  id: number
  name: string
  placement: string
  date: any
  keyWorker: string
  status: string
}

export type Filters = {
  name: string
  placement: string
  date: string
  keyWorker: string
  localAuthority: string
  status: string
}

interface PaymentHistoryTabProps {
  tableData: TableRow[]
  filters: Filters
  currentPage: number
  totalPages: number
  currentRows: TableRow[]
  getUniqueValues: (key: keyof TableRow) => { id: string; name: string }[]
  handleFilterChange: (filterName: keyof Filters, selectedValue: string) => void
  prevPage: () => void
  nextPage: () => void
  paginate: (pageNumber: number) => void
}

export const PaymentHistoryTab = ({
  tableData,
  filters,
  currentPage,
  totalPages,
  currentRows,
  getUniqueValues,
  handleFilterChange,
  prevPage,
  nextPage,
  paginate,
}: PaymentHistoryTabProps) => {
  return (
    <div className="flex flex-row justify-center gap-3 py-3">
      <div className="mb-6 flex w-full flex-col items-center gap-4 rounded-md border-[1px] bg-[#f5f5f5] p-4">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-3">
            <Link href="/placement/add" className="flex items-center gap-2 rounded-md bg-[#0085FF] px-3 py-2">
              <p className="text-white max-md:px-0 max-md:text-xs">New Placements</p>
              <IoAddCircleOutline className="text-white" size={20} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="max-md:hidden">
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

        <div className="mt-4 w-full">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="p-3 text-sm max-md:hidden"></th>
                <th className="p-3 text-sm">Invoice Number</th>
                <th className="p-3 text-sm max-md:hidden">Invoice Date</th>
                <th className="p-3 text-sm max-md:hidden">Due Date</th>
                <th className="p-3 text-sm max-md:hidden">Amount</th>
                <th className="p-3 text-sm max-md:hidden">Status</th>
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
                  <td className="p-3 text-sm max-md:hidden">{row.placement}</td>
                  <td className="p-3 text-sm max-md:hidden">{row.date}</td>
                  <td className="p-3 text-sm max-md:hidden">{row.keyWorker}</td>
                  <td className="p-3 text-sm">{row.status}</td>
                  <td className="relative flex cursor-pointer items-center gap-1 p-3 text-sm text-[#0085FF] underline">
                    Download
                    <MdOutlineFileDownload className="text-lg text-[#0085FF]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              className={`flex items-center justify-center gap-3 rounded p-2 ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-400"
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
                className={`rounded-md px-4 py-2 ${currentPage === i + 1 ? "bg-[#0085FF] text-white" : "bg-white"}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`flex items-center justify-center gap-4 rounded p-2 ${
                currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
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
}
