"use client"
import Link from "next/link"
import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

export const PasswordTab = () => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword)
  }

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match")
      return
    }

    const userId = localStorage.getItem("userId")
    if (!userId) {
      setError("User not authenticated")
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`https://hf-api.craftandurban.com/custom-user/change-password/${userId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error("Failed to change password")
      }

      setSuccess("Password changed successfully!")
      // Clear form
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    } catch (err: any) {
      setError(err.message || "An error occurred while changing password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-4" onSubmit={handleSubmit}>
      {error && <div className="mb-4 text-sm text-red-500">{error}</div>}
      {success && <div className="mb-4 text-sm text-green-500">{success}</div>}

      <div className="mb-3 flex w-full flex-col items-start">
        <label htmlFor="currentPassword" className="label-title">
          Current Password
        </label>
        <div className="input-field bg-white">
          <input
            type={showCurrentPassword ? "text" : "password"}
            id="currentPassword"
            placeholder="*************"
            className="w-40 bg-transparent outline-none focus:outline-none"
            style={{ width: "100%" }}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
          <button type="button" onClick={toggleCurrentPasswordVisibility} className="text-gray-500">
            {showCurrentPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      </div>

      <div className="mb-3 flex w-full flex-col items-start">
        <label htmlFor="newPassword" className="label-title">
          New Password
        </label>
        <div className="input-field bg-white">
          <input
            type={showNewPassword ? "text" : "password"}
            id="newPassword"
            placeholder="**************"
            className="w-40 bg-transparent outline-none focus:outline-none"
            style={{ width: "100%" }}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="button" onClick={toggleNewPasswordVisibility} className="text-gray-500">
            {showNewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      </div>

      <div className="mb-3 flex w-full flex-col items-start">
        <label htmlFor="confirmPassword" className="label-title">
          Confirm Password
        </label>
        <div className="input-field bg-white">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="**************"
            className="w-40 bg-transparent outline-none focus:outline-none"
            style={{ width: "100%" }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="button" onClick={toggleConfirmPasswordVisibility} className="text-gray-500">
            {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white disabled:opacity-50"
      >
        {loading ? "PROCESSING..." : "SAVE AND CONTINUE"}
      </button>
    </form>
  )
}
