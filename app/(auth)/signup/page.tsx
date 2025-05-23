"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation" // Import router
// import { toast } from "react-toastify"; // Import toast
// import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { GoOrganization } from "react-icons/go"
import { MdOutlineMailOutline } from "react-icons/md"

export default function SignUp() {
  const router = useRouter()
  const [showPasswords, setShowPasswords] = useState<boolean[]>([false])
  const [formData, setFormData] = useState({
    name: "",
    organisation_name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPasswords((prev) => [!prev[0]])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.organisation_name || !formData.email || !formData.password) {
      setError("All fields are required.")
      return
    }

    setError(null)
    setLoading(true)

    try {
      const response = await fetch("https://hf-api.craftandurban.com/custom-user/sign-up/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = (await response.json()) as { message?: string }
        setError(errorData.message || "Something went wrong.")
        return
      }

      // Show success notification and redirect
      console.log("Sign-up successful! Redirecting to login...")
      setTimeout(() => {
        router.push("/signin")
      }, 2000) // Redirect after 2 seconds
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <section className="relative flex max-md:flex-col-reverse md:h-screen md:overflow-hidden">
        <div
          className="relative flex basis-1/2 flex-col max-md:rounded-t-3xl"
          style={{
            backgroundImage: 'url("/images/xxx.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="my-5 items-center px-5 md:my-auto lg:px-20 xl:px-28 3xl:px-40">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" width={25} height={25} alt="smup" />
              <p className="inter-font font-extrabold max-md:px-0 max-md:text-center max-md:text-[20px] md:text-2xl">
                Health Focused
              </p>
            </Link>

            <h5 className="inter-font mt-6 font-bold max-md:px-4 max-md:text-[24px] md:text-[24px]">Sign Up</h5>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="flex w-full flex-col max-md:px-4">
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="name" className="label-title">
                  Name
                </label>
                <div className="input-field">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g Michael Dean"
                    className="bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  />
                  <FiUser />
                </div>
              </div>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="organisation_name" className="label-title">
                  Organization Name
                </label>
                <div className="input-field">
                  <input
                    type="text"
                    id="organisation_name"
                    name="organisation_name"
                    value={formData.organisation_name}
                    onChange={handleInputChange}
                    placeholder="e.g Major Care"
                    className="bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  />
                  <GoOrganization />
                </div>
              </div>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="email" className="label-title">
                  Email Address
                </label>
                <div className="input-field">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g johndoe@gmail.com"
                    className="bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%", background: "transparent" }}
                  />
                  <MdOutlineMailOutline />
                </div>
              </div>
              <div className="mb-3 flex w-full flex-col items-start">
                <label htmlFor="password" className="label-title">
                  Password
                </label>
                <div className="input-field">
                  <input
                    type={showPasswords[0] ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="bg-transparent outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <button type="button" onClick={togglePasswordVisibility}>
                    {showPasswords[0] ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex h-[48px] items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
              >
                {loading ? "Signing Up..." : "SIGN UP"}
              </button>
            </form>

            <div className="mt-6 flex gap-2 text-sm max-md:mt-4 max-md:px-4">
              <p>Have an account?</p>
              <Link className="font-bold text-[#0052FF]" href="/signin">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div
          className="max-md:h-72 md:basis-1/2"
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
