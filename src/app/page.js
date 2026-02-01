import { Heading, Text, Stack, Box } from "@chakra-ui/react"
import Container from "@/components/ui/Container"

export const metadata = {
  title: "LexFiscal",
  description: "Plataforma informativa para la consulta estructurada de tributos nacionales en Colombia"
}

export default function HomePage(){
  return(
    <Container>
      <Stack spacing={6} py={10}>
        <Heading size="xl" fontWeight="bold" borderBottom="1px solid" borderColor="gray.200" textUnderlineOffset="6px">LexFiscal</Heading>
        <Text py={2}>
          LexFiscal es una plataforma de referencia diseñada para ofrecer información
          clara, estructurada y de fácil acceso sobre los tributos nacionales que
          operan en Colombia. Nuestro objetivo es facilitar la búsqueda de definiciones,
          hechos generadores, sujetos, bases gravables y tarifas en un formato
          homogéneo y navegable.
        </Text>
        <Text py={2}>
          El contenido tiene carácter informativo y no constituye asesoría legal o tributaria.
          Para interpretaciones específicas y efectos jurídicos, consulte fuentes normativas
          oficiales o asesores especializados.
        </Text>

        <Box borderWidth="5px" borderRadius="md" p={5} bg="gray.50" py={5}>
          <Text fontWeight="semibold">¿Qué encontrarás aquí?</Text>
          <Text fontSize="sm" color="gray.600">Resúmenes técnicos, fichas por tributo y enlaces a la normativa aplicable. Ideal para investigación y consulta rápida.</Text>
        </Box>
      </Stack>
    </Container>
  )
}




