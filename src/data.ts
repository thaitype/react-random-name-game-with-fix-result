import { getRandomColor } from './color'
import { faker } from '@faker-js/faker'

export interface RandomName {
  name: string
  selected: boolean
  color: string
}

const selectedName: string[] = ['Payton', 'Jedediah', 'Gerson', 'Betsy', 'Shanel']

export function createRandomName(): RandomName {
  return {
    name: faker.person.firstName(),
    selected: false,
    color: getRandomColor(),
  }
}

export const names: RandomName[] = selectedName.map(name => ({
  name,
  selected: true,
  color: getRandomColor(),
}))
names.push(
  ...faker.helpers.multiple(createRandomName, {
    count: 20,
  })
)

export const selectedIndexes = names.filter(name => name.selected).map((_name, index) => index)
