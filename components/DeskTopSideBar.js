"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { SiPivotaltracker } from "react-icons/si";
import { MdGroups2 } from "react-icons/md";
import { GiPeaceDove } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import LogoutButton from './LogOut';

export default function SideBar({isOpen}) {
  return  (
    <>
          <nav className="position: fixed  sm:left-4 left-1 top-[79px] sm:bottom-4  sm:bg-white bg-green-300  sm:w-[20%] w-[70%] sm:rounded-2xl rounded-[40px] sm:pt-10 pt-4 px-4  items-center  pb-7 sm:pb-0 hidden sm:flex flex-col ">
        <div className="overflow-hidden w-[95%] sm:h-[200px] rounded-2xl ">
          <Image
            src="/images/bg2.jpg"
            width={300}
            height={400}
            alt="church image"
          />
        </div>

        <div className="w-[100%] sm:mt-10 mt-2 flex flex-col items-center">
          <div>
            <Link href="/attendance">
              <div className="sm:bg-slate-400 bg-bg-green py-3 h-10 sm:px-[90px] px-[50px] flex items-center font-bold text-md hover:bg-bg-green text-white hover:text-white my-5 sm:mb-7">
                <span className="mr-2">
                  <FaHome />
                </span>{" "}
                Attendance
              </div>
            </Link>


            <Link href="">
              <div className="sm:bg-slate-400 bg-bg-green py-3 h-10 w-[100%] flex justify-center items-center font-bold text-md hover:bg-bg-green text-white hover:text-white my-5 sm:my-7">
                <span className="mr-2">
                  <SiPivotaltracker />
                </span>
                Soul Tracker
              </div>
            </Link>

            <Link href="">
              <div className="sm:bg-slate-400 bg-bg-green py-3 h-10 w-[100%] flex justify-center items-center  font-bold text-md hover:bg-bg-green text-white hover:text-white my-5 sm:my-7">
                <span className="mr-2">
                  <MdGroups2 />
                </span>
                View Member
              </div>
            </Link>

            <LogoutButton/>
          </div>
        </div>

        <div className="bg-bg-green mt-6 h-[90px] w-full mb-3 text-white text-[60px] sm:flex justify-center items-center rounded-b-[20px]  ">
          <GiPeaceDove />
        </div>
      </nav>
    </>
  )
}
