"use client";
import { navItems } from "@/utils/constants";
import cx from "classix";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <ul className="flex text-base md:text-lg gap-x-5">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={cx(
              "transition-all hover:text-gray-200",
              pathname == item.to ? "text-gray-200" : "",
              item.disabled ? "text-gray-400 cursor-not-allowed" : ""
            )}
          >
            {item.disabled ? (
              <span>🔒 {item.name}</span>
            ) : (
              <Link
                className={cx(item.disabled ? "cursor-not-allowed" : "")}
                href={item.to}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
