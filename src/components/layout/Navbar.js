"use client"

import { Box, Flex, Link, HStack, Heading } from "@chakra-ui/react"
import NextLink from "next/link"
import { FaBalanceScale } from "react-icons/fa"

export default function Navbar(){
  return(
    <Box bg="white" borderBottom="1px solid" borderColor="gray.200" boxShadow="sm">
      <Flex maxW="1200px" mx="auto" px={{base:4, md:6}} py={3} align="center" justify="space-between">
        <HStack spacing={3} align="center">
          <Heading as="span" size="md" display="flex" alignItems="center" gap={2}>
            <FaBalanceScale color="#1e6fb8" />
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }} fontWeight="bold">LexFiscal</Link>
          </Heading>
        </HStack>

        <HStack spacing={4} display={{base:"none", md:"flex"}}>
          <Link as={NextLink} href="/tributes" _hover={{ color: "brand.500" }}>Tributos</Link>
          <Link as={NextLink} href="/framework" _hover={{ color: "brand.500" }}>Marco normativo</Link>
        </HStack>
      </Flex>
    </Box>
  )
}
