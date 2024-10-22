import { Metadata } from "next"
import { Button } from "components/Button/Button"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import Image from "next/image"
import Link from "next/link"
import { FiCheckCircle } from "react-icons/fi"

export const metadata: Metadata = {
  title: "Dekalo Pay - Send & Receive Cash",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="">
        <Navbar />
        <div className="mx-auto flex max-w-screen-xl justify-between max-md:flex-col-reverse md:gap-10   md:py-8  lg:py-16">
          <div className="relative mx-auto place-self-center max-md:px-3">
            <h1 className="mb-4 mt-16 max-w-2xl text-4xl font-bold leading-none tracking-tight dark:text-[red] md:text-5xl xl:text-6xl">
              The seamless way to manage care homes
            </h1>
            <p className="mb-6 max-w-2xl font-light md:text-base lg:mb-8 lg:text-xl">
              SeamlessCare provides an end-to-end digital solution for managing care providers and care homes.
            </p>
            <Button href="/signin" className=" mt-10 gap-2">
              <Image src="/hugeicons_start-up-02.png" width={24} height={24} alt="smup" />
              Get started
            </Button>

            {/* Small Shapes in the background */}
            <div className="absolute left-0 top-0 -z-10 h-full w-full">
              {/* Circle shape */}
              <div
                className="absolute left-10 top-5 h-10 w-10  bg-[#FCF4F4]"
                style={{ transform: "rotate(45deg)" }}
              ></div>
              <div
                className="absolute right-10 top-5 h-10 w-10 rounded-full bg-[#CAE5FE] "
                style={{ transform: "rotate(45deg)" }}
              ></div>
              {/* Triangle shape */}
              <div
                className="absolute bottom-14 right-10 h-10 w-10   bg-[#DCFEEA] "
                style={{ transform: "rotate(45deg)" }}
              ></div>
              {/* Square shape */}
              <div className="absolute bottom-14 left-5 h-10 w-10 rounded-full bg-[#FDFFE2]"></div>
            </div>
          </div>
          <div
            className=" rounded-lg max-md:h-72 md:basis-1/2"
            style={{
              backgroundImage: 'url("/images/bedroom.png")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="paddings bg-[#F5F5F5]">
          <div className="grid gap-10 py-10 md:grid-cols-3">
            <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-[#ffffff] p-10">
              <Image src="/Frame11.png" width={225.8} height={170.51} alt="smup" />
              <p className="my-4 px-6 text-center text-2xl font-bold text-black">Manage Your Staff and Care Homes</p>
              <p className=" text-center  text-[#100606]">
                Enjoy an integrated platform that allows you manage your staff at your various care homes.{" "}
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-[#ffffff] p-10">
              <Image src="/Frame12.png" width={225.8} height={170.51} alt="smup" />
              <p className="my-4 px-6 text-center text-2xl font-bold text-black">
                Manage and Monitor each ward’s progress
              </p>
              <p className=" text-center  text-[#100606]">
                Get daily, weekly and monthly updates shared by care workers. Keep any eye on urgent situations.
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-[#ffffff] p-10">
              <Image src="/Frame13.png" width={225.8} height={170.51} alt="smup" />
              <p className="my-4 px-6 text-center text-2xl font-bold text-black">Collect, analyse and share reports</p>
              <p className=" text-center  text-[#100606]">Review your wards’ progress against targets in real time.</p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-screen-xl justify-between max-md:flex-col-reverse md:gap-10   md:py-8  lg:py-16">
          <div className="relative mx-auto place-self-center max-md:px-3">
            <h1 className="mb-4 max-w-2xl   text-4xl font-extrabold leading-none tracking-tight text-[#69B7FF] max-md:whitespace-nowrap  md:text-5xl xl:text-6xl">
              Key Features include
            </h1>
            <div className="mt-10 grid justify-between gap-4 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 pb-4">
                  <FiCheckCircle className="" /> <p className="">Daily and Weekly Reports</p>
                </div>
                <div className="flex items-center gap-2 pb-4">
                  <FiCheckCircle className="" /> <p className="">Emergency Report</p>
                </div>
                <div className="flex items-center gap-2 pb-4">
                  <FiCheckCircle className="" /> <p className="">Progress Logs </p>
                </div>
                <div className="flex items-center gap-2 pb-4">
                  <FiCheckCircle className="" /> <p className="">Placement Profiles</p>
                </div>
                <div className="flex items-center gap-2 pb-4">
                  <FiCheckCircle className="" /> <p className="">Incident and Accident Reports</p>
                </div>
                <div className="flex items-center gap-2 pb-4">
                  <FiCheckCircle className="" /> <p className="">Incident and Accident Reports</p>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div className="flex items-center gap-2 pb-4">
                      <FiCheckCircle className="" /> <p className="">Weekly Planner </p>
                    </div>
                    <div className="flex items-center gap-2 pb-4">
                      <FiCheckCircle className="" /> <p className="">User Management </p>
                    </div>
                    <div className="flex items-center gap-2 pb-4">
                      <FiCheckCircle className="" /> <p className="">Skill Assessments </p>
                    </div>
                    <div className="flex items-center gap-2 pb-4">
                      <FiCheckCircle className="" /> <p className="">Risk Assessment</p>
                    </div>
                    <div className="flex items-center gap-2 pb-4">
                      <FiCheckCircle className="" /> <p className="">Activity Planners</p>
                    </div>
                    <div className="flex items-center gap-2 pb-4">
                      <FiCheckCircle className="" /> <p className="">Daily and Weekly logs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" rounded-lg max-md:h-72 max-sm:hidden md:basis-1/2"
            style={{
              backgroundImage: 'url("/images/image2.png")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="paddings">
          <div className="mt-6  flex items-center  justify-between  gap-10 rounded-xl bg-[#0085FF] p-10 max-sm:flex-col">
            <div>
              <p className="text-4xl text-white">Select a plan that works for you</p>
              <p className="text-white">Send us an email to book a demo or discuss your requirements</p>
            </div>
            <button type="button" className="mt-4 h-[52px]  rounded-lg bg-[#FFFFFF] px-10  py-3 text-sm text-black">
              BOOK A DEMO
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  )
}
