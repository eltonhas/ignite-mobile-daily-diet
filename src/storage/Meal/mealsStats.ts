import { Meal } from '@interfaces/meal'
import { mealGetAll } from './mealGetAll'
import { invertingDay } from '@utils/invertingDay'
import { compareHours } from '@utils/compareHours'

export async function mealsStats() {
  let mealsInSequency = 0
  let maxMealsInSequency = 0
  const mealsIn: Meal[] = []
  const mealsOut: Meal[] = []

  const storage = await mealGetAll()

  const totalMeals = storage.length

  storage.forEach((meal) => {
    if (meal.inDiet) {
      mealsIn.push(meal)
    } else {
      mealsOut.push(meal)
    }
  })

  storage.forEach((meal) => {
    meal.day = invertingDay(meal.day)
  })

  storage.sort(compareHours)

  storage.forEach((meal) => {
    if (mealsInSequency !== 0 && meal.inDiet) {
      mealsInSequency = mealsInSequency + 1
    }

    if (mealsInSequency !== 0 && meal.inDiet === false) {
      maxMealsInSequency = mealsInSequency
      mealsInSequency = 0
    }

    if (mealsInSequency === 0 && meal.inDiet) {
      mealsInSequency = 1
    }
  })

  storage.forEach((meal) => {
    meal.day = invertingDay(meal.day)
  })

  const mealsInTotal = mealsIn.length
  const mealsOutTotal = mealsOut.length

  return {
    totalMeals,
    mealsInTotal,
    mealsOutTotal,
    maxMealsInSequency,
  }
}
