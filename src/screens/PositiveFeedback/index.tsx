import { Image } from 'react-native'
import {
  BoxText,
  ButtonContainer,
  Container,
  Paragraph,
  ParagraphHighligth,
  Title,
} from './styles'

import { Button } from '@components/Button'

import image from '@assets/Illustration.png'
import { useNavigation } from '@react-navigation/native'

export function PositiveFeedback() {
  const navigation = useNavigation()
  function handleNavigateToHome() {
    navigation.navigate('home')
  }
  return (
    <Container>
      <BoxText>
        <Title>Continue assim!</Title>
        <Paragraph>
          Você continua{' '}
          <ParagraphHighligth>dentro da dieta.</ParagraphHighligth> Muito bem!
        </Paragraph>
      </BoxText>
      <Image source={image} alt="" />
      <ButtonContainer>
        <Button showIcon={false} pressButton={handleNavigateToHome}>
          Ir para a página inicial
        </Button>
      </ButtonContainer>
    </Container>
  )
}
