import { uses } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import Page from "../Page";
const UsesComponent = () => {
  return (
    <Page title="Uses" className="pb-16">
      <Image
        src="/setup.jpeg"
        alt="Workspace | 1"
        className="object-cover w-2/3 rounded-lg snap-center md:w-full md:snap-align-none"
        width={756}
        height={1008}
        loading="lazy"
      />
      <h2 className="mt-8 text-lg font-bold text-white md:text-2xl">
        Hardware
      </h2>
      <ul className="mt-4 space-y-2">
        {uses.items.map((app, index) => (
          <li key={index}>
            <span className="text-sm text-gray-300 md:text-base ">
              {app.link ? (
                <Link
                  className="text-purple-400 hover:underline"
                  href={app.link}
                >
                  {app.name}
                </Link>
              ) : (
                app.name
              )}
            </span>{" "}
            - <span>{app.description}</span>
          </li>
        ))}
      </ul>
      <h2 className="mt-8 text-lg font-bold text-white md:text-2xl">
        Software
      </h2>
      <ul className="mt-4 space-y-2">
        {uses.apps.map((app, index) => (
          <li key={index}>
            <span className="text-sm text-gray-300 md:text-base">
              {app.link ? (
                <Link
                  className="text-purple-400 hover:underline"
                  href={app.link}
                >
                  {app.name}
                </Link>
              ) : (
                app.name
              )}
            </span>{" "}
            - <span>{app.description}</span>
          </li>
        ))}
      </ul>
    </Page>
  );
};

export default UsesComponent;
