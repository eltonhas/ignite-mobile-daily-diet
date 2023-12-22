import { TouchableOpacityProps } from 'react-native'
import {
  Circle,
  Container,
  ContainerInformationBoxTypeStyle,
  Content,
  Label,
} from './styles'

type SelectBoxProps = TouchableOpacityProps & {
  title: 'yes' | 'no'
  isActive?: ContainerInformationBoxTypeStyle
}

export function SelectBox({
  title = 'yes',
  isActive = 'SIMPLE',
  ...rest
}: SelectBoxProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Content>
        <Circle type={title} />
        <Label>{title === 'yes' ? 'Sim' : 'Não'}</Label>
      </Content>
    </Container>
  )
}
