"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { CacheProvider } from "@emotion/react"
import emotionCache from "@/theme/emotionCache"
import { system } from "@/theme/theme"

export default function Providers({children}){
  return(
    <CacheProvider value={emotionCache}>
      <ChakraProvider value={system}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}


