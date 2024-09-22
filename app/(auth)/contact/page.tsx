"use client"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import React, { useState } from "react"
import { FiUser } from "react-icons/fi"

const Page = () => {
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
    <>
      <section>
        <Navbar />
        <div className="paddings   items-center justify-center">
          <div className="justify-between md:mt-6 md:flex md:gap-16">
            <div className="sticky top-4" style={{ alignSelf: "flex-start" }}>
              <h5 className="inter-font font-bold leading-[60px]  max-md:text-[24px] md:text-[60px]">
                Interested in talking to us?
              </h5>
              <p className="text-xl max-md:mb-3">
                From questions about pricing to one-on-one personalized<br></br> demos, we'd love to connect and help
                get you started.
              </p>
            </div>
            <div
              className="flex basis-1/2 flex-col rounded-3xl bg-[#181059] max-md:rounded-t-3xl"
              style={{
                backgroundImage: 'url("/images/Group.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="max-md:p-5 md:p-10">
                <h5 className="inter-font font-bold text-[#ffffff]  max-md:text-[24px] md:text-[24px]">Contact Us</h5>

                <div className="flex flex-col items-center justify-center  max-md:mt-6 md:mt-12">
                  <form className="flex w-full flex-col">
                    <div className="mb-6 flex w-full flex-col items-start">
                      <label htmlFor="adminName" className="label-title text-[#ffffff]">
                        Your Name
                      </label>
                      <div className="input-field bg-[#ffffff]">
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

                    <div className="mb-6 flex w-full flex-col items-start">
                      <label htmlFor="adminName" className="label-title text-[#ffffff]">
                        Email Address
                      </label>
                      <div className="input-field bg-[#ffffff]">
                        <input
                          type="text"
                          id="email"
                          placeholder="e.g johndoe@gmail.com"
                          className="bg-transparent outline-none focus:outline-none"
                          style={{ width: "100%", background: "transparent" }}
                        />
                        <FiUser />
                      </div>
                    </div>

                    <div className="mb-6 flex w-full flex-col items-start">
                      <label htmlFor="adminName" className="label-title text-[#ffffff]">
                        Subject
                      </label>
                      <div className="input-field bg-[#ffffff]">
                        <input
                          type="text"
                          id="email"
                          placeholder="e.g johndoe@gmail.com"
                          className="bg-transparent outline-none focus:outline-none"
                          style={{ width: "100%", background: "transparent" }}
                        />
                        <FiUser />
                      </div>
                    </div>

                    <div className="mb-6 flex w-full flex-col items-start">
                      <label htmlFor="adminName" className="label-title text-[#ffffff]">
                        Email Address
                      </label>
                      <div className="input-field bg-[#ffffff]">
                        <textarea
                          id="email"
                          placeholder="e.g johndoe@gmail.com"
                          className="bg-transparent outline-none focus:outline-none"
                          style={{ width: "100%", background: "transparent" }}
                        ></textarea>
                      </div>
                    </div>

                    <button type="button" className="h-[52px] rounded-lg bg-[#0052FF] p-3 text-sm text-white">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page
