"use client"

import {Box,Text} from "@chakra-ui/react"

export default function Footer(){
  return(
    <Box borderTop="1px solid" borderColor="gray.200" mt={10} py={4}>
      <Text fontSize="sm" textAlign="center" color="gray.600">
        LexFiscal · Proyecto informativo sin carácter oficial
      </Text>
    </Box>
  )
}
