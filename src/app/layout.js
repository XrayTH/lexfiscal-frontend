import ClientLayout from "./client-layout"

export const metadata={
  title:"LexFiscal",
  description:"Plataforma informativa tributaria"
}

export default function RootLayout({children}){
  return(
    <html lang="es">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


