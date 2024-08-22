import { Metadata } from "next"
import { Button } from "components/Button/Button"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"

export const metadata: Metadata = {
  title: "Dekalo Pay - Send & Receive Cash",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="">
        <Navbar />
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 mt-16 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-[red] md:text-5xl xl:text-6xl">
              Dekalo Pay - Send & Receive Cash
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-base lg:mb-8 lg:text-xl">
              Move your money across town, across Africa, or across an ocean the fast, easy and borderless way.
            </p>
            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              Get started
            </Button>
            <Button
              href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
              intent="secondary"
            >
              Deploy Now
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
