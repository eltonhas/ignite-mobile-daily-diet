import { mealGetAll } from './mealGetAll'

import { SectionListInterface } from '@interfaces/sectionList'

import { invertingDay } from '@utils/invertingDay'
import { compareDays } from '@utils/compareDays'
import { compareHours } from '@utils/compareHours'

export async function getAllMealsByDay() {
  try {
    const mealsByDay: SectionListInterface[] = []

    const meals = await mealGetAll()

    meals.forEach((meal) => {
      if (mealsByDay.length === 0) {
        mealsByDay.push({ title: meal.day, data: [meal] })
      } else {
        const hasDay = mealsByDay.find(
          (mealByDay) => mealByDay.title === meal.day,
        )

        if (hasDay === undefined) {
          mealsByDay.push({ title: meal.day, data: [meal] })
        } else {
          const index = mealsByDay.findIndex(
            (mealByDay) => mealByDay.title === meal.day,
          )

          mealsByDay[index].data.push(meal)
        }
      }
    })

    mealsByDay.forEach((mealByDay) => {
      mealByDay.title = invertingDay(mealByDay.title)
    })

    mealsByDay.sort(compareDays)

    mealsByDay.forEach((mealByDay) => {
      mealByDay.data.forEach((meal) => {
        meal.day = invertingDay(meal.day)
      })

      mealByDay.data.sort(compareHours)

      mealByDay.data.forEach((meal) => {
        meal.day = invertingDay(meal.day)
      })

      mealByDay.title = invertingDay(mealByDay.title)
    })

    return mealsByDay
  } catch (error) {
    throw error
  }
}
