import {Heading,SimpleGrid,Text} from "@chakra-ui/react"
import Container from "@/components/ui/Container"
import {getTributes} from "@/lib/api"
import TributeCard from "@/components/tributes/TributeCard"

export const metadata={
  title:"Tributos | LexFiscal",
  description:"Listado descriptivo de tributos nacionales en Colombia"
}

export default async function TributesPage(){
  const tributes=await getTributes()

  if(!tributes||tributes.length===0){
    return(
      <Container>
        <Text py={10}>No hay tributos disponibles.</Text>
      </Container>
    )
  }

  return(
    <Container>
      <Heading size="xl" fontWeight="bold" borderBottom="1px solid" borderColor="gray.200" textUnderlineOffset="6px" py={6}>Tributos</Heading>
      <SimpleGrid columns={{base:1,md:2}} spacing={4}>
        {tributes.data.map(tribute=>(
          <TributeCard key={tribute.slug} tribute={tribute}/>
        ))}
      </SimpleGrid>
    </Container>
  )
}
