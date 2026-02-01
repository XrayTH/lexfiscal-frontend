"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Box, Center, Spinner, Text, VStack } from "@chakra-ui/react"
import { checkHealth } from "@/lib/api"

export default function HealthChecker(){
  const [healthy, setHealthy] = useState(true)
  const intervalRef = useRef(null)
  const abortRef = useRef(null)

  const check = useCallback(async () => {
    if (abortRef.current) abortRef.current.abort()
    abortRef.current = new AbortController()
    try{
      const data = await checkHealth({ signal: abortRef.current.signal })
      if (!data || data.status !== 'ok'){
        setHealthy(false)
      } else {
        setHealthy(true)
      }
    }catch(e){
      setHealthy(false)
    }
  }, [])

  useEffect(()=>{
    Promise.resolve().then(check)
    return ()=>{
      if (abortRef.current) abortRef.current.abort()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [check])

  useEffect(()=>{
    if (!healthy){
      if (intervalRef.current) return
      intervalRef.current = setInterval(()=>{
        check()
      }, 20000)
    } else {
      if (intervalRef.current){
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [healthy, check])

  if (healthy) return null

  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={9999}
      backgroundColor="rgba(0,0,0,0.4)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Center>
        <VStack spacing={4} bg="white" p={6} rounded="md" shadow="md" minW="300px">
          <Spinner size="xl" color="blue.500" />
          <Text fontSize="lg" fontWeight="bold">Sin conexión al servidor</Text>
          <Text fontSize="sm" color="gray.600">Intentando reconectar...</Text>
        </VStack>
      </Center>
    </Box>
  )
}
