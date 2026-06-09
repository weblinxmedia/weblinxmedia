// src/components/sections/ThemeProvider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    // Force defaultTheme to dark and disable switching
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      forcedTheme="dark" // This locks it
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}