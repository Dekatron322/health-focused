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
  TradingIcon,
  TransactionsIcon,
} from "./Icons"
import { useState } from "react"
import { Box, Skeleton } from "@mui/material"

const links = [
  { name: "DASHBOARD", href: "/dashboard", icon: DashboardIcon },
  {
    name: "SERVICE USERS",
    href: "/service-users",
    icon: AccountsIcon,
  },
  { name: "PLACEMENT", href: "/placement", icon: CardsIcon },
  { name: "STAFF", href: "/staff", icon: TransactionsIcon },
  { name: "LOCAL AUTHORITIES", href: "/authorities", icon: PaymentIcon },
  { name: "POLICY DOCUMENTS", href: "/policy", icon: InvoicingIcon },
  { name: "SETTINGS", href: "/settings", icon: TradingIcon },
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
