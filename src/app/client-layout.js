"use client"

import Providers from "./providers"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function ClientLayout({children}){
  return(
    <Providers>
      <Navbar/>
      {children}
      <Footer/>
    </Providers>
  )
}
