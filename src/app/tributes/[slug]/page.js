import {notFound} from "next/navigation"
import Container from "@/components/ui/Container"
import {getTributeBySlug} from "@/lib/api"
import TributeDetail from "@/components/tributes/TributeDetail"

export default async function TributeDetailPage({params}){
  const { slug } = await params
  const tribute=await getTributeBySlug(slug)

  if(!tribute){
    notFound()
  }

  return(
    <Container>
      <TributeDetail tribute={tribute}/>
    </Container>
  )
}
