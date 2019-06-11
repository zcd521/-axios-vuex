import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{//存储
        //footer:true,
        shop:[
            {id:1,name:'vue',price:'100',num:10},
            {id:2,name:'php',price:'200',num:1},
            {id:3,name:'java',price:'300',num:1},
            {id:4,name:'node',price:'400',num:1},
        ],
        //购物车
        added:[]
    },
    getters:{//获取 监听state值的变化
       shop(state){
           return state.shop
       },
       //返回购物车
       cartProducts(state){
           return state.added
        //    .map(({id,num}) =>{//解构
        //         let p =state.shop.find(n=>n.id == id)
        //         console.log(p)
        //         return{
        //             ...p,
        //             num
        //         }
        //    })
       },
       //计算总价
       totalPrice:(state,getters)=>{
           var total = 0;
           getters.cartProducts.forEach(n=> {
               total+=n.price*n.num;
           });
           return total;
       },
       //计算总数量
       totalNum(state,getters){
        var total = 0;
            getters.cartProducts.forEach(n=> {
                total+=n.num;
            });
            return parseInt(total);
       }

    },
    mutations:{//自定义改变state的值
        //加入购物车
        add(state,{id,num,name,price}){
            let record = state.added.find(n=>n.id == id);//find 查找
            let records = state.shop.find(n=>n.id == id);//find 查找
            if(!record || !records){
                state.added.push({id,num,name,price})//不等于就加入
               // console.log(state.added)
            }else{
                record.num=parseInt(records.num)+parseInt(record.num) //数量加
                // records.num=record.num
            }
           // console.log(state.added)
        },
        //清空购物车
        clear(state){
            state.added = []
        },
        //删除购物车某个
        delete(state,{id}){
            state.added.forEach((n,i)=>{
                console.log(i)
                if(n.id == id){
                    state.added.splice(i,1)
                }
            })
        },
        //加
        addNum(state,{id}){
            let record = state.added.find(n=>n.id == id);//find 查找 
            if(record){
                record.num++ //数量加
            }
        },
        //减
        subNum(state,{id}){
            let record = state.added.find(n=>n.id == id);//find 查找 
            if(record){
                if(record.num<=1){
                    record.num = 1
                }else{
                    record.num-- //数量减
                }
                
            }
        }

    },
    actions:{//异步执行 触发mutations中的函数
        //加入购物车
        addToCart({commit},product){
        //    console.log(product)
           commit('add',{
               id:product.id,
               num:product.num,
               name:product.name,
               price:product.price    
           })
       },
       //清空购物车
       clearAll({commit}){
           commit('clear')
       },
       //删除购物车某个
       delProduct({commit},product){
        console.log(product)
            commit('delete',{
                id:product.id,
            })
       },
       //加
       addNum({commit},product){
        commit('addNum',{
            id:product.id
        })
       },
       //减
       subNum({commit},product){
        commit('subNum',{
            id:product.id
        })
       }
    }
});
//export default store;

