"use client"

import React, { useEffect, useState } from "react"
import { getTributes } from "@/lib/api"
import TributeCard from "@/components/tributes/TributeCard"
import {
  Box,
  Button,
  HStack,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  Heading,
  Select,
  createListCollection
} from "@chakra-ui/react"

export default function TributesList({ initialPage = 1, initialLimit = 5 }) {
  const [page, setPage] = useState(initialPage)
  const [limit, setLimit] = useState(initialLimit)
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const limitsCollection = createListCollection({
  items: [
    { label: "5 ", value: "5" },
    { label: "10", value: "10" },
    { label: "20", value: "20" }
  ]
})

  const fetchPage = async (p, l) => {
    setLoading(true)
    setError(null)
    try {
      const resp = await getTributes({ page: p, limit: l })
      if (!resp || !Array.isArray(resp.data)) {
        setData([])
        setTotal(0)
      } else {
        setData(resp.data)
        setTotal(resp.total ?? 0)
      }
    } catch (err) {
      setError(err.message || "Error desconocido")
      setData([])
      setTotal(0)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPage(page, limit)
  }, [page, limit])

  const start = total === 0 ? 0 : (page - 1) * limit + 1
  const end = start + data.length - 1
  const lastPage = Math.max(1, Math.ceil((total || 0) / limit))

  return (
    <Stack spacing={6}>
      <Heading size="lg">Tributos</Heading>

      {loading ? (
        <Box py={16} textAlign="center">
          <Spinner size="lg" />
        </Box>
      ) : error ? (
        <Box py={8}>
          <Text color="red.500">Error: {error}</Text>
        </Box>
      ) : data.length === 0 ? (
        <Box py={8}>
          <Text>No hay tributos disponibles.</Text>
        </Box>
      ) : (
        <>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} gap="10px">
            {data.map((tribute) => (
              <TributeCard key={tribute.slug} tribute={tribute} />
            ))}
          </SimpleGrid>

          <HStack justify="space-between" py={4}>
            <Text fontSize="sm" color="gray.600">
              Mostrando {start}–{end} de {total}
            </Text>

      <HStack>

        <HStack spacing={3}>

          <Select.Root
            size="lg"
            width="60px"
            collection={limitsCollection}
            defaultValue={[String(limit)]}
            onValueChange={(details) => {
              const next = details.value[0]
              if (!next) return
              setLimit(Number(next))
              setPage(1)
            }}
          >
            <Select.Trigger>
              <Select.ValueText />
            </Select.Trigger>

            <Select.Content>
              {limitsCollection.items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>

        </HStack>
      </HStack>

            <HStack>
              <Button
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                isDisabled={page <= 1}
              >
                Anterior
              </Button>
              <Text fontSize="sm">
                {page} / {lastPage}
              </Text>
              <Button
                size="sm"
                onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
                isDisabled={page >= lastPage}
              >
                Siguiente
              </Button>
            </HStack>
          </HStack>
        </>
      )}
    </Stack>
  )
}