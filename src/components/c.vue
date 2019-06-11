<template>
  <div class="hello">
        <div v-for="it in list" :key="it.id">
          {{it.name}}>>>>>
        </div>
  </div>
</template>

<script>
export default {
  name: 'C',
  data () {
    return {
      list:[
        {id:1,name:'上海大学-1'},
        {id:2,name:'上海大学-2'},
        {id:3,name:'上海大学-3'},
      ]
    }
  },
  computed:{
    
  }, 
  created () {
    this.getss()
  },
  methods: {
    getss(){
      this.axios.get('/imgitem').then((res) => {
        console.log(res)
      }).catch((err) => {
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.hello{
  display: flex;
}

</style>
