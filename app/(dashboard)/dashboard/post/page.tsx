"use client"
import { useState, SetStateAction } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropleft, IoIosArrowDropdown } from "react-icons/io"
import { FaCloudArrowUp } from "react-icons/fa6"
import { useDropzone, FileRejection } from "react-dropzone"
import { useRouter } from "next/navigation"
import Image from "next/image"
import styles from "components/Dashboard/dashboard.module.css"

// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function NewLogs() {
  // Simulating user account existence with a state
  const [hasTransactions, setHasTransactions] = useState<boolean>(true)

  // Use an array of PreviewFile for files state
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

  return (
    <>
      <section className="h-full">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            <div>
              <DashboardNav />
            </div>
            <div className="mt-8 flex flex-row  justify-center gap-3">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                GO BACK
              </button>
              <div className="mb-6 flex w-1/2 flex-col  gap-4 rounded-md border-[1px] ">
                <div className="flex w-full justify-between p-4">
                  <div className="flex flex-row gap-3">
                    <Image
                      className=" object-contain max-md:hidden"
                      src="/images/user.png"
                      width={30}
                      height={30}
                      alt="smup"
                    />
                    <div>
                      <p className="text-xs text-[#69B7FF]">Updated by</p>
                      <p className="text-base">Lade Maxwell</p>
                      <p className="text-xs">Keystone Avenue</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-[#69B7FF]">Service User</p>
                    <p className="text-base">Marvin Martin</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#69B7FF]">Staff on Duty</p>
                    <p className="text-base">Toby, Adeoye, Kevin</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#69B7FF]">11:55 AM</p>
                    <p className="text-base">25 January 2024</p>
                  </div>
                </div>
                <div className="w-full border"></div>
                <p className="p-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum."
                </p>

                <div className="flex gap-3 px-4">
                  <div>
                    <Image
                      className=" object-contain pb-2 max-md:hidden"
                      src="/images/cooking.png"
                      width={150}
                      height={170}
                      alt="smup"
                    />
                    <p className="text-xs">Martin making food</p>
                  </div>
                  <div>
                    <Image
                      className=" object-contain pb-2 max-md:hidden"
                      src="/images/cooking.png"
                      width={150}
                      height={170}
                      alt="smup"
                    />
                    <p className="text-xs">Martin’s Recipe Notes</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <p>Marked relevant for weekly report</p>
                  <div className="flex gap-4">
                    <button className="flex h-10 items-center gap-2 rounded-md  bg-[#0085FF] p-2 text-xs">
                      VIEW IN LOG
                    </button>

                    <button className="flex h-10 items-center gap-2 rounded-md  bg-[#0085FF] px-4 py-2 text-xs">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
