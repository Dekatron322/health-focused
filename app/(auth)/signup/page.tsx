"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { GoOrganization } from "react-icons/go"
import { MdOutlineMailOutline } from "react-icons/md"

export default function SignUp() {
  const [showPasswords, setShowPasswords] = useState<boolean[]>([false, false])
  const [showSelect, setShowSelect] = useState<boolean[]>([false, false])
  const [emailUpdates, setEmailUpdates] = useState<boolean>(false)
  const [termsAgreed, setTermsAgreed] = useState<boolean>(false)

  const togglePasswordVisibility = (index: number) => {
    const updatedPasswords = [...showPasswords]
    updatedPasswords[index] = !updatedPasswords[index]
    setShowPasswords(updatedPasswords)
  }

  const toggleSelectVisibility = (index: number) => {
    const updatedSelect = [...showSelect]
    updatedSelect[index] = !updatedSelect[index]
    setShowSelect(updatedSelect)
  }

  const handleEmailUpdates = () => {
    setEmailUpdates(!emailUpdates)
  }

  const handleTermsAgreement = () => {
    setTermsAgreed(!termsAgreed)
  }
  return (
    <main className="">
      <section className="relative flex max-md:flex-col-reverse  md:h-screen md:overflow-hidden ">
        <div
          className="relative flex basis-1/2  flex-col  max-md:rounded-t-3xl"
          style={{
            backgroundImage: 'url("/images/xxx.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="my-5 items-center px-5 md:my-auto lg:px-20 xl:px-28 3xl:px-40 ">
            <div className="flex items-center gap-2">
              <Image className="" src="/images/logo.png" width={25} height={25} alt="smup" />
              <p className="inter-font font-extrabold max-md:px-0 max-md:text-center max-md:text-[20px]  md:text-2xl">
                Health Focused{" "}
              </p>
            </div>

            <h5 className="inter-font mt-6 font-bold  max-md:px-4 max-md:text-[24px]  md:text-[24px]">Sign Up</h5>

            <div className="mt-6 flex flex-col items-center justify-center gap-16">
              <form className=" flex w-full flex-col max-md:px-4">
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="adminName" className="label-title">
                    Name
                  </label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="email"
                      placeholder="e.g Michael Dean"
                      className="bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%", background: "transparent" }}
                    />

                    <FiUser />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="adminName" className="label-title">
                    Organization Name
                  </label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="email"
                      placeholder="e.g Major Care"
                      className="bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%", background: "transparent" }}
                    />

                    <GoOrganization />
                  </div>
                </div>
                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="adminName" className="label-title">
                    Email Address
                  </label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="email"
                      placeholder="e.g johndoe@gmail.com"
                      className="bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%", background: "transparent" }}
                    />

                    <MdOutlineMailOutline />
                  </div>
                </div>

                <div className="mb-3 flex w-full flex-col items-start">
                  <label htmlFor="adminName" className="label-title">
                    Password
                  </label>
                  <div className="input-field">
                    <input
                      type={showPasswords[0] ? "text" : "password"}
                      id="password"
                      placeholder="••••••••"
                      className="bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                    <button type="button" onClick={() => togglePasswordVisibility(0)}>
                      {showPasswords[0] ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                </div>

                <button type="button" className="h-[52px] rounded-lg bg-[#0052FF] p-3 text-sm text-white">
                  SIGN UP
                </button>
              </form>
            </div>

            <div className="mt-6 flex gap-2 text-sm max-md:mt-4 max-md:px-4">
              <p>Have an account? Sign In </p>
              <Link className="font-bold text-[#0052FF]" href="/signin">
                Sign In
              </Link>
            </div>
          </div>
          {/* Small Shapes in the background */}
          <div className="absolute left-0 top-0 -z-10 h-full w-full">
            {/* Circle shape */}
            <div
              className="absolute left-20 top-40 h-10 w-10  bg-[#FCF4F4]"
              style={{ transform: "rotate(45deg)" }}
            ></div>
            <div
              className="absolute right-20 top-40 h-10 w-10 rounded-full bg-[#CAE5FE] "
              style={{ transform: "rotate(45deg)" }}
            ></div>
            {/* Triangle shape */}
            <div
              className="absolute bottom-40 right-20 h-10 w-10   bg-[#DCFEEA] "
              style={{ transform: "rotate(45deg)" }}
            ></div>
            {/* Square shape */}
            <div className="absolute bottom-40 left-20 h-10 w-10 rounded-full bg-[#FDFFE2]"></div>
          </div>
        </div>
        <div
          className=" max-md:h-72 md:basis-1/2"
          style={{
            backgroundImage: 'url("/images/images.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </section>
    </main>
  )
}
