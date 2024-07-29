import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { GrNotes } from "react-icons/gr";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`h-screen bg-primaryColor ${
        isOpen ? "w-60" : "w-0"
      } transition-width duration-300 md:w-60`}
    >
      <nav className="flex flex-col gap-3">
        <div className="flex justify-between items-center p-4 md:hidden">
          <img
            src={Logo}
            alt="razorpay logo"
            width={isOpen ? 120 : 0}
            className="transition-opacity duration-300"
          />
          <button onClick={toggleSidebar}>
            {isOpen ? (
              <FiX className="text-zinc-400" size={24} />
            ) : (
              <FiMenu className="text-zinc-400" size={24} />
            )}
          </button>
        </div>
        <div
          className={`flex flex-col gap-1 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="p-4">
            <img src={Logo} alt="razorpay logo" width={120} />
          </div>
          <ul className="text-zinc-400 flex flex-col gap-3">
            <li className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2">
              <a
                href="#"
                className="flex ml-2 gap-3 text-navFont font-Popins items-center"
              >
                <FiHome />
                Home
              </a>
              <span className="absolute top-[7.8px] left-0 h-6 w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
            </li>
            <li className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2">
              <a
                href="#"
                className="flex ml-2 gap-2 text-navFont font-Popins items-center"
              >
                <GoArrowUpRight />
                Payouts
              </a>
              <span className="absolute top-[7.8px] left-0 h-6 w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
            </li>
            <li className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2">
              <a
                href="#"
                className="flex ml-2 gap-3 text-navFont font-Popins items-center"
              >
                <GrNotes />
                Account Statement
              </a>
              <span className="absolute top-[7.8px] left-0 h-6 w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
            </li>
            <li className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2">
              <a
                href="#"
                className="flex ml-2 gap-3 text-navFont font-Popins items-center"
              >
                <RxPerson />
                Contacts
              </a>
              <span className="absolute top-[7.8px] left-0 h-6 w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
            </li>
          </ul>
          <div className="bg-hoverColor h-[1px] w-full mt-3"></div>
          <ul className="font-Popins text-zinc-400 flex flex-col gap-3 mt-3">
            <li className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2">
              <a
                href="#"
                className="flex ml-2 gap-3 text-navFont font-Popins items-center"
              >
                <MdOutlineCurrencyRupee />
                <div className="flex items-center gap-2">
                  Loans
                  <span className="text-[0.67rem] h-4 flex items-center px-2 w-fit rounded-xl bg-green-700 text-white">
                    NEW
                  </span>
                </div>
              </a>
              <span className="absolute top-[7.8px] left-0 h-6 w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
            </li>
            <li className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2">
              <a
                href="#"
                className="flex ml-2 items-center gap-3 text-navFont font-Popins"
              >
                <MdOutlineCurrencyRupee />
                <div className="flex flex-col gap-1">
                  <span>Loans</span>
                  <span className="flex items-center gap-1 text-[0.8rem]">
                    <span className="text-[0.67rem] h-4 px-2 w-fit flex items-center rounded-xl bg-green-700 text-white">
                      NEW
                    </span>
                    <span className="text-blue-400 cursor-pointer"> Invoice Approval →</span>
                  </span>
                </div>
              </a>
              <span className="absolute top-0 left-0 h-full w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
            </li>
            <li className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2">
              <a
                href="#"
                className="flex ml-2 gap-3 text-navFont font-Popins items-center"
              >
                <RxPerson />
                Tax Payment
              </a>
              <span className="absolute top-[7.8px] left-0 h-6 w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
            </li>
            <li className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2">
              <a
                href="#"
                className="flex ml-2 gap-3 text-navFont font-Popins items-center"
              >
                <RxPerson />
                Payout Links
              </a>
              <span className="absolute top-[7.8px] left-0 h-6 w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
            </li>
            <li className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2">
              <a
                href="#"
                className="flex ml-2 gap-3 text-navFont font-Popins items-center"
              >
                <RxPerson />
                Payroll
              </a>
              <span className="absolute top-[7.8px] left-0 h-6 w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
            </li>
            <li className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2">
              <a
                href="#"
                className="flex ml-2 gap-3 text-navFont font-Popins items-center"
              >
                <RxPerson />
                Reports
              </a>
              <span className="absolute top-[7.8px] left-0 h-6 w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
