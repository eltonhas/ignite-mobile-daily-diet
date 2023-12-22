import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import {
  ButtonContainer,
  Circle,
  Container,
  Content,
  ContentSection,
  Paragraph,
  SecondaryTitle,
  Tag,
  TextTag,
  Title,
} from './styles'

import { HeaderNavigation } from '@components/HeaderNavigation'
import { Button } from '@components/Button'

import { mealGetById } from '@storage/Meal/mealGetById'
import { AppError } from '@utils/appErrors'
import { mealDelete } from '@storage/Meal/mealDelete'

interface RouteParams {
  id: string
}

export function Meal() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [isInDiet, setIsInDiet] = useState(true)

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParams

  async function fetchMeal() {
    try {
      const meal = await mealGetById(id)
      setTitle(meal.foodName)
      setDescription(meal.description)
      setDay(meal.day)
      setHour(meal.hour)
      setIsInDiet(meal.inDiet)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Refeição', error.message)
      } else {
        console.log(error)
        Alert.alert('Refeição', 'Não foi possivel carregar as informações')
      }
    }
  }

  function handleNavigateToEdit() {
    navigation.navigate('edit', { id })
  }

  async function handleDeleteMeal() {
    await mealDelete(id)

    navigation.navigate('home')
  }

  useEffect(() => {
    fetchMeal()
  }, [])
  return (
    <Container>
      <HeaderNavigation title="Refeição" type={isInDiet ? 'IN' : 'OUT'} />
      <Content>
        <ContentSection>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </ContentSection>
        <ContentSection>
          <SecondaryTitle>Data e Hora</SecondaryTitle>
          <Paragraph>{`${day} às ${hour}`}</Paragraph>
        </ContentSection>
        <Tag>
          <Circle type={isInDiet ? 'IN' : 'OUT'} />
          <TextTag>{isInDiet ? 'dentro da dieta' : 'fora da dieta'}</TextTag>
        </Tag>
      </Content>
      <ButtonContainer>
        <Button icon="pencil" pressButton={handleNavigateToEdit}>
          Editar Refeição
        </Button>
        <Button icon="trash" type="SECONDARY" pressButton={handleDeleteMeal}>
          Excluir Refeição
        </Button>
      </ButtonContainer>
    </Container>
  )
}
