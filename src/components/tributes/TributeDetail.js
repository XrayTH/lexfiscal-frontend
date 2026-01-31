"use client"

import {Heading,Text,Stack,Box} from "@chakra-ui/react"

export default function TributeDetail({tribute}){
  return(
    <Stack spacing={4} py={10}>
      <Heading>{tribute.name}</Heading>

      <Text><strong>Tipo:</strong> {tribute.type}</Text>
      <Text><strong>Ámbito:</strong> {tribute.scope}</Text>

      <Box/>

      <Heading size="md">Definición</Heading>
      <Text>{tribute.technicalSheet.definition}</Text>

      <Heading size="md">Hecho generador</Heading>
      <Text>{tribute.technicalSheet.taxableEvent}</Text>

      <Heading size="md">Sujetos</Heading>
      <Text><strong>Activo:</strong> {tribute.technicalSheet.subjects.active}</Text>
      <Text><strong>Pasivo:</strong> {tribute.technicalSheet.subjects.passive}</Text>

      <Heading size="md">Base gravable</Heading>
      <Text>{tribute.technicalSheet.taxBase}</Text>

      <Heading size="md">Tarifa</Heading>
      <Text>{tribute.technicalSheet.rate}</Text>
    </Stack>
  )
}
