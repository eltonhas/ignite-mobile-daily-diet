import { Container, Paragraph } from './styles'

interface ListEmptyProps {
  message: string
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Container>
      <Paragraph>{message}</Paragraph>
    </Container>
  )
}
