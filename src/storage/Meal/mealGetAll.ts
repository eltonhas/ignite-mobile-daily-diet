import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLECTION } from '@storage/storageConfig'
import { Meal } from '@interfaces/meal'

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLECTION)

    const meals: Meal[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    throw error
  }
}
