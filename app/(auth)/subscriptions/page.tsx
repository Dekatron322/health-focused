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
          <p className="text-center text-4xl">Select a plan that works for you</p>

          <div className="my-6  items-center  justify-center gap-10  md:flex">
            <div className="rounded-2xl bg-[#0085FF]  md:w-96">
              <h5 className="p-4 text-center">Most Popular</h5>
              <div className=" subscription rounded-xl  border p-4 md:w-96">
                <p className="mb-3 font-extrabold">Basic Plan</p>

                <p className="text-7xl font-extrabold text-[#69B7FF]">
                  $500<span className="text-sm text-[#5B5A5A]">/month</span>
                </p>
                <button type="button" className="mt-4 h-[52px] w-full rounded-lg bg-[#0052FF] p-3 text-sm text-white">
                  Choose Plan
                </button>
                <div className="flex items-center gap-2 pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Up to 50 employee accounts</p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Care coordination features </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Standard dashboard view </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Standard dashboard view </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Simple appointment setting </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Alerts </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Download Logs </p>
                </div>
                <div className="flex items-center gap-2  py-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Email Support</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-[#0085FF] max-md:mt-4  md:w-96">
              <h5 className="p-4 text-center">Most Popular</h5>
              <div className=" subscription rounded-xl  border p-4 md:w-96">
                <p className="mb-3 font-extrabold">Standard Plan</p>

                <p className="text-7xl font-extrabold text-[#69B7FF]">
                  $800<span className="text-sm text-[#5B5A5A]">/month</span>
                </p>
                <button type="button" className="mt-4 h-[52px] w-full rounded-lg bg-[#0052FF] p-3 text-sm text-white">
                  Choose Plan
                </button>
                <div className="flex items-center gap-2 pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Up to 200 employee accounts</p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Care coordination features </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Standard dashboard view </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Standard dashboard view </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Simple appointment setting </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Alerts </p>
                </div>
                <div className="flex items-center gap-2  pt-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Download Logs (up to 12 months)</p>
                </div>
                <div className="flex items-center gap-2  py-4">
                  <Image className="max-md:hidden" src="/images/Vector.png" width={20} height={20} alt="smup" />
                  <p className="text-center">Email Support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-6  items-center  justify-between  gap-10 rounded-xl bg-[#0085FF] max-md:p-4 md:flex md:p-10">
              <div>
                <p className="text-4xl text-white">Select a plan that works for you</p>
                <p className="text-white">Send us an email to book a demo or discuss your requirements</p>
              </div>
              <button type="button" className="mt-4 h-[52px]  rounded-lg bg-[#FFFFFF] px-10  py-3 text-sm text-black">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page
