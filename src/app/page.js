import {Heading,Text,Stack} from "@chakra-ui/react"
import Container from "@/components/ui/Container"

export default function HomePage(){
  return(
    <Container>
      <Stack spacing={6} py={10}>
        <Heading size="lg">LexFiscal</Heading>
        <Text>
          Plataforma informativa para la consulta estructurada de tributos
          nacionales en Colombia, con enfoque descriptivo y no interpretativo.
        </Text>
        <Text>
          El contenido presentado no constituye asesoría tributaria ni sustituye
          fuentes normativas oficiales.
        </Text>
      </Stack>
    </Container>
  )
}




