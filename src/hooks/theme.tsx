import { useEffect, useState } from "react";
export type Theme = "light" | "dark";

type Hook = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

/* Dark theme enable by default */
export const useTheme = (): Hook => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "dark",
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, setTheme]);

  return { theme, setTheme };
};
