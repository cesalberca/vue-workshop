import { getRandomNumber } from './../services/randomService'

export var actions = {
  incrementAction({ commit }) {
    commit('incrementMutation')
  },
  incrementByAmountAction({ commit }, amount) {
    commit('incrementByAmountMutation', { amount })
  },
  incrementRandomAmountAction({ dispatch }) {
    dispatch('incrementByAmountAction', Math.random())
  },
  async incrementRandomAmountAsyncAction({ commit }) {
    var x = await getRandomNumber()
    commit('incrementByAmountMutation', { amount: x })
  }
}
