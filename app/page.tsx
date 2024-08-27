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
        <div className="mx-auto flex max-w-screen-xl justify-between gap-10  py-8  lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 mt-16 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-[red] md:text-5xl xl:text-6xl">
              The seamless way to manage care homes
            </h1>
            <p className="mb-6 max-w-2xl font-light  md:text-base lg:mb-8 lg:text-xl">
              SeamlessCare provides an end-to-end digital solution for managing care providers and care homes.
            </p>
            <Button href="/signin" className="mr-3 gap-2">
              <Image className="max-md:hidden" src="/hugeicons_start-up-02.png" width={24} height={24} alt="smup" />
              Get started
            </Button>
            <div className="mt-10 flex gap-2">
              <div className="flex flex-row gap-4 rounded-md bg-[#195404] p-2">
                <Image
                  className="max-md:hidden"
                  src="/ion_logo-google-playstore.png"
                  width={24}
                  height={24}
                  alt="smup"
                />
                <Link className="text-[#ffffff]" href="/signin">
                  Get on Google Playstore
                </Link>
              </div>
              <div className="flex flex-row gap-4 rounded-md bg-[#09074A] p-2">
                <Image className="max-md:hidden" src="/mingcute_appstore-fill.png" width={24} height={24} alt="smup" />
                <Link className="text-[#ffffff]" href="/signin">
                  Get on Apple App Store
                </Link>
              </div>
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
        <div className="paddings bg-[#69B7FF] ">
          <div className="grid grid-cols-3 gap-10 py-10">
            <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-[#ffffff] p-10">
              <Image className="max-md:hidden" src="/Frame11.png" width={225.8} height={170.51} alt="smup" />
              <p className="my-4 px-6 text-center text-2xl font-bold text-black">Manage Your Staff and Care Homes</p>
              <p className=" text-center  text-[#100606]">
                Enjoy an integrated platform that allows you manage your staff at your various care homes.{" "}
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-[#ffffff] p-10">
              <Image className="max-md:hidden" src="/Frame12.png" width={225.8} height={170.51} alt="smup" />
              <p className="my-4 px-6 text-center text-2xl font-bold text-black">
                Manage and Monitor each ward’s progress
              </p>
              <p className=" text-center  text-[#100606]">
                Get daily, weekly and monthly updates shared by care workers. Keep any eye on urgent situations.
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-[#ffffff] p-10">
              <Image className="max-md:hidden" src="/Frame13.png" width={225.8} height={170.51} alt="smup" />
              <p className="my-4 px-6 text-center text-2xl font-bold text-black">Collect, analyse and share reports</p>
              <p className=" text-center  text-[#100606]">Review your wards’ progress against targets in real time.</p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-screen-xl justify-between gap-10  py-8  lg:py-16">
          <div className="place-self-center">
            <h1 className="mb-4   max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-[#69B7FF] dark:text-[red] md:text-5xl xl:text-6xl">
              Key Features include
            </h1>

            <div className="mt-10 grid grid-cols-2 justify-between gap-4">
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
            className=" rounded-lg max-md:h-72 md:basis-1/2"
            style={{
              backgroundImage: 'url("/images/image2.png")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="paddings">
          <div className="mt-6  flex  items-center  justify-between gap-10 rounded-xl bg-[#0085FF] p-10">
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
      <Footer />
    </>
  )
}
