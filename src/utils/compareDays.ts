import dayjs from 'dayjs'
import { SectionListInterface } from '@interfaces/sectionList'

export function compareDays(a: SectionListInterface, b: SectionListInterface) {
  const dayA = dayjs(a.title)
  const dayB = dayjs(b.title)
  const result = -dayA.diff(dayB, 'day')

  return result
}
