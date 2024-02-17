import "@/styles/globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
