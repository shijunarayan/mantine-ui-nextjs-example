"use client";

import { useState } from "react";

import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";

export function Providers({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            brand: [
              "#E3D2BC",
              "#DEC29A",
              "#E1B376",
              "#EBA84C",
              "#FF9F1C",
              "#E58F19",
              "#BC7E29",
              "#9C6F32",
              "#836337",
              "#6F5838",
            ],
            secondary: [
              "#D9D6F2",
              "#B7B0EE",
              "#9387F2",
              "#6A57FF",
              "#5B49EB",
              "#5140D5",
              "#4B3DBC",
              "#4D429E",
              "#4B4486",
              "#484373",
            ],
            accent: [
              "#C8E2ED",
              "#A3D4EB",
              "#7ACBF0",
              "#4AC6FF",
              "#3EB4EA",
              "#37A2D3",
              "#3B8FB5",
              "#407C98",
              "#416D81",
              "#41606E",
            ],
            complementary: [
              "#505B66",
              "#46535F",
              "#3D4B59",
              "#344454",
              "#2C3E50",
              "#2B3845",
              "#29323C",
              "#262D34",
              "#24292E",
              "#1E2123",
            ],
            neutral: [
              "#FFFFFF",
              "#E6E6E6",
              "#CFCFCF",
              "#BABABA",
              "#A7A7A7",
              "#979797",
              "#888888",
            ],
          },
          primaryColor: "brand",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
