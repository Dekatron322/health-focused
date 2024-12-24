import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "components/Button/Button"
import AuthProviders from "components/ProvidersComponents/AuthProviders"
import { NavLinks } from "utils"

const Navbar = () => {
  const session = null
  return (
    <nav className="paddings navbar flex items-center justify-between">
      <div className=" ">
        <div className="flex items-center  gap-2">
          <Image className="max-md:hidden" src="/images/logo.png" width={24} height={40} alt="smup" />
          <Image className="md:hidden" src="/images/logo.png" width={35} height={40} alt="smup" />
          <p className="inter-font font-extrabold text-black max-md:hidden  max-md:px-4 max-md:text-[26px]  md:text-2xl">
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
            <Button href="#" className="mr-3">
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
