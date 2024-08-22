"use client"
import AuthCard from "components/AuthCard/AuthCard"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { MdOutlineEmail } from "react-icons/md"

export default function Signin() {
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
      <section className="flex bg-gradient-to-br from-[#0052FF] from-25% via-emerald-400 via-50% to-[#0052FF] to-100% max-md:flex-col-reverse md:overflow-hidden 3xl:h-screen">
        <div
          className="flex basis-1/2 flex-col bg-white  max-md:rounded-t-3xl"
          style={{
            backgroundImage: 'url("/bgImage.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="my-10 2xl:mx-[150px]  3xl:mx-52">
            <Image className="max-md:hidden" src="/onLight.svg" width={200} height={80} alt="smup" />

            <h5 className="inter-font font-extrabold max-md:px-4 max-md:text-center max-md:text-[42px] md:mt-16 md:text-4xl">
              Forgot password?
            </h5>
            <p className="md:font-regular mt-2 text-[#747A80] max-md:text-center max-md:text-sm">
              {" "}
              Enter your email below, you will receive an email with instructions on how to reset your password in a few
              minutes. You can also set a new password if you’ve never set one before
            </p>

            <div className="flex flex-col items-center justify-center gap-16 max-md:mt-6 md:mt-12">
              <form className=" flex w-full flex-col max-md:px-4">
                <div className="mb-6 flex w-full flex-col items-start">
                  <label htmlFor="adminName" className="label-title">
                    Email
                  </label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="email"
                      placeholder="e.g johndoe@gmail.com"
                      className="bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />

                    <MdOutlineEmail />
                  </div>
                </div>

                <button type="button" className="h-[52px] rounded-lg bg-[#0052FF] p-3 text-sm text-white">
                  Start recovery
                </button>
              </form>
            </div>
            <div className="absolute bottom-16 flex gap-2 text-sm  max-md:mt-10 max-md:justify-center">
              <p>You don’t have an account? </p>
              <Link className="font-bold text-[#0052FF]" href="">
                Create an account
              </Link>
            </div>
          </div>
        </div>
        <div className=" max-md:h-[20%]  md:basis-1/2   md:py-7 3xl:px-[100px]">
          <AuthCard showBackArrow={true} />
        </div>
      </section>
    </main>
  )
}
