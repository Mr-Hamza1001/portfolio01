"use client"
import { useState } from "react";
import Image from "next/image";
import { Link, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="sticky top-0 z-10 max-w-6xl mx-auto lg:max-w-3xl md:max-w-2xl sm:max-w-xl xs:max-w-lg bg-[#282C33]">
        <nav className=" flex justify-between p-6 mx-auto mt-6">
    
          <div className="flex gap-2  ">
            <Image src="/logo.svg" width={16} height={16} alt="logo" />
            <h1 className=" font-bold">Mosab</h1>
          </div>
          <div className="flex gap-8 md:hidden sm:hidden xs:hidden ts:hidden ">
            <div className="flex gap-0.5">
              <span className="text-primary">#</span>
              <Link href="/">home</Link>
            </div>
            <div className="flex gap-0.5">
              <span className="text-primary">#</span>
              <Link className="text-gray hover:text-white duration-500" href="/projects">work</Link>
            </div>
            <div className="flex gap-0.5">
              <span className="text-primary">#</span>
              <Link className="text-gray hover:text-white duration-500" href="/about">about-me</Link>
            </div>
            <div className="flex gap-0.5">
              <span className="text-primary">#</span>
              <Link className="text-gray hover:text-white duration-500" href="/contacts">contacts</Link> 
            </div>
            <div className="flex gap-0.5">
              <span className="text-primary">#</span>
              <Link className="text-gray" href="#">blog </Link> 
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className=" text-white hidden ts:block xs:block sm:block md:block">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
        {isOpen && (
          <div onClick={()=> setIsOpen(false)} className=" flex flex-col items-center gap-4 bg-[#1f2329] py-4 text-gray-400">
            <Link href="/">#home</Link>
            <Link href="/projects">#works</Link>
            <Link href="/about">#about-me</Link>
             <Link href="/contacts">#contacts</Link>
            <Link href="/blog">#blog</Link>
            <Image className="py-1" src="/frame 16.svg" width={32} alt="frame" />
          </div>
        )}

      </header>
      <div className="fixed md:hidden sm:hidden xs:hidden ts:hidden">
        <div className="flex flex-col relative w-28">
          <div className="border w-48 rotate-90 relative text-gray"></div>
          <div className="absolute mt-28 right-0">
            <Image className="py-1" src="/frame 16.svg" width={32} alt="frame" />
          </div>
        </div>
      </div>
    </div>
  )
}