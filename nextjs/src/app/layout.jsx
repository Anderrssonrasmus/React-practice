'use client';

import "../app/globals.css";
import Navbar from "../components/navbar/navbar";

export const metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}