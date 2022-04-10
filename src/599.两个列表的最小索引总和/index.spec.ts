import { findRestaurant } from './index'
describe('599.两个列表的最小索引总和', () => {
  it('示例一', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']
    const list2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
    const result = findRestaurant(list1, list2)
    expect(result).toStrictEqual(['Shogun'])
  })

  it('示例二', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']
    const list2 = ['KFC', 'Shogun', 'Burger King']
    const result = findRestaurant(list1, list2)
    expect(result).toStrictEqual(['Shogun'])
  })
})
