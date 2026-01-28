"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@/theme/theme"

export default function Providers({children}){
  return(
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  )
}

