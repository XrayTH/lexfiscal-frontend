import {API_BASE_URL,API_ENDPOINTS} from "./constants"

async function fetchAPI(path){
  const res=await fetch(`${API_BASE_URL}${path}`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    },
    cache:"no-store"
  })

  if(!res.ok){
    if(res.status===404){
      return null
    }
    throw new Error(`API error ${res.status}`)
  }

  return res.json()
}

export async function getTributes(){
  return fetchAPI(API_ENDPOINTS.tributes)
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
