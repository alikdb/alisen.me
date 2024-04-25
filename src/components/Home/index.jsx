import { email } from "@/utils/constants";
import Link from "next/link";
import Page from "../Page";
const Home = async () => {
  return (
    <Page title={"Hi there!"}>
      <p className="text-xl">
        Software Developer at{" "}
        <Link
          className="text-purple-400"
          href="https://bulutsoft.com.tr"
          target="_blank"
        >
          @bulutsoft
        </Link>
      </p>
      <p className="mt-3 text-xl">
        Previously I`ve been in Developer at{" "}
        <Link
          className="text-purple-400"
          href="https://waxajans.com"
          target="_blank"
        >
          @waxajans
        </Link>
      </p>
      <p className="mt-3 text-xl">
        <Link className="text-purple-400" href="/about">
          Learn more
        </Link>{" "}
        or{" "}
        <Link className="text-purple-400" href={`mailto:${email}`}>
          Contact me
        </Link>
      </p>
    </Page>
  );
};
export default Home;
