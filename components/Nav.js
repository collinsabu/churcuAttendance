"use client"
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import SideBar from "./SideBar";



const Nav =  ({user}) => {

  const [isOpen, setIsOpen] = useState(true); // Change initial state to false

  const handleToggle = () => {
    // Toggle the current state between true and false
    setIsOpen(!isOpen);
    console.log("clicked")
  };
  
  return (
    <>
    <nav className="z-10 bg-green-300 h-[70px] w-full mb-2  flex justify-between items-center px-6 sm:px-12">
      <h1 className="font-bold text-bg-green sm:text-xl text-md"><Link href={'/'}>CHURCH ATTENDANCE</Link></h1>
      <div>
        <ul className="flex items-center sm:gap-5 gap-2  sm:text-bg-green sm:text-xl text-md font-semibold text-red-700">
          <li className="hidden sm:block ">
            <Link href="/">Home</Link>
          </li>
          <li className="hidden sm:block ">
            <Link href="/attendance">StartCount</Link>
          </li>
        
        </ul>
      </div>
      <div>
        <span className="font-bold text-2xl text-red-700 hidden sm:block">Welcome back:<p className="text-bg-green inline text-xl font-semibold">  {user.email} </p></span>
        <p className="inline font-semibold  "></p>{" "}
      </div>
      
      <button onClick={handleToggle} className="sm:hidden">{isOpen ? <MdClose className=" text-5xl text-red-700 " /> : <MdMenu className=" text-5xl text-red-700 "/>}</button>
    </nav>
    <SideBar isOpen={isOpen}/>
  
    </>
  );
};

export default Nav;
