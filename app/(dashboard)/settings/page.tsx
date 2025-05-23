// app/dashboard/settings/page.tsx
"use client"
import { useState } from "react"
import { IoIosArrowDropleft, IoMdArrowBack, IoMdArrowForward } from "react-icons/io"
import { useRouter } from "next/navigation"
import { useDropzone, DropzoneRootProps, DropzoneInputProps } from "react-dropzone"
import { FaCloudArrowUp } from "react-icons/fa6"
import { Filters, PaymentHistoryTab, TableRow } from "components/Settings/PaymentHistoryTab"
import { ProfileTab } from "components/Settings/ProfileTab"
import { PasswordTab } from "components/Settings/PasswordTab"
import { BillingTab } from "components/Settings/BillingTab"
import DashboardNav from "components/Navbar/DashboardNav"
import Tab from "components/Search/Tab"

interface PreviewFile extends File {
  preview: string
}

export default function AddServiceUser() {
  const [activeTab, setActiveTab] = useState<string>("general-info")
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
      name: "INV2030303",
      placement: "11/12/2024",
      date: "11/12/2024",
      keyWorker: "$500",
      status: "Paid",
    },
    {
      id: 2,
      name: "INV2030303",
      placement: "11/12/2024",
      date: "11/12/2024",
      keyWorker: "$500",
      status: "Pending",
    },
    {
      id: 3,
      name: "INV2030303",
      placement: "11/12/2024",
      date: "11/12/2024",
      keyWorker: "$500",
      status: "Paid",
    },
    {
      id: 4,
      name: "INV2030303",
      placement: "11/12/2024",
      date: "11/12/2024",
      keyWorker: "$500",
      status: "Cancelled",
    },
    {
      id: 5,
      name: "INV2030303",
      placement: "11/12/2024",
      date: "11/12/2024",
      keyWorker: "$500",
      status: "Paid",
    },
  ])

  const [filters, setFilters] = useState<Filters>({
    name: "",
    placement: "",
    date: "",
    keyWorker: "",
    localAuthority: "",
    status: "",
  })

  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 5

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const getUniqueValues = (key: keyof TableRow) => {
    const uniqueValues = Array.from(new Set(tableData.map((row) => row[key])))
    return uniqueValues.map((value) => ({ id: value, name: value }))
  }

  const handleFilterChange = (filterName: keyof Filters, selectedValue: string) => {
    setFilters({
      ...filters,
      [filterName]: selectedValue,
    })
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

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow)
  const totalPages = Math.ceil(filteredData.length / rowsPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const renderContent = () => {
    switch (activeTab) {
      case "general-info":
        return <ProfileTab files={files} getRootProps={getRootProps} getInputProps={getInputProps} />
      case "bio":
        return <PasswordTab />
      case "contacts":
        return <BillingTab />
      case "others":
        return (
          <PaymentHistoryTab
            tableData={tableData}
            filters={filters}
            currentPage={currentPage}
            totalPages={totalPages}
            currentRows={currentRows}
            getUniqueValues={getUniqueValues}
            handleFilterChange={handleFilterChange}
            prevPage={prevPage}
            nextPage={nextPage}
            paginate={paginate}
          />
        )
      default:
        return null
    }
  }

  return (
    <section className="h-full">
      <div className="mx-auto flex min-h-screen bg-[#171818]">
        <div className="flex w-full flex-col">
          <div>
            <DashboardNav />
          </div>
          <div className="mt-8 flex-row justify-center gap-3 max-md:px-3 md:flex">
            <button
              onClick={handleBackButtonClick}
              className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
            >
              <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
              <p className="text-[#0085FF]">GO BACK</p>
            </button>
            <div className="mb-6 flex flex-col md:w-3/4">
              <div className="flex w-full items-center justify-between rounded-md bg-white p-4">
                <p className="text-xl font-semibold">Settings</p>
                <p className="text-xs">25 January 2024</p>
              </div>
              <div className="mt-4 flex w-full justify-between rounded-t-md bg-white px-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
