import { useState } from "react";
import Typed from "react-typed";
import Link from "next/link";

import me from "../../selfdata/me.json";

import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiTwitterLine,
} from "react-icons/ri";

const Welcome = () => {
  const imStrings = me.personal_data.typed_texts;

  return (
    <div className="h-[100vh] bg-[#010e1b] px-[9rem]">
      <div className="container mx-auto h-full">
        <div className="flex justify-center h-full flex-col">
          <h1 className="text-white font-bold text-[38px]">
            {me.personal_data.name}
          </h1>
          <div className="text-white text-[20px]">
            <span>I`m </span>
            <Typed
              strings={imStrings}
              className="text-primary border-b-2 border-primary pb-2"
              loop
              backSpeed={50}
              typeSpeed={40}
            ></Typed>
          </div>
          <div>
            <nav>
              <ul className="flex space-x-4 mt-6 text-white">
                <li className="nav-item nav-item-active">
                  <Link href={"/"}>Home</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <ul className="flex space-x-4 mt-10 text-white">
              {me.social_media.github && (
                <li>
                  <Link href={me.social_media.github}>
                    <div className="h-10 w-10 rounded-full bg-[#ffffff1a] flex justify-center hover:bg-primary hover:text-black transition-all items-center">
                      <RiGithubLine />
                    </div>
                  </Link>
                </li>
              )}
              {me.social_media.linkedin && (
                <li>
                  <Link href={me.social_media.linkedin}>
                    <div className="h-10 w-10 rounded-full bg-[#ffffff1a] flex justify-center hover:bg-primary hover:text-black transition-all items-center">
                      <RiLinkedinBoxLine />
                    </div>
                  </Link>
                </li>
              )}
              {me.social_media.instagram && (
                <li>
                  <Link href={me.social_media.instagram}>
                    <div className="h-10 w-10 rounded-full bg-[#ffffff1a] flex justify-center hover:bg-primary hover:text-black transition-all items-center">
                      <RiInstagramLine />
                    </div>
                  </Link>
                </li>
              )}
              {me.social_media.twitter && (
                <li>
                  <Link href={me.social_media.twitter}>
                    <div className="h-10 w-10 rounded-full bg-[#ffffff1a] flex justify-center hover:bg-primary hover:text-black transition-all items-center">
                      <RiTwitterLine />
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
