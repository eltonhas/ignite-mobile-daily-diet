import AsyncStorage from '@react-native-async-storage/async-storage'
import { mealGetAll } from './mealGetAll'
import { MEALS_COLECTION } from '@storage/storageConfig'

export async function mealDelete(id: string) {
  try {
    const storage = await mealGetAll()

    const storageWithoutMealId = storage.filter((meal) => meal.id !== id)

    await AsyncStorage.setItem(
      MEALS_COLECTION,
      JSON.stringify(storageWithoutMealId),
    )
  } catch (error) {
    throw error
  }
}
