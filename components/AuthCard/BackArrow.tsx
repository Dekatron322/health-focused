import React from "react"
import { IoChevronBackOutline } from "react-icons/io5"

interface BackArrowProps {
  onClick: () => void
}

const BackArrow: React.FC<BackArrowProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="mx-4 rounded-full bg-white p-3 md:hidden">
      <IoChevronBackOutline className="text-2xl" />
    </button>
  )
}

export default BackArrow
