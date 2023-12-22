import AsyncStorage from '@react-native-async-storage/async-storage'
import { Meal } from '@interfaces/meal'
import { MEALS_COLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/appErrors'
import { mealGetAll } from './mealGetAll'

export async function mealCreate(newMeal: Meal) {
  try {
    const storage = await mealGetAll()

    const isSameMeal = storage.filter((meal) => meal.id === newMeal.id)

    if (isSameMeal.length > 0) {
      throw new AppError(
        'Já existe uma refeição cadastrada com essas informações.',
      )
    }

    const setStorage = JSON.stringify([newMeal, ...storage])

    await AsyncStorage.setItem(MEALS_COLECTION, setStorage)
  } catch (error) {
    throw error
  }
}
