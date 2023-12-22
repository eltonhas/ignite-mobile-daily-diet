import { useTheme } from 'styled-components/native'
import {
  Container,
  Content,
  DietStatus,
  FoodName,
  FoodView,
  Separator,
  Time,
} from './styles'

import { Meal } from '@interfaces/meal'

import { useNavigation } from '@react-navigation/native'

export function MealBox({ id, hour, inDiet = true, foodName }: Meal) {
  const { COLORS } = useTheme()
  const navigation = useNavigation()
  function handleNavigateToMeal() {
    navigation.navigate('meal', { id })
  }
  return (
    <Container onPress={handleNavigateToMeal} underlayColor={COLORS.GRAY_300}>
      <Content>
        <Time>{hour}</Time>
        <Separator />
        <FoodView>
          <FoodName>{foodName}</FoodName>
          <DietStatus inDiet={inDiet} />
        </FoodView>
      </Content>
    </Container>
  )
}
