import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { GrNotes } from "react-icons/gr";
import { TiPrinter } from "react-icons/ti";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { TbReportAnalytics, TbReceiptTax } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa";

const menuItems = [
  { label: "Home", icon: <FiHome />, href: "#" },
  { label: "Payouts", icon: <GoArrowUpRight />, href: "#" },
  { label: "Account Statement", icon: <GrNotes />, href: "#" },
  { label: "Contacts", icon: <RxPerson />, href: "#" },
  {
    label: "Loans",
    icon: <MdOutlineCurrencyRupee />,
    href: "#",
    badge: "NEW",
    badgeColor: "bg-green-700",
  },
  {
    label: "Vendor Payment",
    icon: <TbReceiptTax />,
    href: "#",
    badge: "NEW",
    badgeColor: "bg-green-700",
    subText: "Invoice Approval →",
    subTextColor: "text-blue-400",
  },
  { label: "Tax Payment", icon: <RiBillLine />, href: "#" },
  { label: "Payout Links", icon: <IoIosSend />, href: "#" },
  { label: "Payroll", icon: <TiPrinter />, href: "#" },
  { label: "Reports", icon: <TbReportAnalytics />, href: "#" },
];

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
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="group relative hover:text-zinc-100 hover:bg-hoverColor p-2"
              >
                <a
                  href={item.href}
                  className="flex items-center gap-3 text-navFont font-Popins"
                >
                  {item.icon}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span
                          className={`ml-2 text-[0.67rem] h-4 flex items-center px-2 w-fit rounded-xl ${item.badgeColor} text-white`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.subText && (
                      <span className={`text-[0.8rem] ${item.subTextColor}`}>
                        {item.subText}
                      </span>
                    )}
                  </div>
                </a>
                <span className="absolute top-0 left-0 h-full w-[3px] bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-r"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
