"use client"

import Providers from "./providers"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Flex, Box } from "@chakra-ui/react"

export default function ClientLayout({children}){
  return(
    <Providers>
      <Flex direction="column" minH="100vh">
        <Navbar/>
        <Box as="main" flex="1">
          {children}
        </Box>
        <Footer/>
      </Flex>
    </Providers>
  )
}
