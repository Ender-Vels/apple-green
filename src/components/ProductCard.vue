<template>
    <div class="productCard">
        <div class="productCard_box">
            <div class="productCard_box_product">
                <div>
                <img :src="urlP" alt="">
            </div>
                <div class="productCard_box_product_title">
                <b>{{ title }}</b>
            </div>
            <div class="productCard_box_product_price">
               <b> {{ price }} <span>грн</span></b>
            </div>
            <div class="productCard_Buy">
                <button>
                   <b> + Купити</b>
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['title','photoURL','price'],
    data(){
        return{
            urlP:"https://www.istore.ua/upload/iblock/86d/z81r0rkob7d3x3dtqer9p03airnm7hub/14_pro_max_gpurpl_3_is.png"
        }
    }
        }

</script>

<style>
.productCard{
    display: grid;
    
}

.productCard_box_product{
    margin: 40px;
    font-size: 20px;
    max-width: 450px;
    align-items: center;
    text-align: center;
    background-color:#f3f3f3;
    border-radius: 10px;
}
.productCard_box_product img{
    height: 300px;
    width: 300px;
}
.productCard_box_product_title{
    color:#051726;
    font-size: 30px;
    margin: 15px;
    
}
.productCard_box_product_price{
    color:#051726;
    font-size: 30px;
    margin: 15px;
}
.productCard_box_product:hover{
    -webkit-box-shadow: 10px 10px 63px -3px rgba(0,245,114,1);
-moz-box-shadow: 10px 10px 63px -3px rgba(0,245,114,1);
box-shadow: 10px 10px 63px -3px rgba(0,245,114,1);
background-color:rgb(157, 230, 191);
}
.productCard_Buy button{
    background-color: #01ff70;
    color: antiquewhite;
    font-size: 25px;
    border: none;
    border-radius:5px;
    padding:15px;
    margin: 25px;
    cursor: pointer;
}

</style>