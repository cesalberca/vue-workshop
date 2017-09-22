import { mutations } from '@/store/mutations'

describe('counter mutations', () => {
  it('adds to the count state one on increment', () => {
    var state = {
      count: -2
    }

    mutations.incrementMutation(state)
    expect(state.count).toEqual(-1)
  })
})
