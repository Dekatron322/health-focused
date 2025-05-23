// components/Settings/BillingTab.tsx
"use client"

export const BillingTab = () => {
  return (
    <>
      <div className="mt-3 flex w-full flex-col rounded-md  bg-[#f5f5f5]  p-4">
        <p className="font-bold">Plan</p>
        <p className="mb-4 text-xs">Change your plan, update your billing info, and download your invoices</p>
        <p className="mb-4 text-xs">
          You are currently on the{" "}
          <a className="font-semibold underline" href="#">
            Premium subscription
          </a>
        </p>
        <div className="flex gap-3">
          <button
            type="submit"
            className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#0085FF] p-3 text-sm text-white"
          >
            CHANGE PLAN
          </button>

          <button
            type="submit"
            className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#0085FF] p-3 text-sm text-white"
          >
            CANCEL PLAN
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div className="mt-3 flex w-full flex-col rounded-md  bg-[#f5f5f5]  p-4">
          <p className="font-bold">Billing Details</p>
          <p className="mb-4 text-xs">Your next invoice is for GBP 352.80 on Jul 5, 2024, 10:30 GMT+1</p>
          <p className="text-sm font-bold">Name</p>
          <p className="mb-3 text-sm">Adeola Odeku</p>

          <p className="text-sm font-bold">Email Address:</p>
          <p className="mb-3 text-sm">adeola.odeku@primarycare.com</p>

          <p className="text-sm font-bold">Address:</p>
          <p className="mb-3 text-sm">Freedom Way, London, England FW5 789, United Kingdom</p>
          <div className="flex gap-3">
            <button
              type="submit"
              className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#0085FF] p-3 text-sm text-white"
            >
              CHANGE BILLING ADDRESS
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="mt-3 flex w-full flex-col rounded-md  bg-[#f5f5f5]  p-4">
          <p className="font-bold">Payment</p>
          <p className="mb-4 text-xs">Your next invoice is for GBP 352.80 on Jul 5, 2024, 10:30 GMT+1</p>
          <p className="text-sm font-bold">
            Card Details: <span className="font-normal">mastercard with last 4 digits - 1234</span>
          </p>
          <p className="text-sm font-bold">
            Name on Card: <span className="font-normal">Adrian Mutu</span>
          </p>
          <div className="flex gap-3">
            <button
              type="submit"
              className="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#0085FF] p-3 text-sm text-white"
            >
              CHANGE BILLING ADDRESS
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
