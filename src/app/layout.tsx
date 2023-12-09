import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/main.css'
import Head from "next/head";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import toast, { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'SEO Agency',
  icons: {
    icon: '/fabicon.png', // /public path
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MainNav/>
      <Toaster position="bottom-right" />
      {children}
      <Footer/>
      </body>
    </html>
  )
}
