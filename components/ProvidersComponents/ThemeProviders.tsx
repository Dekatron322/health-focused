"use client"
import { ThemeProvider } from "next-themes"
import React, { ReactNode, useEffect, useState } from "react"

interface ThemeProvidersProps {
  children: ReactNode
}

export default function ThemeProviders({ children }: ThemeProvidersProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeProvider>{children}</ThemeProvider>
}
