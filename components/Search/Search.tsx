import React from "react"
import { IoMdSearch } from "react-icons/io"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"

const Search = () => {
  return (
    <div className="flex h-10 items-center justify-between gap-2 rounded-lg border border-[#CFDBD5] px-3 py-1 lg:w-[307px]">
      <SearchOutlinedIcon />
      <input
        type="text"
        id="search"
        placeholder="Type to search..."
        className="w-full bg-transparent  outline-none focus:outline-none"
        style={{ width: "100%" }}
      />
    </div>
  )
}

export default Search
