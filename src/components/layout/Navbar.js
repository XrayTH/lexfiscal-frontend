"use client"

import {
  Box,
  Flex,
  Link,
  HStack,
  Heading,
  IconButton,
  VStack,
  Drawer
} from "@chakra-ui/react"
import NextLink from "next/link"
import { FaBalanceScale, FaBars } from "react-icons/fa"
import { useState } from "react"

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return(
    <Box bg="white" borderBottom="1px solid" borderColor="gray.200" boxShadow="sm">
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base:4, md:6 }}
        py={3}
        align="center"
        justify="space-between"
      >
        <HStack spacing={3}>
          <Heading size="md" display="flex" alignItems="center" gap={2}>
            <FaBalanceScale color="#1e6fb8" />
            <Link
              as={NextLink}
              href="/"
              fontWeight="bold"
              _hover={{ textDecoration:"none" }}
            >
              LexFiscal
            </Link>
          </Heading>
        </HStack>

        {/* Desktop */}
        <HStack spacing={4} display={{ base:"none", md:"flex" }}>
          <Link as={NextLink} href="/tributes">Tributos</Link>
          <Link as={NextLink} href="/framework">Marco normativo</Link>
        </HStack>

        {/* Mobile */}
        <IconButton
          aria-label="Abrir menú"
          variant="ghost"
          display={{ base:"flex", md:"none" }}
          onClick={() => setOpen(true)}
          opacity={open ? 0 : 1}
          pointerEvents={open ? "none" : "auto"}
        >
          <FaBars />
        </IconButton>

        <Drawer.Root
          placement="right"
          open={open}
          onOpenChange={(e) => setOpen(e.open)}
        >
          <Drawer.Backdrop />

          <Drawer.Content>
            <Drawer.CloseTrigger />
            <Drawer.Body>
              <VStack align="start" spacing={4}>
                <Link as={NextLink} href="/tributes" onClick={() => setOpen(false)}>
                  Tributos
                </Link>
                <Link as={NextLink} href="/framework" onClick={() => setOpen(false)}>
                  Marco normativo
                </Link>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      </Flex>
    </Box>
  )
}



