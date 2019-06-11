<template>
  <div class="hello">
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>名字</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(shop,index) in cartProducts" :key='index'>
                    <td>{{shop.id}}</td>
                    <td>{{shop.name}}</td>
                    <td>{{shop.price}}</td>
                    <td>
                        <button @click="subNum(shop)">-</button>
                        <input type="text" oninput="value=value.replace(/[^\d]/g,'')" v-model="shop.num" style="width:30px;">
                        <button @click="addNum(shop)">+</button>
                    </td>
                    <td @click="delProduct(shop)">删除</td>
                </tr>
            </tbody>
        </table>
         <div>
           <h3> 数量：{{totalNum}}  总价：{{totalPrice}} </h3> 
           <h2 @click="clearAll">清空购物车</h2>
        </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'B',
  data () {
    return {
    //   shops: this.cartProducts
    }
  },
  methods:{
    //删除
      ...mapActions(['delProduct']),
    //清空购物车
    ...mapActions(['clearAll']),
    //或者
    //   clearAll(){
    //       this.$store.dispatch('clearAll')
    //   },
    //加
    ...mapActions(['addNum']),
    //减
    ...mapActions(['subNum']),
    
  },
  created () {
  },
  computed:{
   ...mapGetters(['cartProducts','totalPrice','totalNum']),//简写
    // cartProducts(){
    //     return this.$store.getters.cartProducts
    // }
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    width: 600px;
    margin: 100px;
 
}
.hello table tr th{
    width: 100px;
    border: 1px solid red;
}
.hello table tr td{
    width: 100px;
       border: 1px solid red;
}

</style>
