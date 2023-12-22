import { useNavigation } from '@react-navigation/native'
import {
  Container,
  ContainerTypeStyleProps,
  Icon,
  Paragraph,
  Title,
} from './styles'

interface PercentBoxProps {
  type?: ContainerTypeStyleProps
  percent: number
}

export function PercentBox({ percent, type = 'PRIMARY' }: PercentBoxProps) {
  const navigation = useNavigation()
  function handleNavigateToStats() {
    navigation.navigate('stats')
  }
  return (
    <Container type={type} onPress={handleNavigateToStats}>
      <Icon type={type} />
      <Title>{`${percent}%`}</Title>
      <Paragraph>das refeições dentro da dieta.</Paragraph>
    </Container>
  )
}
