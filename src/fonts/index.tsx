import { Manrope, Roboto } from "next/font/google";

const manrope = Manrope({
   display: "swap",
   subsets: ["latin"],
   variable: "--font-manrope",
});

const roboto = Roboto({
   display: "swap",
   subsets: ["latin"],
   variable: "--font-roboto",
});

export {
   manrope,
   roboto,
}
