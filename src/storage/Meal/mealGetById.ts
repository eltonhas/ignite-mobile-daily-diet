import { AppError } from '@utils/appErrors'
import { mealGetAll } from './mealGetAll'

export async function mealGetById(id: string) {
  try {
    const storage = await mealGetAll()

    const mealFromStorage = storage.filter((meal) => meal.id === id)

    if (mealFromStorage.length === 0) {
      throw new AppError('Refeição não cadastrada.')
    }

    return mealFromStorage[0]
  } catch (error) {
    throw error
  }
}
