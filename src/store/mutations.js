export var mutations = {
  incrementMutation(state) {
    state.count++
  },
  incrementByAmountMutation(state, payload) {
    state.count += payload.amount
  }
}
