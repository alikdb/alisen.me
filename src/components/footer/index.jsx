import Link from 'next/link';
import {socials} from "@/libs/constants";

const Footer = () => {
    return (
        <div className=" container max-w-4xl mx-auto px-6 border-t-[1px] dark:border-neutral-900">
            <div className="flex justify-between mt-5">
                <div>
                    <Link href="mailto:hello@alisen.me">
                        hello@alisen.me
                    </Link>
                </div>
                <div className="flex gap-x-2">
                    {socials.map((social, index) => (
                        <Link key={index} href={social.to} target="_blank">
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Footer;