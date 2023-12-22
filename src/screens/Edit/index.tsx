import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  ButtonContainer,
  Container,
  Content,
  ContentSection,
  Label,
  SelectSection,
} from './styles'

import { InputBox } from '@components/InputBox'
import { MultilineInputBox } from '@components/MultilineInputBox'
import { SelectBox } from '@components/SelectBox'
import { Button } from '@components/Button'
import { ContainerInformationBoxTypeStyle } from '@components/SelectBox/styles'
import { HeaderNavigation } from '@components/HeaderNavigation'
import { Meal } from '@interfaces/meal'
import { AppError } from '@utils/appErrors'
import { mealCreate } from '@storage/Meal/mealCreate'
import { mealGetById } from '@storage/Meal/mealGetById'
import { mealEdit } from '@storage/Meal/mealEdit'

interface RouteParams {
  id: string
}

export function Edit() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [inDiet, setInDiet] =
    useState<ContainerInformationBoxTypeStyle>('SIMPLE')
  const [outDiet, setOutDiet] =
    useState<ContainerInformationBoxTypeStyle>('SIMPLE')

  const navigation = useNavigation()

  const route = useRoute()
  const { id } = route.params as RouteParams

  function handleSetInDiet() {
    setInDiet('IN')
    setOutDiet('SIMPLE')
  }
  function handleSetOutDiet() {
    setOutDiet('OUT')
    setInDiet('SIMPLE')
  }

  async function fetchMeal() {
    try {
      const meal = await mealGetById(id)
      setName(meal.foodName)
      setDescription(meal.description)
      setDate(meal.day)
      setHour(meal.hour)
      if (meal.inDiet) {
        setInDiet('IN')
      } else {
        setOutDiet('OUT')
      }
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Refeição', error.message)
      } else {
        console.log(error)
        Alert.alert('Refeição', 'Não foi possivel carregar as informações')
      }
    }
  }

  async function handleForm() {
    try {
      if (
        name.trim().length === 0 ||
        description.trim().length === 0 ||
        date.trim().length === 0 ||
        hour.trim().length === 0
      ) {
        if (inDiet === 'SIMPLE' && outDiet === 'SIMPLE') {
          return Alert.alert(
            'Editar refeição',
            'Preencha todos os campos, por favor.',
          )
        }
      }
      const isInDiet = inDiet === 'IN'

      const data: Meal = {
        id,
        day: date,
        hour,
        foodName: name,
        description,
        inDiet: isInDiet,
      }

      await mealEdit(data)

      navigation.navigate('home')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Editar refeição', error.message)
      } else {
        Alert.alert('Editar refeição', 'Não foi possivel editar a refeição.')
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchMeal()
  }, [])
  return (
    <Container>
      <HeaderNavigation title="Editar Refeição" />

      <Content>
        <InputBox label="Nome" value={name} setValue={setName} />
        <MultilineInputBox value={description} setValue={setDescription} />
        <ContentSection>
          <InputBox label="Data" type="ROW" value={date} setValue={setDate} />
          <InputBox label="Hora" type="ROW" value={hour} setValue={setHour} />
        </ContentSection>
        <SelectSection>
          <Label>Está dentro da dieta?</Label>
          <ContentSection>
            <SelectBox
              title="yes"
              isActive={inDiet}
              onPress={handleSetInDiet}
            />
            <SelectBox
              title="no"
              isActive={outDiet}
              onPress={handleSetOutDiet}
            />
          </ContentSection>
        </SelectSection>
      </Content>
      <ButtonContainer>
        <Button showIcon={false} pressButton={handleForm}>
          Editar Refeição
        </Button>
      </ButtonContainer>
    </Container>
  )
}
