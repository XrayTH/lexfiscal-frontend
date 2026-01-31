import {Heading,Text,Stack} from "@chakra-ui/react"
import Container from "@/components/ui/Container"

export default function NotFound(){
  return(
    <Container>
      <Stack py={10} spacing={4}>
        <Heading size="lg">Contenido no encontrado</Heading>
        <Text>
          El recurso solicitado no existe o no está disponible.
        </Text>
      </Stack>
    </Container>
  )
}

