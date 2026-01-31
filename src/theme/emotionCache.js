import createCache from "@emotion/cache"

const emotionCache = createCache({
  key:"chakra",
  prepend:true
})

export default emotionCache
