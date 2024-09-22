"use client"

import { SignInCard } from "utils"
import AuthCard from "components/AuthCard/AuthCard"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

import { PiDevicesLight } from "react-icons/pi"

export default function Auth() {
  return (
    <section className="flex h-screen bg-gradient-to-br from-blue-700 from-25% via-emerald-400 via-50% to-blue-700 to-100% max-md:flex-col-reverse md:overflow-hidden">
      <div
        className="flex bg-white max-md:h-[40%]  max-md:flex-col max-md:rounded-t-3xl md:basis-1/2 "
        style={{
          backgroundImage: 'url("/bgImage.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mb-10 mt-10  md:mx-48">
          <Image className="max-md:hidden" src="/onLight.svg" width={200} height={80} alt="smup" />

          <h2 className="inter-font font-bold max-md:px-4 max-md:text-center max-md:text-4xl md:mt-24 md:text-4xl">
            Manage your own financial assets
          </h2>
          <p className="mt-2 max-md:text-center max-md:text-base md:font-semibold">
            {" "}
            Enter yout details to proceed further
          </p>

          <div className="flex flex-col items-center justify-center max-md:mt-10 max-md:hidden md:mt-32 md:gap-16">
            <Link
              className="flex w-full items-center justify-center gap-3 rounded-md border p-2 text-center font-bold"
              href="/signup"
            >
              <PiDevicesLight /> Don&lsquo;t have an account Sign Up
            </Link>
            <Link
              className="flex w-full items-center justify-center gap-3 rounded-md border p-2 text-center font-bold"
              href="/signin"
            >
              <PiDevicesLight /> Already have and account Sign In
            </Link>
          </div>

          <div className="flex flex-col   items-center justify-center max-md:mt-10 md:mt-32 md:hidden md:gap-16">
            <Link
              className="flex w-full items-center justify-between gap-3 border-b  border-t p-2 text-center max-md:px-4"
              href="/signup"
            >
              <p>Don&lsquo;t have an account </p>
              <p className="text-bold text-blue-700">Sign Up</p>
            </Link>
            <Link
              className="flex w-full items-center justify-between gap-3  border-b p-2 text-center max-md:px-4"
              href="/signup"
            >
              <p>Already have an account </p>
              <p className="font-bold">Sign In</p>
            </Link>
          </div>
        </div>
      </div>
      <div className=" py-7  max-md:h-[60%]  md:basis-1/2 md:px-[100px]">
        <AuthCard />
      </div>
    </section>
  )
}
