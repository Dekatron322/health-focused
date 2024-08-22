"use client"
import React, { useEffect, useState } from "react"
import { GoArrowUpRight } from "react-icons/go"
import { MdCompareArrows } from "react-icons/md"
import Image from "next/image"
import { SignInCard } from "utils"
import BackArrow from "./BackArrow"

interface AuthCardProps {
  showBackArrow?: boolean
}

const AuthCard: React.FC<AuthCardProps> = ({ showBackArrow = false }) => {
  const quotes = [
    {
      quote: "Fintech is the technology and innovation that aims to compete with traditional financial methods",
      author: "Waiapi Karaka",
      title: "Financial Officer",
    },
    {
      quote: "The Technology innovation in financial services is one such example, accerationg rapidly",
      author: "Waiapi Karaka",
      title: "Financial Officer",
    },
    {
      quote: "Powerfully built online banking for small businesses. See why over 160,000 businesses trust us.",
      author: "Waiapi Karaka",
      title: "Financial Officer",
    },
  ]

  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the quote index
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length)
    }, 5000) // Change quote every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, []) // Empty dependency array ensures that the effect runs only once on mount
  return (
    <div className="max-md:mt-4  md:mt-36 md:h-screen">
      {showBackArrow && <BackArrow onClick={() => console.log("Back clicked")} />}
      <div className="flex flex-col items-center  max-md:mt-10">
        <Image className="md:hidden" src="/dekalopay.png" width={50} height={50} alt="smup" />
        <Image src="/Mockup.svg" width={504} height={407} alt="smup" />

        <div className="flex max-md:mt-8  max-md:h-40 max-md:w-full max-md:px-4 md:mt-14 md:w-3/5">
          <p className="text-center font-extrabold  text-white max-md:text-lg md:text-2xl">
            {quotes[currentQuote]?.quote}
          </p>
        </div>

        <div className="mt-10 flex transform items-center justify-center gap-2">
          {quotes.map((_, index) => (
            <div
              key={index}
              className={` rounded-full ${
                index === currentQuote ? "h-[6px] w-[16px] bg-white" : " h-[6px] w-[6px] bg-white"
              }`}
            />
          ))}
        </div>
        <div className=" mt-10 flex w-full flex-col items-center text-white  max-md:mb-10">
          <p className="text-center text-lg font-extrabold">{quotes[currentQuote]?.author ?? "Unknown author"}</p>
          <p className="text-center text-sm">{quotes[currentQuote]?.title}</p>
        </div>
      </div>
    </div>
  )
}

export default AuthCard
