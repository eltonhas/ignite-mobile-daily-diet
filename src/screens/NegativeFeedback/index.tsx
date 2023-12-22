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

import image from '@assets/Illustration-faild.png'
import { useNavigation } from '@react-navigation/native'

export function NegativeFeedback() {
  const navigation = useNavigation()
  function handleNavigateToHome() {
    navigation.navigate('home')
  }
  return (
    <Container>
      <BoxText>
        <Title>Que pena!</Title>
        <Paragraph>
          Você <ParagraphHighligth>saiu da dieta</ParagraphHighligth> dessa vez,
          mas continue se esforçando e não desista!
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
