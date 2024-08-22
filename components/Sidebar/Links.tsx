"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AccountsIcon,
  CardsIcon,
  DashboardIcon,
  InvoicingIcon,
  PaymentIcon,
  ReportsIcon,
  TradingIcon,
  TransactionsIcon,
} from "./Icons"
import { useState } from "react"
import { Box, Skeleton } from "@mui/material"

const links = [
  { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  {
    name: "Accounts",
    href: "/accounts",
    icon: AccountsIcon,
  },
  { name: "Cards", href: "/cards", icon: CardsIcon },
  { name: "Transactions", href: "/transactions", icon: TransactionsIcon },
  { name: "Payment", href: "/payment", icon: PaymentIcon },
  { name: "Invoicing", href: "/invoicing", icon: InvoicingIcon },
  { name: "Trading", href: "/trading", icon: TradingIcon },
  { name: "Reports", href: "/reports", icon: ReportsIcon },
]

export function Links() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  const pathname = usePathname()
  return (
    <div className="flex h-full flex-row   border-black  lg:h-80 lg:flex-col">
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <>
            <Link
              key={link.name}
              href={link.href}
              className={clsx("dashboard-style", {
                "active-dashboard": pathname.startsWith(link.href),
              })}
            >
              <div className="flex items-center gap-2 pl-5">
                <LinkIcon />
                <p
                  className={clsx("hidden text-sm font-semibold lg:block", {
                    "font-extrabold": pathname.startsWith(link.href),
                  })}
                >
                  {link.name}
                </p>
              </div>
            </Link>
          </>
        )
      })}
    </div>
  )
}
