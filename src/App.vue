<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
    Home
  },
  methods: {
  },
  async created () {
  },
  mounted () {
  }
}
</script>

<style lang='scss'>
@import "./assets/base.scss";
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
