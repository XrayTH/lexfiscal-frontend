"use client"

import {Box,Flex,Link} from "@chakra-ui/react"
import NextLink from "next/link"

export default function Navbar(){
  return(
    <Box borderBottom="1px solid" borderColor="gray.200">
      <Flex maxW="1200px" mx="auto" px={4} py={3} gap={6}>
        <Link as={NextLink} href="/">LexFiscal</Link>
        <Link as={NextLink} href="/tributes">Tributos</Link>
        <Link as={NextLink} href="/framework">Marco normativo</Link>
      </Flex>
    </Box>
  )
}
