export enum ModeTheme {
  KEY = "theme_mode",
  DARK = "darkTheme",
  LIGHT = "lightTheme",
  OS = "osDefault",
}

export function SwitchModeTheme(mode: "light" | "dark" | "os") {
  switch (mode) {
    case "dark":
      localStorage.setItem(ModeTheme.KEY, ModeTheme.DARK);
      break;

    case "light":
      localStorage.setItem(ModeTheme.KEY, ModeTheme.LIGHT);
      break;

    case "os":
      localStorage.setItem(ModeTheme.KEY, ModeTheme.OS);
      break;
  }
}

export function useLoadTheme() {
  const currentMode = localStorage.getItem(ModeTheme.KEY);
  if (
    currentMode === ModeTheme.DARK ||
    (!currentMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
