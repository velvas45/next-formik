import "./globals.css";
import { Inter } from "next/font/google";
import { DefaultLayout } from "@/component/containers/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login with Formik",
  description: "Login page with formik",
};

export default function RootLayout({ children }) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
