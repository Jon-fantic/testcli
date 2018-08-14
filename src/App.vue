<template>
  <div id="app">
    <keep-alive :include="defaultInclude">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted() {
    document.title = this.$route.meta.title
  },
  computed:{
    defaultInclude(){
      return this.$route.meta && this.$route.meta.include?this.$route.meta.include:""
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
