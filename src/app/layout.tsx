import Env from "@src/config/environment";
import "../global/styles/globals.css";
import { manrope, roboto} from "@src/fonts";
import type { Metadata, Viewport } from "next";
import GlobalProvider from "@src/providers";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: Env.NEXT_PUBLIC_APP_NAME,
  icons: "/favicon.png",
  description: Env.NEXT_PUBLIC_APP_DESCRIPTION,
  keywords: [
    "Nextjs Template",
    "Nextjs Template [Angola]",
    "Nextjs Template [Tecnologia]",
  ],
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body className={`${manrope.variable} ${roboto.variable} antialiased`}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
