import { Github, Instagram, Linkedin, Mail } from "lucide-react";
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
  {
    name: "Instagram",
    to: "https://www.instagram.com/alikdb/",
    icon: <Instagram />,
  },
  {
    name: "Mail",
    to: "mailto:hello@alisern.me",
    icon: <Mail />,
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
  /*
  {
    name: "Bookmarks",
    to: "/bookmarks",
    disabled: true,
  },
  */
];

const uses = {
  items: [
    {
      name: 'Macbook Pro 13" 2020',
      description: "My daily driver for development and personal use.",
    },
    {
      name: "Apple Magic Pad Black",
      description: "For gestures and scrolling.",
    },
    {
      name: "Keychorn K2",
      description: "My favorite mechanical keyboard.",
    },
  ],
  apps: [
    {
      name: "Visual Studio Code",
      description: "My favorite code editor.",
    },

    {
      name: "MonoLisa",
      description: "My favorite font for coding.",
      link: "https://www.monolisa.dev/",
    },
    {
      name: "Tableplus",
      description: "Database management tool.",
    },
    {
      name: "iTerm2",
      description: "Terminal replacement for MacOS.",
    },
    {
      name: "HTTPie",
      description: "Command line HTTP client.",
    },
    {
      name: "OrbStack",
      description: "Docker alternative for MacOS.",
    },
  ],
};

export { email, navItems, socialMedias, uses };
