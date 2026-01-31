"use client"

import { Box, Text, HStack } from "@chakra-ui/react"
import { FaRegCopyright } from "react-icons/fa"

export default function Footer(){
  return(
    <Box borderTop="1px solid" borderColor="gray.200" mt={10} py={6} bg="transparent">
      <HStack maxW="1200px" mx="auto" px={{base:4, md:6}} justify="center" spacing={3}>
        <FaRegCopyright />
        <Text fontSize="sm" color="gray.600">
          LexFiscal · Proyecto informativo sin carácter oficial
        </Text>
      </HStack>
    </Box>
  )
}
