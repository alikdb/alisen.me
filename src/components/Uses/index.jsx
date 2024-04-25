import { uses } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import Page from "../Page";
const UsesComponent = () => {
  return (
    <Page title="Uses">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src="/setup.jpeg"
        alt="Workspace | 1"
        className="object-cover w-2/3 rounded snap-center md:w-full md:snap-align-none"
        width={756}
        height={1008}
        loading="eager"
        priority
      />
      <h2 className="mt-8 text-2xl font-bold text-white">Hardware</h2>
      <ul className="mt-4 space-y-2">
        {uses.items.map((app, index) => (
          <li key={index}>
            <span className="text-gray-300">
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
      <h2 className="mt-8 text-2xl font-bold text-white">Software</h2>
      <ul className="mt-4 space-y-2">
        {uses.apps.map((app, index) => (
          <li key={index}>
            <span className="text-gray-300">
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
