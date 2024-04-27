import SocialSide from "@/components/Header/SocialSide";
import Page from "@/components/Page";
import Link from "next/link";
const About = () => {
  return (
    <Page title="About Me" className="pb-16">
      <div className="text-base md:text-lg">
        <p>
          Experienced software developer with four years of expertise in web,
          mobile, and backend applications. I am the go-to person for ReactJS,
          React Native, NodeJS, and PHP. I believe I have a track record of
          consistently delivering top-notch projects and always strive for
          higher goals in my current role.
        </p>
        <br />
        <p>
          Adaptable and collaborative, I thrive in dynamic work environments and
          bring innovative solutions to each project to stay ahead of industry
          trends. I view coding not just as a job, but as a lifestyle!
        </p>
        <br />
        <p>Here&apos;s a little bit of my history:</p>
        <br />
        <ul className="ml-5 list-disc">
          <li>
            Fullstack Developer -{" "}
            <Link
              href="https://bulutsoft.com.tr"
              target="_blank"
              className="text-purple-400"
            >
              Bulutsoft
            </Link>{" "}
            (Jun 2022 - Present)
          </li>
          <li>
            PHP Developer -{" "}
            <Link
              href="https://waxajans.com"
              target="_blank"
              className="text-purple-400"
            >
              Wax Ajans
            </Link>{" "}
            (Sep 2021 - Jun 2022)
          </li>
        </ul>
        <div className="flex mt-8">
          <SocialSide />
        </div>
      </div>
    </Page>
  );
};

export const generateMetadata = () => {
  return {
    title: "About - alisen.me",
    description: "Software Developer.",
  };
};
export default About;
