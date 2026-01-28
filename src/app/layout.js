import Providers from "./providers"

export const metadata={
  title:"LexFiscal",
  description:"Plataforma informativa tributaria"
}

export default function RootLayout({children}){
  return(
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}


