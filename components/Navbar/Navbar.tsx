import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "components/Button/Button"
import AuthProviders from "components/ProvidersComponents/AuthProviders"
import { NavLinks } from "utils"

const Navbar = () => {
  const session = null
  return (
    <nav className="flexBetween navbar">
      <div className=" gap-7">
        <div className="flex items-center gap-2">
          <Image className="max-md:hidden" src="/images/logo.png" width={46} height={50} alt="smup" />
          <p className="inter-font font-extrabold max-md:px-4 max-md:text-center max-md:text-[26px]  md:text-4xl">
            Health Focused{" "}
          </p>
        </div>
      </div>

      <div className="flexCenter gap-10">
        <div>
          <ul className="text-small hidden gap-10  xl:flex">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
        {session ? (
          <>
            UserPhoto
            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              go to dashboard
            </Button>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar
