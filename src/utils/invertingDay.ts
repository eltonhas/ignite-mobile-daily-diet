export function invertingDay(day: string) {
  const index = day.indexOf('/')

  if (index >= 0) {
    return day.replaceAll('/', '-').split('-').reverse().join('-')
  }
  return day.split('-').reverse().join('/')
}
