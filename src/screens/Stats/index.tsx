import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import {
  BackArrowBox,
  BoxSpace,
  Container,
  Content,
  Paragraph,
  SecondaryTitle,
  StatsBoxSpace,
  StatsHeader,
  Title,
} from './styles'
import { ButtonIcon } from '@components/ButtonIcon'
import { InformationBox } from '@components/InformationBox'
import { mealsStats } from '@storage/Meal/mealsStats'
import { Alert } from 'react-native'

export function Stats() {
  const [mealsTotal, setMealsTotal] = useState<number>()
  const [maxSequency, setMaxSequency] = useState<number>()
  const [mealsIn, setMealsIn] = useState<number>()
  const [mealsOut, setMealsOut] = useState<number>()
  const [percentMealsIn, setPercentMealsIn] = useState<number>()
  const [inDiet, setInDiet] = useState(false)
  async function fetchStats() {
    const stats = await mealsStats()

    setMealsTotal(stats.totalMeals)
    setMaxSequency(stats.maxMealsInSequency)
    setMealsIn(stats.mealsInTotal)
    setMealsOut(stats.mealsOutTotal)
    const percent = (stats.mealsInTotal / stats.totalMeals) * 100
    setPercentMealsIn(Number(percent.toFixed(2)))

    if (percent >= 50) {
      setInDiet(true)
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchStats()
    }, []),
  )
  return (
    <Container>
      <StatsHeader type={inDiet ? 'PRIMARY' : 'SECONDARY'}>
        <BackArrowBox>
          <ButtonIcon icon="arrow-back" type={inDiet ? 'IN' : 'OUT'} />
        </BackArrowBox>
        <Title>{`${percentMealsIn}%`}</Title>
        <Paragraph>das refeições dentro da dieta</Paragraph>
      </StatsHeader>
      <Content>
        <SecondaryTitle>Estatísticas gerais</SecondaryTitle>
        <BoxSpace>
          <InformationBox
            quantity={String(maxSequency)}
            message="melhor sequência de pratos dentro da dieta"
          />
          <InformationBox
            quantity={String(mealsTotal)}
            message="refeições registradas"
          />
          <StatsBoxSpace>
            <InformationBox
              quantity={String(mealsIn)}
              message="refeições dentro da dieta"
              type="IN"
            />
            <InformationBox
              quantity={String(mealsOut)}
              message="refeições fora da dieta"
              type="OUT"
            />
          </StatsBoxSpace>
        </BoxSpace>
      </Content>
    </Container>
  )
}
