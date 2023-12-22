import { useCallback, useState } from 'react'
import { Alert, SectionList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Container, DayText, Paragraph } from './styles'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { PercentBox } from '@components/PercentBox'
import { MealBox } from '@components/MealBox'
import { ListEmpty } from '@components/ListEmpty'

import { SectionListInterface } from '@interfaces/sectionList'
import { getAllMealsByDay } from '@storage/Meal/getAllMealsByDay'
import { mealsStats } from '@storage/Meal/mealsStats'
// import { mealDeleteAll } from '@storage/Meal/mealsDeleteAll'

export function Home() {
  const [meals, setMeals] = useState<SectionListInterface[]>([])
  const [percent, setPercent] = useState(0)
  const navigation = useNavigation()

  async function fetchMeals() {
    try {
      const data = await getAllMealsByDay()
      setMeals(data)
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possivel carregar as refeições.')
    }
  }

  async function fetchStats() {
    const stats = await mealsStats()

    const percent = (stats.mealsInTotal / stats.totalMeals) * 100
    setPercent(Number(percent.toFixed(2)))
  }

  async function handleNavigateToNewMeal() {
    navigation.navigate('newMeal')
    // await mealDeleteAll()
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
      fetchStats()
    }, []),
  )
  return (
    <Container>
      <Header />
      <PercentBox
        percent={percent}
        type={percent >= 50 ? 'PRIMARY' : 'SECONDARY'}
      />
      <Paragraph>Refeições</Paragraph>
      <Button pressButton={handleNavigateToNewMeal}>Nova Refeição</Button>

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealBox
            id={item.id}
            day={item.day}
            hour={item.hour}
            foodName={item.foodName}
            description={item.description}
            inDiet={item.inDiet}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DayText>{title}</DayText>
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma refeição cadastrada." />
        )}
      />
    </Container>
  )
}
