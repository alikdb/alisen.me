"use client";
import { navItems } from "@/utils/constants";
import cx from "classix";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <ul className="flex text-lg gap-x-5">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={cx(
              "transition-all hover:text-gray-200",
              pathname == item.to ? "text-gray-200" : ""
            )}
          >
            <Link href={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
