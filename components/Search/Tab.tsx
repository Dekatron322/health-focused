import { useState } from "react"

interface TabProps {
  label: string
  onClick: () => void
  active: boolean
}

const Tab: React.FC<TabProps> = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`justify-between px-4 py-2 focus:outline-none ${
        active ? "border-b-2 border-[#0052FF] text-[#0052FF]" : "text-gray-600"
      }`}
    >
      {label}
    </button>
  )
}

export default Tab
