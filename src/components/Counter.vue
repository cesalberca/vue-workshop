<template>
  <div>
    <h1 class="my-count">{{ count }}</h1>
    <button @click="dispatchIncrementAction">+</button>
    <input v-model.number="amount" type="number">
    <button @click="dispatchIncrementByAmountAction">+++</button>
    <button @click="dispatchRandomIncrementAction">?</button>
    <button @click="dispatchRandomIncrementAsyncAction">*</button>
  </div>
</template>
<script>
export default {
  data: () => ({ amount: 0 }),
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    dispatchIncrementAction() {
      this.$store.dispatch('incrementAction')
    },
    dispatchIncrementByAmountAction() {
      this.$store.dispatch('incrementByAmountAction', this.amount)
    },
    dispatchRandomIncrementAction() {
      this.$store.dispatch('incrementRandomAmountAction')
    },
    dispatchRandomIncrementAsyncAction() {
      this.$store.dispatch('incrementRandomAmountAsyncAction')
    }
  }
}
</script>
