import Providers from "./providers"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata={
  title:"LexFiscal",
  description:"Plataforma informativa tributaria"
}

export default function RootLayout({children}){
  return(
    <html lang="es">
      <body>
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}


