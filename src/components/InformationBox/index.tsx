import {
  Container,
  ContainerInformationBoxTypeStyle,
  Paragraph,
  Title,
} from './styles'

interface InformationBoxProps {
  quantity: string
  message: string
  type?: ContainerInformationBoxTypeStyle
}

export function InformationBox({
  quantity,
  message,
  type = 'SIMPLE',
}: InformationBoxProps) {
  return (
    <Container type={type}>
      <Title>{quantity}</Title>
      <Paragraph>{message}</Paragraph>
    </Container>
  )
}
