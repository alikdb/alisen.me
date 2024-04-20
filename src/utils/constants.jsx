import { Github, Linkedin } from "lucide-react";
const socialMedias = [
  {
    name: "Github",
    to: "https://github.com/alikdb",
    icon: <Github />,
  },
  {
    name: "Linkedin",
    to: "https://www.linkedin.com/in/alikdb/",
    icon: <Linkedin strokeWidth={1.3} />,
  },
];
const email = "hello@alisen.me";
const navItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Uses",
    to: "/uses",
  },
];

export { email, navItems, socialMedias };
