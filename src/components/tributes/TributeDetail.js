"use client"

import {Heading,Text,Stack,Box} from "@chakra-ui/react"

export default function TributeDetail({tribute}){
  return(
    <Stack spacing={6} py={10}>

      {/* Identidad del tributo */}
      <Stack spacing={2}>
        <Heading>{tribute.name}</Heading>
        <Text fontSize="sm" color="gray.600">
          Tipo: {tribute.type} · Ámbito: {tribute.scope}
        </Text>
      </Stack>

      <Box borderBottom="1px solid" borderColor="gray.200"/>

      {/* Definición */}
      <Stack spacing={2}>
        <Heading size="md">Definición</Heading>
        <Text lineHeight="1.7">
          {tribute.technicalSheet.definition}
        </Text>
      </Stack>

      {/* Hecho generador */}
      <Stack spacing={2}>
        <Heading size="md">Hecho generador</Heading>
        <Text lineHeight="1.7">
          {tribute.technicalSheet.taxableEvent}
        </Text>
      </Stack>

      <Box borderBottom="1px solid" borderColor="gray.200"/>

      {/* Sujetos */}
      <Stack spacing={2}>
        <Heading size="md">Sujetos</Heading>
        <Box>
          <Text><strong>Activo:</strong> {tribute.technicalSheet.subjects.active}</Text>
          <Text><strong>Pasivo:</strong> {tribute.technicalSheet.subjects.passive}</Text>
        </Box>
      </Stack>

      {/* Base gravable */}
      <Stack spacing={2}>
        <Heading size="md">Base gravable</Heading>
        <Text lineHeight="1.7">
          {tribute.technicalSheet.taxBase}
        </Text>
      </Stack>

      {/* Tarifa */}
      <Stack spacing={2}>
        <Heading size="md">Tarifa</Heading>
        <Text lineHeight="1.7">
          {tribute.technicalSheet.rate}
        </Text>
      </Stack>

    </Stack>
  )
}

