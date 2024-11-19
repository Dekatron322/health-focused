"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropleft } from "react-icons/io"
import { useDropzone } from "react-dropzone"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { IoCheckmarkCircle } from "react-icons/io5"

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
      <section className="h-full md:bg-[#171818]">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            <div>
              <DashboardNav />
            </div>
            <div className="my-3 justify-center gap-3 max-md:px-3 md:mt-8  md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="text-[#0085FF]">GO BACK</p>
              </button>
              <div className="mb-6 flex flex-col gap-4  rounded-md bg-white md:w-1/2 md:border-[1px] lg:w-2/3 2xl:w-1/2">
                <div className="flex w-full justify-between md:p-4">
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
                      <p className="lg:text-sm 2xl:text-base">Lade Maxwell</p>
                      <p className="text-xs">Keystone Avenue</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-[#69B7FF]">Service User</p>
                    <p className="lg:text-sm 2xl:text-base">Marvin Martin</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#69B7FF]">Staff on Duty</p>
                    <p className="lg:text-sm 2xl:text-base">Toby, Adeoye, Kevin</p>
                  </div>
                  <div className="max-sm:hidden">
                    <p className="text-xs text-[#69B7FF] ">11:55 AM</p>
                    <p className="lg:text-sm 2xl:text-base">25 January 2024</p>
                  </div>
                </div>
                <div className="w-full border-b"></div>
                <p className="md:p-4 lg:text-sm 2xl:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>

                <div className="flex gap-3 sm:px-4">
                  <div>
                    <Image
                      className=" object-contain pb-2 "
                      src="/images/cooking.png"
                      width={150}
                      height={170}
                      alt="smup"
                    />
                    <p className="text-xs">Martin making food</p>
                  </div>
                  <div>
                    <Image
                      className=" object-contain pb-2 "
                      src="/images/cooking.png"
                      width={150}
                      height={170}
                      alt="smup"
                    />
                    <p className="text-xs">Martin’s Recipe Notes</p>
                  </div>
                </div>
                <div className="items-center justify-between sm:p-4  md:flex">
                  <div className="flex items-center gap-2">
                    <IoCheckmarkCircle size={24} className="text-[#B5DBFF]" />
                    <p className="lg:text-sm xl:text-base">Marked relevant for weekly report</p>
                  </div>
                  <div className="flex gap-4 max-md:mt-5">
                    <button className="flex h-10 items-center gap-2 rounded-md  bg-[#0085FF] p-2 text-xs text-[#fff]">
                      VIEW IN LOG
                    </button>

                    <button className="flex h-10 items-center gap-2 rounded-md  bg-[#0085FF] px-4 py-2 text-xs text-[#fff]">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
