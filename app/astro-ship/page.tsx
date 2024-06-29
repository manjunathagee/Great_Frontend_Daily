("");

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdCloudDownload } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa6";
import { FaMailchimp } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { TbBrandAstro } from "react-icons/tb";
import { SiSvelte } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const AstroShip = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5">
        <header className="flex  justify-between items-center my-5">
          <div className="flex w-full lg:w-auto items-center justify-between">
            <Link href="/" className="text-lg">
              <span className="font-bold text-slate-800 ">Astro</span>
              <span className="text-slate-600 ">ship</span>
            </Link>
          </div>
          <nav className="hidden lg:flex w:full lg:w-auto lg:mt-0 mt-2 ">
            <ul className="flex justify-between items-center gap-2 w-full">
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    Features
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="mx-4 text-gray-500 hover:text-gray-800 hover:font-medium">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="mx-4 text-gray-500 hover:text-gray-800 hover:font-medium">
                <Link href="/about">About</Link>
              </li>
              <li className="mx-4 text-gray-500 hover:text-gray-800 hover:font-medium">
                <Link href="/bloc">Blog</Link>
              </li>
              <li className="mx-4 text-gray-500 hover:text-gray-800 hover:font-medium">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="mx-4 text-gray-500 hover:text-gray-800 hover:font-medium">
                <Link href="/pro-version">
                  <span>Pro Version</span>
                  <span className="bg-blue-500 rounded-2xl px-2 py-1 mx-1 text-white text-xs">
                    New
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <div className="hidden lg:flex gap-2">
              <button>Log in</button>
              <button className="bg-black text-white text-center border-2 border-transparent rounded px-4 py-2 hover:bg-gray-800">
                Sign up
              </button>
            </div>
            <div className="lg:hidden">
              <Drawer>
                <DrawerTrigger asChild>
                  <RxHamburgerMenu />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>
                      This action cannot be undone.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </header>
      </div>
      <div className="max-w-screen-xl mx-auto px-5">
        <main className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-6xl font-bold">
              Marketing website done with Astro
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Astroship is a starter template for startups, marketing websites &
              landing pages. Built with Astro.build and TailwindCSS. You can
              quickly create any website with this starter.
            </p>
            <div className="flex gap-2 mt-4">
              <button className="flex gap-1 items-center justify-between bg-black text-white rounded px-5 py-3 border border-transparent hover:bg-gray-800">
                <MdCloudDownload />
                <span>Download for Free</span>
              </button>
              <button className="flex gap-1 bg-transparent border-black justify-center items-center px-5 py-3 rounded border-2">
                <MdCode />
                <span>Github Repo</span>
              </button>
            </div>
          </div>
          <div className="text-center flex-1">
            <img src="/images/astro-ship/astronaut.svg" alt="astronaut" />
          </div>
        </main>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 mt-10 ">
        <h3 className="text-4xl font-bold tracking-wide my-4">
          Everything you need to start a website
        </h3>
        <p className="text-slate-600 text-lg">
          Astro comes batteries included. It takes the best parts of
          state-of-the-art tools and adds its own innovations.
        </p>
        <div className="grid grid-col-1 gap-5 lg:gap-14 lg:grid-cols-3 mt-12 ">
          <div className="flex gap-4">
            <div className="mt-2 text-lg">
              <FaBriefcase />
            </div>
            <div>
              <h5 className="text-xl font-medium">Bring Your Own Framework</h5>
              <p className="text-slate-600">
                Build your site using React, Svelte, Vue, Preact, web
                components, or just plain old HTML + JavaScript.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-2 text-lg">
              <FaClipboardList />
            </div>
            <div>
              <h5 className="text-xl font-medium">100% Static HTML, No JS</h5>
              <p className="text-slate-600">
                Astro renders your entire page to static HTML, removing all
                JavaScript from your final build by default.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-2 text-lg">
              <FaServer />
            </div>
            <div>
              <h5 className="text-xl font-medium">On-Demand Components</h5>
              <p className="text-slate-600">
                Need some JS? Astro can automatically hydrate interactive
                components when they become visible on the page.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-2 text-lg">
              <FaRobot />
            </div>
            <div>
              <h5 className="text-xl font-medium">Broad Integration</h5>
              <p className="text-slate-600">
                Astro supports TypeScript, Scoped CSS, CSS Modules, Sass,
                Tailwind, Markdown, MDX, and any other npm packages.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-2 text-lg">
              <FaSearchengin />
            </div>
            <div>
              <h5 className="text-xl font-medium">SEO Enabled</h5>
              <p className="text-slate-600">
                Automatic sitemaps, RSS feeds, pagination and collections take
                the pain out of SEO and syndication. It just works!
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-2 text-lg">
              <FaMailchimp />
            </div>
            <div>
              <h5 className="text-xl font-medium">Community</h5>
              <p className="text-slate-600">
                Astro is an open source project powered by hundreds of
                contributors making thousands of individual contributions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-slate-600 my-12 text-lg">
            Works with your technologies
          </p>
          <div className="flex w-full gap-16 justify-center items-center my-12">
            <div className="text-6xl">
              <FaReact />
            </div>
            <div className="text-6xl">
              <TbBrandAstro />
            </div>

            <div className="text-6xl">
              <SiSvelte />
            </div>

            <div className="text-6xl">
              <SiTailwindcss />
            </div>

            <div className="text-6xl">
              <SiPrisma />
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center my-10 mx-auto container">
        <div className="bg-black text-white rounded flex flex-col items-center justify-center text-center w-full p-16">
          <h6 className="text-6xl">Build faster websites.</h6>
          <p className="text-slate-500 mt-6 text-lg">
            Pupll content from anywhere and serve it faset with Astros next-gen
            island architecture.
          </p>
          <button className="bg-white text-black rounded px-5 py-3 mt-6 border border-transparent">
            Get Started
          </button>
        </div>
      </footer>
    </>
  );
};

export default AstroShip;
