import dayjs from 'dayjs'
import { Meal } from '@interfaces/meal'

export function compareHours(a: Meal, b: Meal) {
  const dayA = dayjs(`${a.day} ${a.hour}`)
  const dayB = dayjs(`${b.day} ${b.hour}`)

  const result = -dayA.diff(dayB)

  return result
}
