<template>
  <div id="app">
    <router-link to="/Par">Parent</router-link>
    <router-link to="/Chi">Child</router-link>

    <!-- vuex state 접근 -->
    <h2>App : {{ $store.state.counter }}</h2>
    <router-view></router-view>
    
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App',

  methods:{
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
