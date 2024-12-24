import SideBar from "components/Sidebar/SideBar"

export const metadata = {
  title: "Placements | Health Focused",
  description: "Placements",
}

export default function PlacementLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col-reverse border-0 border-blue-700 lg:flex-row">
      <div className="h-16 w-full flex-none border-0 border-red-700 lg:h-full lg:w-64 lg:overflow-y-auto">
        <SideBar />
      </div>
      <div className="grow overflow-y-auto border-0 border-black ">{children}</div>
    </div>
  )
}
