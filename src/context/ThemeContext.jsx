import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }) {
  const [darkThemeIsActive, setDarkThemeIsActive] = useState(false);

  function handleTheme() {
    setDarkThemeIsActive(!darkThemeIsActive);
    localStorage.setItem("theme", JSON.stringify(!darkThemeIsActive));
  }

  useEffect(() => {
    if (darkThemeIsActive) {
      document.documentElement.style.setProperty(
        "--backgroud-color",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--font-color",
        "var(--branco-primario)"
      );
      return;
    }
    document.documentElement.style.setProperty(
      "--backgroud-color",
      "var(--branco-primario)"
    );
    document.documentElement.style.setProperty(
      "--font-color",
      "var(--preto-primario)"
    );
  }, [darkThemeIsActive]);

  return (
    <ThemeContext.Provider value={{ darkThemeIsActive, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
