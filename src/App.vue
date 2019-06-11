<template>
  <div id="app">
    <a1></a1>
    <b2></b2>
    <c></c>
    <router-view/>
  </div>
</template>

<script>
import a1 from '@/components/a'
import b2 from '@/components/b'
import c from '@/components/c'
export default {
  name: 'App',
  data(){
    return{

   }
  },
  components:{
    a1,
    b2,
    c
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
