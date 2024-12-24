import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import Image from "next/image"
import React from "react"

const page = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="paddings items-center justify-center md:my-10">
          <p className="text-4xl md:text-center">Select a plan that works for you</p>

          <div className="my-6  items-center  justify-center gap-10  md:flex">
            <div className="rounded-2xl  md:w-96">
              <div className=" subscription   border p-4 md:w-96">
                <p className="mb-3 font-extrabold">Basic Plan</p>

                <p className="text-[#69B7FF] lg:text-xl xl:text-3xl 2xl:text-5xl  3xl:text-7xl">
                  $500<span className="text-sm text-[#5B5A5A]">/month</span>
                </p>
                <button type="button" className="mt-4 h-[52px] w-full rounded-lg bg-[#0052FF] p-3 text-sm text-white">
                  Choose Plan
                </button>

                <div className="mt-4 border-b"></div>
                <div className="flex items-center gap-2 pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Up to 50 employee accounts</p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Care coordination features </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Standard dashboard view </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Standard dashboard view </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Simple appointment setting </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Alerts </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Download Logs </p>
                </div>
                <div className="flex items-center gap-2  py-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Email Support</p>
                </div>
              </div>
            </div>
            <div className="  max-md:mt-4  md:w-96">
              <div className=" subscription   border p-4 md:w-96">
                <p className="mb-3 font-extrabold">Standard Plan</p>

                <p className="text-[#69B7FF] lg:text-xl xl:text-3xl 2xl:text-5xl  3xl:text-7xl">
                  $800<span className="text-sm text-[#5B5A5A]">/month</span>
                </p>
                <button type="button" className="mt-4 h-[52px] w-full rounded-lg bg-[#0052FF] p-3 text-sm text-white">
                  Choose Plan
                </button>

                <div className="mt-4 border-b"></div>
                <div className="flex items-center gap-2 pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Up to 200 employee accounts</p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Care coordination features </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Standard dashboard view </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Standard dashboard view </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Simple appointment setting </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Alerts </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Download Logs (up to 12 months)</p>
                </div>
                <div className="flex items-center gap-2  py-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center text-[#09074A]">Email Support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="relative mt-6  items-center  justify-between  gap-10 rounded-xl bg-[#0085FF] max-md:p-4 md:flex md:p-10">
              <div>
                <p className="text-white lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-4xl">
                  Select a plan that works for you
                </p>
                <p className="text-white">Send us an email to book a demo or discuss your requirements</p>
              </div>
              <button type="button" className="mt-4 h-[52px]  rounded-lg bg-[#FFFFFF] px-10  py-3 text-sm text-black">
                CONTACT US
              </button>

              {/* SVG Shape 2 - Ellipse */}
              <svg
                className="absolute -right-10 -top-5"
                width="71"
                height="56"
                viewBox="0 0 71 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  opacity="0.5"
                  cx="33.02"
                  cy="29.62"
                  rx="33.02"
                  ry="29.62"
                  transform="matrix(0.6393 -0.768958 0.928176 0.372141 -12.96 42.39)"
                  fill="url(#paint0_linear_66_1543)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_66_1543"
                    x1="33.02"
                    y1="0"
                    x2="33.02"
                    y2="59.23"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* SVG Shape 1 - Ellipse */}
              <svg
                className="absolute -bottom-10 left-20"
                width="110"
                height="84"
                viewBox="0 0 110 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  opacity="0.5"
                  cx="48.08"
                  cy="48.63"
                  rx="48.08"
                  ry="48.63"
                  transform="matrix(0.928176 0.372141 -0.6393 0.768958 41.1748 -13)"
                  fill="url(#paint0_linear_66_1547)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_66_1547"
                    x1="48.08"
                    y1="0"
                    x2="48.08"
                    y2="97.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
