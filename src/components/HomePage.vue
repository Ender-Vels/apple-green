<template>
    <div class="main">
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
        <ProductCardList/>
    </div>
    <div class="chooseReg">
        <div class="chooseReg_title">
            <span>Реєструйся на сайті та отримуй шалені знижки!</span>
            
            <div class="chooseReg_title_link">
                <RouterLink to="/Register">Зареєструватись</RouterLink>
            </div>
        </div>
        <div class="chooseReg_img">
            <img src="../assets/logo/chooseReg.png" alt="" >
        </div>
    </div>
    <div class="SocialNews">
        <div class="SocialNews_title">
            <span>Дізнавайся про наші новинки в у наших Соціальних мережах:</span>
        </div>
        <div class="SocialNews_link">
            <RouterLink to="/"><img src="../assets/ico/telegram.png" alt=""></RouterLink>
            <RouterLink to="/"><img src="../assets/ico/viber.png" alt=""></RouterLink>
            <RouterLink to="/"><img src="../assets/ico/insta.png" alt=""></RouterLink>
        </div>
    </div>
    <div class="SocialNews_photo">
        <img src="../assets/catalog/images1.jpg" height="400px" alt="">
        <img src="../assets/catalog/images2.png" height="400px" alt="">
        <img src="../assets/catalog/images3.jpg" height="400px"  alt="">
        <img src="../assets/catalog/images3.jpg" height="400px"  alt="">
 
    </div>
</div>
    <RouterView/>
</template>

<script>
import ProductCardList from './ProductCardList.vue'
export default{
components:{
ProductCardList
},
    data(){
        return{

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
   z-index: 999;

}
.chooseReg{
    display: flex;
    max-width:  1900px;
    margin: 0 auto;
    background-color: #051726;
    justify-content: space-around;
    padding-top: 40px;
    border-radius: 30px;
    border: none;
    
}
.chooseReg_title{
    display: grid;
    text-align: center;
    font-size: 40px;
    justify-content: center;
    align-items: center;
    color: rgb(173, 165, 165);
}
.chooseReg_title_link{
    display: flex;
    text-align: center;
    justify-content: center;
    
}
.chooseReg_title_link a{
    color: aliceblue;
    text-decoration: none;
    font-weight: 1000;
}
.main{
    display: grid;
    margin: 0 auto;
    max-width: 1900px;
}
.SocialNews{
    display: flex;
    padding: 10px;
    margin: 30px;
    justify-content: space-between;
}
.SocialNews_title{
    font-size: 40px;
    color: #051726;
    
}
.SocialNews_link img{
    height: 48px;
    width: 48px;
    margin-left: 30px;
}
.SocialNews_photo{
    display: flex;
   
}
.SocialNews_photo img{
    margin: 20px;
}

</style>