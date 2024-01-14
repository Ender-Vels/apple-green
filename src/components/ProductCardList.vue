<template>
    <div class="mainPage_presents_day_container">
       <div v-for="(phone,index) in arrayPhone" :key="index">

        <ProductCard
         :title="phone.title"
         :photoURL="phone.photoURL"
         :price="phone.price"
          />

       </div>
    </div>
</template>


<script>
import ProductCard from './ProductCard.vue'

export default{
    components:{
        ProductCard,
    },
    data(){
        return{
            arrayPhone:[
                {
                    title:'Apple iPhone 14 Pro 128 ГБ Б/У (Deep Purple) Ідеальний стан',
                    photoURL:"../assets/product/14PM.png",
                    price: '25 990',
                },
                {
                    title:'Apple iPhone 14 Pro 128 ГБ Б/У (Deep Purple) Ідеальний стан',
                    photoURL:"../assets/product/14PM.png",
                    price: '25 990',
                },
                {
                    title:'Apple iPhone 14 Pro 128 ГБ Б/У (Deep Purple) Ідеальний стан',
                    photoURL:"../assets/product/14PM.png",
                    price: '25 990',
                },
                {
                    title:'Apple iPhone 14 Pro 128 ГБ Б/У (Deep Purple) Ідеальний стан',
                    photoURL:"../assets/product/14PM.png",
                    price: '25 990',
                },
                {
                    title:'Apple iPhone 14 Pro 128 ГБ Б/У (Deep Purple) Ідеальний стан',
                    photoURL:"../assets/product/14PM.png",
                    price: '25 990',
                },{
                    title:'Apple iPhone 14 Pro 128 ГБ Б/У (Deep Purple) Ідеальний стан',
                    photoURL:"../assets/product/14PM.png",
                    price: '25 990',
                },
            ]
        }
    }
}
</script>


<style>
.mainPage_presents_day_container{
    display: grid;
   grid-template-columns: 1fr 1fr 1fr;
}
.mainPage_presents_day{
    margin: 40px;
    padding: 20px;
}
.mainPage{
    display: grid;
    align-items: center;
    justify-content: center;
    

}
</style>