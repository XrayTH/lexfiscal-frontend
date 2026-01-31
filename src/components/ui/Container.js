"use client"

import {Box} from "@chakra-ui/react"

export default function Container({children}){
  return(
    <Box
      maxW="1200px"
      mx="auto"
      px={{base:4,md:6}}
    >
      {children}
    </Box>
  )
}
