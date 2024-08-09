"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { SiPivotaltracker } from "react-icons/si";
import { MdGroups2 } from "react-icons/md";
import LogoutButton from "./LogOut";

export default function SideBar({ isOpen }) {
  // Add state to track if the sidebar is being closed
  const [isClosing, setIsClosing] = React.useState(false);

  // Handle closing animation
  React.useEffect(() => {
    if (!isOpen) {
      setIsClosing(true);
      const timeoutId = setTimeout(() => setIsClosing(false), 300); // Match duration of the slide-out animation
      return () => clearTimeout(timeoutId); // Clear timeout if component unmounts
    }
  }, [isOpen]);

  // Return null if sidebar is not open and closing animation is not in progress
  if (!isOpen && !isClosing) return null;

  return (
    <>
      <nav
        className={`fixed sm:left-4 left-1 top-[79px] sm:bottom-4 sm:bg-white bg-green-300 sm:w-[20%] w-[70%] sm:rounded-2xl rounded-[40px] sm:pt-10 pt-4 px-4 flex-col items-center pb-7 sm:pb-0 sm:hidden transition-transform duration-300 ${
          isOpen ? "animate-slideIn" : "animate-slideOut"
        }`}
      >
        <div className="overflow-hidden w-[95%] sm:h-[200px] rounded-2xl">
          <Image
            src="/images/bg2.jpg"
            width={300}
            height={400}
            alt="church image"
          />
        </div>

        <div className="w-[100%] sm:mt-10 mt-2 flex flex-col items-center">
          <div className="sm:my-7">
            <Link href="/attendance">
              <div className="sm:bg-slate-400 bg-bg-green py-3 h-10 sm:px-[90px] px-[50px] flex items-center font-bold text-md hover:bg-bg-green text-white hover:text-white my-5 sm:mb-7">
                <span className="mr-2">
                  <FaHome />
                </span>
                Attendance
              </div>
            </Link>

            <Link href="/firsttimerlist">
              <div className="sm:bg-slate-400 bg-bg-green py-3 h-10 w-[100%] flex justify-center items-center font-bold text-md hover:bg-bg-green text-white hover:text-white my-5 sm:my-7">
                <span className="mr-2">
                  <MdGroups2 />
                </span>
                First Timer
              </div>
            </Link>

            <Link href="/soultracker">
              <div className="sm:bg-slate-400 bg-bg-green py-3 h-10 w-[100%] flex justify-center items-center font-bold text-md hover:bg-bg-green text-white hover:text-white my-5 sm:my-7">
                <span className="mr-2">
                  <SiPivotaltracker />
                </span>
                Soul Tracker
              </div>
            </Link>

            <LogoutButton />
          </div>
        </div>
      </nav>

      {/* Adding keyframes for the slide-in and slide-out animations */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }

        .animate-slideOut {
          animation: slideOut 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
