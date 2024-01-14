<template>
    <div class="mainPage">
       <div class="mainPage_conteiner">
        <div class="mainPage_conteiner_present">
            <div class="mainPage_conteiner_present_link">
                <h1>Наш каталог товару</h1>
                <RouterLink to="/">Каталог товару</RouterLink>
            </div>
            <div class="mainPage_conteiner_present_main_product">
                <div class="mainPage_conteiner_present_main_product_iphone">
                    <div class="mainPage_conteiner_present_main_product_iphone_check">
                <RouterLink to="/">Надійний Вибір!</RouterLink>
            </div>
            <div class="mainPage_conteiner_present_main_product_iphone_checkTwo">
                <RouterLink to="/"><img src="../assets/catalog/iphone.jpg" alt=""></RouterLink>
            </div>
            </div>
            <div class="mainPage_conteiner_present_main_product_case">
                <div class="mainPage_conteiner_present_main_product_iphone_check">
                    <RouterLink to="/">Якісні Аксесуари!</RouterLink>
                </div>
                <div class="mainPage_conteiner_present_main_product_iphone_checkTwo">
                <RouterLink to="/"><img src="../assets/catalog/iphoneCase.jpg" alt=""></RouterLink>
            </div>
            </div>
            </div>
        </div>
       </div>
       <div class="mainPage_presents_day">
            <h1>Пропозиція тижня:</h1>
       </div>
       <div class="mainPage_presents_day_container">
       <div v-for="(phone,index) in arrayPhone" :key="index">

        <ProductCard
         :title="phone.title"
         :photoURL="phone.photoURL"
         :price="phone.price"
          />

       </div>
    </div>
    </div>

    <RouterView/>
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
.mainPage_conteiner_present{

    margin: 40px;
   
}
.mainPage_conteiner_present_link{
    display: flex;
    justify-content: space-between;
}
.mainPage_conteiner_present_link a{
    color: white;
    background-color: #051726;
    font-size: 22px;
    text-decoration: none;
    padding: 15px;
    border-radius: 10px;
}
.mainPage_conteiner_present_link h1{
    margin-left:20px ;
}
.mainPage_conteiner_present_main_product{
    display: flex;
    justify-content:space-between;
    margin: 15px;
}

.mainPage_conteiner_present_main_product img{
    height: 200px;
}

.mainPage_conteiner_present_main_product_iphone:hover{
    -webkit-box-shadow: 46px 58px 42px -17px rgba(0,0,0,0.28);
    -moz-box-shadow: 46px 58px 42px -17px rgba(0,0,0,0.28);
    box-shadow: 46px 58px 42px -17px rgba(0,0,0,0.28);
}
.mainPage_conteiner_present_main_product_case:hover{
    -webkit-box-shadow: 46px 58px 42px -17px rgba(0,0,0,0.28);
    -moz-box-shadow: 46px 58px 42px -17px rgba(0,0,0,0.28);
    box-shadow: 46px 58px 42px -17px rgba(0,0,0,0.28);
}
.mainPage_conteiner_present_main_product_iphone_check{
    display: block;
    position: relative;
    top: 100px;
    font-size: 25px;
    z-index: 1;

}
.mainPage_conteiner_present_main_product_iphone_check a{
    text-decoration: none;
    margin: 15px;
    color: black;
    z-index: 1;

}

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