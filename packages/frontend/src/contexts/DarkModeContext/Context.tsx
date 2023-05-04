import { createContext } from "react";

export type DarkModeContext = {
  isDarkMode: boolean;
  toggleIsDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContext>({
  isDarkMode: true,
  toggleIsDarkMode: () => ({}),
});
