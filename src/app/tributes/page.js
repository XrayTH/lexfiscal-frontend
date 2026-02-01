import Container from "@/components/ui/Container"
import TributesList from "@/components/tributes/TributesList"

export default function TributesPage() {
  return (
    <Container>
      {/* El componente TributesList es cliente y se encarga de las peticiones y la paginación */}
      <TributesList initialPage={1} initialLimit={5} />
    </Container>
  )
}
