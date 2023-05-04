import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./Context";

type DarkModeProviderProps = {
  children: React.ReactNode;
};

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleIsDarkMode = () => {
    const isDarkModePreferred = localStorage.getItem("THEME") === "DARK";

    if (isDarkModePreferred) {
      setIsDarkMode(false);
      localStorage.setItem("THEME", "LIGHT");
    } else {
      setIsDarkMode(true);
      localStorage.setItem("THEME", "DARK");
    }
  };

  useEffect(() => {
    const isDarkModePreferred = localStorage.getItem("THEME") === "DARK";
    const isDarkModePreferredInSystem = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isThemeSet = "THEME" in localStorage;

    // 初回、システムがライトモードだったときライトモードに設定
    if (!isThemeSet && !isDarkModePreferredInSystem) {
      setIsDarkMode(false);
      return;
    }
    // 初回、システムがダークモードだったときダークモードに設定
    if (!isThemeSet && isDarkModePreferredInSystem) {
      setIsDarkMode(true);
      return;
    }

    // 二回目以降はローカルストレージの値を参照する
    if (isThemeSet && !isDarkModePreferred) {
      setIsDarkMode(false);
      return;
    }

    if (isThemeSet && isDarkModePreferred) {
      setIsDarkMode(true);
      return;
    }
  }, []);

  // システムの外観モードが変更されたときの処理
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const handlePreferredColorSchemeChange = (event: MediaQueryListEvent) => {
      const isThemeSet = "THEME" in localStorage;
      if (isThemeSet) return;
      setIsDarkMode(event.matches);
    };

    mediaQueryList.addEventListener("change", handlePreferredColorSchemeChange);
  }, []);
  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleIsDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
