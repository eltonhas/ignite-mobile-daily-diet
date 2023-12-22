import { ButtonIcon } from '@components/ButtonIcon'
import {
  Container,
  ContainerHeaderNavigationBoxTypeStyle,
  Title,
} from './styles'

interface HeaderNavigationProps {
  title: string
  type?: ContainerHeaderNavigationBoxTypeStyle
}

export function HeaderNavigation({
  title,
  type = 'SIMPLE',
}: HeaderNavigationProps) {
  return (
    <Container type={type}>
      <ButtonIcon icon="arrow-back" type="SIMPLE" top={55} left={0} />
      <Title>{title}</Title>
    </Container>
  )
}
