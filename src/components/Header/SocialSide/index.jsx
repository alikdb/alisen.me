import { socialMedias } from "@/utils/constants";
import Link from "next/link";
const SocialSide = () => {
  return (
    <div className="flex gap-x-5">
      {socialMedias.map((s, index) => (
        <Link href={s.to} key={index} target="_blank">
          <span className="transition-colors hover:text-gray-200">
            {s.icon}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SocialSide;
