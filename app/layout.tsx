import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/Theme";
import { ThemeSetting } from "./contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeSetting>
          <ThemeProvider theme={theme}>
            <body className={inter.className}>
              <CssBaseline />
              {children}
            </body>
          </ThemeProvider>
        </ThemeSetting>
      </AppRouterCacheProvider>
    </html>
  );
}
