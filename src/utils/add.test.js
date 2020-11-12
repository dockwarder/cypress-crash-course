import { add } from './add'

test('2 plus 2 equals for', () => {
    const result = add(2, 2)

    expect(result).toEqual(4)
})