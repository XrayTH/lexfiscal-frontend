import {createSystem, defaultConfig} from "@chakra-ui/react"

export const system=createSystem(defaultConfig,{
  theme:{
    tokens:{
      fonts:{
        heading:{value:"system-ui,sans-serif"},
        body:{value:"system-ui,sans-serif"}
      },
      colors:{
        brand:{
          50:{value:"#eef4ff"},
          500:{value:"#2b6cb0"},
          700:{value:"#2c5282"}
        }
      }
    }
  }
})






