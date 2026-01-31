"use client"

import { Box, Grid } from "@chakra-ui/react"

export default function Container({children}){
  return(
    <Box
      maxW="1200px"
      mx="auto"
      px={{base:4,md:6}}
      py={{base:4, md:6}}
    >
      <Grid templateColumns={{base: "1fr", md: "1fr 280px"}} gap={6}>
        <Box bg={{base: "transparent", md: "white"}} p={{base:0, md:6}} borderRadius="md" boxShadow={{md: "sm"}}>
          {children}
        </Box>

        {/* Columna lateral: visible solo en pantallas >= md. Ideal para anuncios, links o recursos. */}
        <Box display={{base: "none", md: "block"}}>
          <Box borderWidth="1px" borderRadius="md" p={4} color="gray.600">
            Espacio lateral — recursos, enlaces o publicidad
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}
