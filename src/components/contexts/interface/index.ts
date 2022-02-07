export interface themeContextInter {
  isLightTheme: boolean;
  dark: nestedObject;
  light: nestedObject;
}

interface nestedObject {
  syntac: string;
  ui: string;
  bg: string;
}
