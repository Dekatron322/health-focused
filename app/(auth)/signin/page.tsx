"use client";

import AuthCard from "components/AuthCard/AuthCard";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoCheckbox, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { RiCheckboxBlankFill } from "react-icons/ri";

type SignInResponse = {
  token: string;
  id: string;
};

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://health-focused.fyber.site/custom-user/sign-in/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = (await response.json()) as { message?: string };
        setError(errorData.message || "Failed to sign in. Please try again.");
        return;
      }

      const data = await response.json() as SignInResponse;
      localStorage.setItem("token", data.token); // Store the token
      localStorage.setItem("userId", data.id); // Store the user ID
      console.log("Token:", data.token);
      console.log("User ID:", data.id);

      alert("Sign-in successful!");
      window.location.href = "/dashboard"; // Redirect to the dashboard
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="flex max-md:flex-col-reverse md:h-screen md:overflow-hidden">
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
              <Image className="" src="/images/logo.png" width={25} height={25} alt="logo" />
              <p className="inter-font font-extrabold max-md:px-0 max-md:text-center max-md:text-[20px] md:text-2xl">
                Health Focused
              </p>
            </Link>

            <h5 className="inter-font font-bold max-md:mt-6 max-md:px-4 max-md:text-[24px] md:mt-16 md:text-[24px]">
              Sign in
            </h5>

            <div className="flex flex-col items-center justify-center gap-16 max-md:mt-6 md:mt-12">
              <form className="flex w-full flex-col max-md:px-4" onSubmit={handleSignIn}>
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="mb-6 flex w-full flex-col items-start">
                  <label htmlFor="email" className="label-title">
                    Email Address
                  </label>
                  <div className="input-field">
                    <input
                      type="email"
                      id="email"
                      placeholder="e.g johndoe@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                    <FiUser />
                  </div>
                </div>

                <div className="mb-6 flex w-full flex-col items-start">
                  <label htmlFor="password" className="label-title">
                    Password
                  </label>
                  <div className="input-field">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-transparent outline-none focus:outline-none"
                      style={{ width: "100%" }}
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                </div>

                <div className="mb-6 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {emailUpdates ? (
                      <IoCheckbox className="h-5 w-5 text-lg text-[#0052FF]" onClick={() => setEmailUpdates(!emailUpdates)} />
                    ) : (
                      <RiCheckboxBlankFill className="h-5 w-5 text-lg text-[#EBF0F0]" onClick={() => setEmailUpdates(!emailUpdates)} />
                    )}
                    <p className={`${emailUpdates ? "text-xs font-bold" : "text-xs font-bold text-[#747A80]"}`}>
                      Remember me
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-[48px] items-center justify-center rounded-lg bg-[#0052FF] text-sm text-white"
                >
                  {loading ? "Signing In..." : "SIGN IN"}
                </button>
              </form>
            </div>

            <div className="mt-6 max-md:px-4">
              <Link href="/recover-password" className="text-xs font-bold text-[#0085FF]">
                Forgot Password?
              </Link>
            </div>
            <div className="mt-10 flex gap-2 text-sm max-md:mt-4 max-md:px-4">
              <p>You don’t have an account? </p>
              <Link className="font-bold text-[#0052FF]" href="/signup">
                Create an account
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
  );
}
