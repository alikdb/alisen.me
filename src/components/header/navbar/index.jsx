import Link from "next/link"
import Image from "next/image";
import {menus} from "@/libs/constants";

const Navbar = () => {
    return (
        <div className="container max-w-4xl mx-auto px-6">
            <nav className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image src="/me.jpeg" width="32" height="32" className="rounded-full opacity-100 mr-4"
                           loading="lazy"
                           alt={'me'}/>
                    <span className="font-bold">Ali Şen</span>
                </Link>
                <div>
                    <ul className="grid-flow-col gap-6 text-sm font-medium sm:grid">
                        {menus.map((val, key) => (
                            <li key={`menu-` + key}>
                                <Link href={val.to}
                                      className="flex items-center hover:text-gray-400 transition-colors">
                                    {val.icon}
                                    <span className="ml-1">
                                    {val.title}
                                    </span>
                                </Link>
                            </li>
                        ))}

                    </ul>
                    <div className="sm:hidden"></div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;