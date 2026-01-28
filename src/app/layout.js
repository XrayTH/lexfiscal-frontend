export const metadata={
  title:"LexFiscal",
  description:"API y plataforma informativa tributaria"
}

export default function RootLayout({children}){
  return(
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}

