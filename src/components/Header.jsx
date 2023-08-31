import { useEffect, useRef, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark" 

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      //para que se mantenga cuando recargo pagina
      localStorage.setItem("theme","dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light")

    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8 transition-all duration-1000 container mx-auto px-4  mt-8 md:max-w-xl" >
      <div className="flex justify-between">
        <h1 className="uppercase text-white tracking-[0.3em] text-3xl  font-semibold">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};
export default Header;
