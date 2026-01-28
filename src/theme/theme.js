import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system=createSystem(defaultConfig,{
  theme:{
    styles:{
      global:{
        body:{
          bg:"gray.900",
          color:"white"
        }
      }
    }
  }
})

