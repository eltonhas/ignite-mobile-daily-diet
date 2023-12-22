import { Meal } from '@interfaces/meal'
import { mealGetAll } from './mealGetAll'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLECTION } from '@storage/storageConfig'

export async function mealEdit(editMeal: Meal) {
  try {
    const storage = await mealGetAll()

    const storageWithoutMealId = storage.filter(
      (meal) => meal.id !== editMeal.id,
    )

    await AsyncStorage.setItem(
      MEALS_COLECTION,
      JSON.stringify([...storageWithoutMealId, editMeal]),
    )
  } catch (error) {
    throw error
  }
}
