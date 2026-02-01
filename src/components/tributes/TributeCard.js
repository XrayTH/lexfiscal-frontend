"use client"

import { Box, Heading, Text, Stack, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import { motion } from "framer-motion"

const MotionBox = motion.create(Box)

export default function TributeCard({tribute}){
  return(
    <MotionBox
      bg="white"
      borderRadius="md"
      p={4}
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Stack spacing={2}>
        <Heading size="md">
          <Link as={NextLink} href={`/tributes/${tribute.slug}`} _hover={{ color: "brand.500" }} fontWeight="semibold">
            {tribute.name}
          </Link>
        </Heading>
        <Text fontSize="sm" color="gray.600">Tipo: {tribute.type}</Text>
        <Text fontSize="sm" color="gray.600">Ámbito: {tribute.scope}</Text>
      </Stack>
    </MotionBox>
  )
}
