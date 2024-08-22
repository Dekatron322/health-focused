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
              Log in with QR code
            </h5>
            <p className="md:font-regular mt-2 text-[#747A80] max-md:text-center max-md:text-sm">
              {" "}
              Scan this code with the mobile app to log in instantly
            </p>

            <div className="flex flex-col items-center justify-center gap-16 max-md:mt-6 md:mt-12">
              <form className=" flex w-full flex-col max-md:px-4">
                <div className="flex w-full items-center justify-center">
                  <Image className="" src="/Qr.svg" width={204} height={204} alt="smup" />
                </div>

                <div className="my-8 flex w-full items-center justify-center gap-3 px-16">
                  <div className="w-full border border-[#CFDBD5]"></div>
                  <p className="text-sm text-[#747A80]">Or</p>
                  <div className="w-full border border-[#CFDBD5]"></div>
                </div>

                <div className="flex flex-col items-center justify-center max-md:mt-10 max-md:hidden md:gap-16">
                  <Link
                    className="flex h-[52px] w-full items-center justify-center gap-3 rounded-md border p-2 text-center text-sm font-bold"
                    href="/signin"
                  >
                    <Image src="/icon2.svg" width={18} height={18} alt="smup" /> Log in with email or phone number
                  </Link>
                </div>
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
