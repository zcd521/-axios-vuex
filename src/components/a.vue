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
                <tr v-for="(shop,index) in shops" :key='index'>
                    <td>{{shop.id}}</td>
                    <td>{{shop.name}}</td>
                    <td>{{shop.price}}</td>
                    <td>
                        <button @click="decrease(shop)">-</button>
                        <input type="text" v-model="shop.num" oninput="value=value.replace(/[^\d]/g,'')" style="width:30px;">
                        <button @click="addNum(shop)">+</button>
                    </td>
                    <td @click="addToCart(shop)">购物车</td>
                </tr>
            </tbody>
        </table>
       
  </div>
</template>

<script>
export default {
  name: 'A',
  data () {
    return {
      shops:this.$store.state.shop
    }
  },
   methods:{
      addToCart(shop){
           //返回所选中的商品
           return  this.$store.dispatch('addToCart',shop)
      },
      //加
      addNum(shop){
        shop.num++
      },
      //减
      decrease(shop){
       if(shop.num<=1){
           shop.num = 1
       }else{
            shop.num--
       }
      }
   },
   computed:{
    
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
