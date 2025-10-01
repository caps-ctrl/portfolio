import { useState } from "react";
import { motion } from "framer-motion";
import type { NavItem } from "../types/nav";
import { navData } from "../data/navData";
export const Navbar = () => {
  const [isActive, setActive] = useState<NavItem>("Home");
  return (
    <nav className="w-full  p-4">
      <div className="flex justify-between  px-[10rem]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Marcel Gusiew
        </h1>

        <ul className="flex gap-6  text-yellow-500 font-bold ">
          {navData.map((nav) => (
            <li
              className=" relative cursor-pointer"
              onClick={() => setActive(nav.name)}
            >
              {nav.name}
              <motion.span
                className="absolute left-0 -bottom-1 h-[3px] bg-yellow-500"
                initial={{ width: 0 }}
                animate={
                  isActive === nav.name ? { width: "100%" } : { width: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
