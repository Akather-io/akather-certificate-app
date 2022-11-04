"use client";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "../GlobalContext";
import { Popover } from "@headlessui/react";
import { FaUserGraduate } from "react-icons/fa";
import LoadingSvg from "./LoadingSvg";
const NavBar = () => {
  const { isSignedIn, wallet } = useGlobalContext();
  return (
    <nav className="shadow-md shadow-sky-300/50 w-full bg-gradient-to-r from-cyan-100 to-sky-400 z-10">
      <div className="lg:container mx-auto flex items-center justify-between px-2">
        <div className="w-48 h-16 p-2 relative">
          <Image
            src="/assets/logo-akather.png"
            alt={"Akather Logo"}
            // width={1077}
            // height={350}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            priority
          />
        </div>
        <div>
          <ul className="flex gap-10 text-lg text-white/90 font-bold items-center">
            <li className="hover:text-indigo-500 transition-colors duration-300">
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li className="hover:text-indigo-500 transition-colors duration-300">
              <Link href={"/courses"}>Courses</Link>
            </li>

            {typeof isSignedIn === "undefined" ? (
              <LoadingSvg />
            ) : !isSignedIn ? (
              <li className="bg-black transition-colors duration-300 rounded-md px-3 py-1 hover:text-indigo-50">
                <button onClick={wallet.signIn} className="outline-none">
                  Login with NEAR
                </button>
              </li>
            ) : (
              <li>
                <Popover className="relative">
                  <Popover.Button className="outline-none">
                    <div className="bg-white/30 p-1 rounded-full w-10 h-10 flex justify-center items-center shadow">
                      <FaUserGraduate size={22} className="text-white " />
                    </div>
                  </Popover.Button>

                  <Popover.Panel className="absolute right-0 z-10 bg-white/90 rounded-md p-2">
                    <ul className="flex flex-col text-indigo-500 min-w-fit gap-2 cursor-pointer">
                      <li className="px-3 py-2 bg-black text-white text-center rounded-md">
                        {wallet.accountId}
                      </li>
                      <li className="hover:bg-gray-50 px-3 py-2">
                        <Link href={"/profile"}>Profile</Link>
                      </li>
                      <li className="hover:bg-gray-50 px-3 py-2">
                        <Link href={"/my-certificate"}>Certificates</Link>
                      </li>
                      <li
                        className="hover:bg-gray-50 p-1 border-t-2 border-t-gray-100 text-red-500"
                        onClick={wallet.signOut}
                      >
                        Logout
                      </li>
                    </ul>
                  </Popover.Panel>
                </Popover>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
