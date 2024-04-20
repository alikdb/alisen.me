"use client";
import { MoonStar, Sun } from "lucide-react";
const Theme = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.classList.add("dark");

  /*
  const [theme, setTheme] = useState("light");
  const clickHandler = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);
*/
  return <></>;

  return (
    <div className="cursor-pointer" onClick={() => clickHandler()}>
      {theme === "light" ? <MoonStar size={24} /> : <Sun size={24} />}
    </div>
  );
};

export default Theme;
