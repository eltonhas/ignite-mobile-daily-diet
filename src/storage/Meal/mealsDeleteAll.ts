import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLECTION } from '@storage/storageConfig'

export async function mealDeleteAll() {
  try {
    await AsyncStorage.removeItem(MEALS_COLECTION)
  } catch (error) {
    throw error
  }
}
