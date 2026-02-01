import {API_BASE_URL,API_ENDPOINTS} from "./constants"

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchAPI(path, { retries = 2, retryDelay = 300 } = {}) {
  const url = `${API_BASE_URL}${path}`

  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store"
    })

    if (res.ok) {
      return res.json()
    }

    if (res.status === 404) {
      return null
    }

    if (res.status === 429 && attempt < retries) {
      const retryAfter = res.headers.get("Retry-After")
      const delay = retryAfter ? Number(retryAfter) * 1000 : retryDelay * Math.pow(2, attempt)
      await sleep(delay)
      continue
    }

    throw new Error(`API error ${res.status}`)
  }

  throw new Error("API error 429 (retries exhausted)")
}

export async function getTributes({ page = 1, limit = 20, q } = {}) {
  const params = new URLSearchParams()
  if (page) params.set("page", String(page))
  if (limit) params.set("limit", String(limit))
  if (q) params.set("q", String(q))

  const query = params.toString() ? `?${params.toString()}` : ""
  return fetchAPI(`${API_ENDPOINTS.tributes}${query}`)
}

export async function getTributeBySlug(slug){
  return fetchAPI(`${API_ENDPOINTS.tributes}/${slug}`)
}

export async function getFramework(){
  return fetchAPI(API_ENDPOINTS.framework)
}

export async function checkHealth({ signal } = {}){
  try{
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.health}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal,
      cache: "no-store"
    })
    if(!res.ok) return null
    return res.json()
  }catch(e){
    return null
  }
}
