<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-counter></v-counter>
  </div>
</template>

<script>
import Counter from './components/Counter'
import './main.css'

export default {
  name: 'app',
  components: {
    'v-counter': Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
