import SideBar from "components/Sidebar/SideBar"

export const metadata = {
  title: "Service Users | Health Focused",
  description: "Service Users",
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col-reverse border-0 border-blue-700 lg:flex-row">
      <div className="h-16 w-full flex-none border-0 border-red-700 md:w-52 lg:h-full lg:w-[180px] 2xl:w-64 ">
        <SideBar />
      </div>
      <div className="grow overflow-y-auto border-0 border-black ">{children}</div>
    </div>
  )
}
