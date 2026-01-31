"use client"

import {Box,Heading,Text,Stack,Link} from "@chakra-ui/react"
import NextLink from "next/link"

export default function TributeCard({tribute}){
  return(
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <Stack spacing={2}>
        <Heading size="md">
          <Link as={NextLink} href={`/tributes/${tribute.slug}`}>
            {tribute.name}
          </Link>
        </Heading>
        <Text fontSize="sm">Tipo: {tribute.type}</Text>
        <Text fontSize="sm">Ámbito: {tribute.scope}</Text>
      </Stack>
    </Box>
  )
}
