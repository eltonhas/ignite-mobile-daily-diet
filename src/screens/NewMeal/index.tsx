import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
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
import { mealCreate } from '@storage/Meal/mealCreate'
import { AppError } from '@utils/appErrors'

export function NewMeal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [inDiet, setInDiet] =
    useState<ContainerInformationBoxTypeStyle>('SIMPLE')
  const [outDiet, setOutDiet] =
    useState<ContainerInformationBoxTypeStyle>('SIMPLE')

  const navigation = useNavigation()

  function handleSetInDiet() {
    setInDiet('IN')
    setOutDiet('SIMPLE')
  }
  function handleSetOutDiet() {
    setOutDiet('OUT')
    setInDiet('SIMPLE')
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
            'Novo Grupo',
            'Preencha todos os campos, por favor.',
          )
        }
      }
      const isInDiet = inDiet === 'IN'

      const id = `${date}-${name.replace(' ', '-')}`

      const data: Meal = {
        id,
        day: date,
        hour,
        foodName: name,
        description,
        inDiet: isInDiet,
      }

      await mealCreate(data)

      if (isInDiet) {
        navigation.navigate('positive')
      } else {
        navigation.navigate('negative')
      }
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possivel cadastrar um novo grupo.')
        console.log(error)
      }
    }
  }
  return (
    <Container>
      <HeaderNavigation title="Nova Refeição" />

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
          Cadastrar Refeição
        </Button>
      </ButtonContainer>
    </Container>
  )
}
