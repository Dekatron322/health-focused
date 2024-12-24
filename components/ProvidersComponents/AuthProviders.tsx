import Link from "next/link"
import React from "react"
import { Button } from "components/Button/Button"

const AuthProviders = () => {
  return (
    <Button href="/signin" className="mr-3">
      Login
    </Button>
  )
}

export default AuthProviders
