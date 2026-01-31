import Container from "@/components/ui/Container"
import {getFramework} from "@/lib/api"
import {Heading,Text,Stack,Box,List} from "@chakra-ui/react"

export const metadata={
  title:"Marco normativo | LexFiscal",
  description:"Estructura general del sistema tributario colombiano"
}

export default async function FrameworkPage(){
  const framework=await getFramework()

  if(!framework){
    return(
      <Container>
        <Text py={10}>
          No se pudo cargar la información del marco normativo.
        </Text>
      </Container>
    )
  }

  return(
    <Container>
      <Stack spacing={8} py={10}>

        {/* Título */}
        <Stack spacing={1}>
          <Heading>Marco normativo</Heading>
          <Text fontSize="sm" color="gray.600">
            {framework.country} · {framework.legalSystem}
          </Text>
        </Stack>

        {/* Fuentes primarias */}
        <Stack spacing={3}>
          <Heading size="md">Fuentes principales</Heading>
          <List.Root spacing={1}>
            {framework.primarySources.map(source=>(
              <List.Item key={source}>
                {source}
              </List.Item>
            ))}
          </List.Root>
        </Stack>

        {/* Autoridades */}
        <Stack spacing={3}>
          <Heading size="md">Autoridades competentes</Heading>
          <List.Root spacing={1}>
            {framework.authority.map(entity=>(
              <List.Item key={entity}>
                {entity}
              </List.Item>
            ))}
          </List.Root>
        </Stack>

        {/* Alcance */}
        <Stack spacing={2}>
          <Heading size="md">Alcance</Heading>
          <Text>
            {framework.scope}
          </Text>
        </Stack>

        {/* Disclaimer */}
        <Box
          border="1px solid"
          borderColor="gray.200"
          p={4}
          borderRadius="md"
        >
          <Text fontSize="sm" color="gray.600" lineHeight="1.6">
            {framework.disclaimer}
          </Text>
        </Box>

      </Stack>
    </Container>
  )
}


