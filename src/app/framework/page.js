import Container from "@/components/ui/Container"
import {getFramework} from "@/lib/api"
import {
  Heading,
  Text,
  Stack,
  Box,
  List,
  SimpleGrid
} from "@chakra-ui/react"

export const metadata={
  title:"Marco normativo | LexFiscal",
  description:"Estructura general del sistema tributario colombiano"
}

export default async function FrameworkPage(){
  const framework=await getFramework()

  if(!framework){
    return(
      <Container>
        <Text py={16}>
          No se pudo cargar la información del marco normativo.
        </Text>
      </Container>
    )
  }

  return(
    <Container>
      <Stack spacing={16} py={20} maxW="6xl">

        {/* Header */}
        <Stack spacing={3}>
          <Heading size="xl" fontWeight="bold" borderBottom="1px solid" borderColor="gray.200" textUnderlineOffset="6px">Marco normativo</Heading>
          <Text fontSize="md" color="gray.600">
            {framework.country} · {framework.legalSystem}
          </Text>
        </Stack>

        {/* Contenido principal */}
        <SimpleGrid columns={{base:1,md:2}} spacing={12}>

          <Box maxW="3xl" mt={4}>
            <Heading size="md" mb={4} fontWeight="semibold">
              Fuentes principales
            </Heading>
            <List.Root spacing={3} ps={4}>
              {framework.primarySources.map(source=>(
                <List.Item key={source}>
                  {source}
                </List.Item>
              ))}
            </List.Root>
          </Box>

          <Box maxW="3xl" mt={4}>
            <Heading size="md" mb={4} fontWeight="semibold">
              Autoridades competentes
            </Heading>
            <List.Root spacing={3} ps={4}>
              {framework.authority.map(entity=>(
                <List.Item key={entity}>
                  {entity}
                </List.Item>
              ))}
            </List.Root>
          </Box>

        </SimpleGrid>

        {/* Alcance */}
        <Box maxW="3xl" mt={4}>
          <Heading size="md" mb={3} fontWeight="semibold">
            Alcance
          </Heading>
          <Text lineHeight="1.8">
            {framework.scope}
          </Text>
        </Box>

        {/* Disclaimer */}
        <Box
          mt={8}
          bg="gray.50"
          border="1px solid"
          borderColor="gray.200"
          p={8}
          borderRadius="lg"
          maxW="3xl"
        >
          <Text fontSize="sm" color="gray.600" lineHeight="1.7">
            {framework.disclaimer}
          </Text>
        </Box>

      </Stack>
    </Container>
  )
}



