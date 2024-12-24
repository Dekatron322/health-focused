import React from "react"
import { IoMdSearch } from "react-icons/io"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"

const Search = () => {
  return (
    <div className="flex h-[33px] max-w-[317px] items-center justify-between gap-2 rounded-[5px] bg-white  px-3 py-1 xl:w-full ">
      <input
        type="text"
        id="search"
        placeholder="Type to search..."
        className="w-full bg-transparent  outline-none focus:outline-none lg:text-xs xl:text-sm"
        style={{ width: "100%" }}
      />
      <SearchOutlinedIcon />
    </div>
  )
}

export default Search
