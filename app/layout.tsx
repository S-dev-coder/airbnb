import { Nunito } from "next/font/google";

import './globals.css'
import Navbar from "./components/navbar/Navbar";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}
 
 const font =Nunito({
  subsets: ["latin"],
 });


 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar/>
        </ClientOnly>
        

        {children}</body>
    </html>
  )
}


