<template>
  <div class="home">
    <img alt="Vue logo" src="assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {testapi} from 'src/api'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    console.log(process.env.VUE_APP_SECRET)
    this.axios.get(testapi+"18862153135").then(res=>{

    })
  }
}
</script>
