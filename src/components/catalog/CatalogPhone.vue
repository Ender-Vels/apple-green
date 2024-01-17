<template>
    <div class="catalog">
        <div class="catalog_filter">
            <div class="catalog_filter_title">
                <span>Фільтри</span>
            </div>
            <div class="catalog_filter_model">
                <span>Модель:</span>
                <select name="catalog_filter_model_phone" required="required">
                    <option value="">Виберіть бажану модель:</option>
                    <option value="15 pro max">15 Pro Max</option>
                    <option value="15 Plus">15 Plus</option>
                    <option value="15 Pro">15 Pro</option>
                    <option value="15">15</option>
                    <option value="14 Pro Max">14 Pro Max</option>
                    <option value="14 Plus">14 Plus</option>
                    <option value="14 Pro">14 Pro</option>
                    <option value="14">14</option>
                    <option value="13 Pro Max">13 Pro Max</option>
                    <option value="13 Pro">13 Pro</option>
                    <option value="13">13</option>
                    <option value="12 Pro Max">12 Pro Max</option>
                    <option value="12 Pro">12 Pro</option>
                    <option value="12">12</option>
                    <option value="11 Pro Max">11 Pro Max</option>
                    <option value="11 Pro">11 Pro</option>
                    <option value="11">11</option>
                    <option value="XS MAX">XS MAX</option>
                    <option value="XS">XS</option>
                    <option value="XR">XR</option>
                    <option value="X">X</option>

                </select>
            </div>
            <div class="catalog_filter_price">
                <span>Ціна:</span>
                <vue-slider v-model="priceFilter" />
            </div>
        </div>
        <div class="catalog_list">

        <div v-for="(phone,index) in arrayPhone" :key="index">

            <Card
             :title="phone.title"
             :photoURL="phone.photoURL"
             :price="phone.price"
              />
    
           </div>
        </div>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import Card from '../ProductCard.vue'
export default{
    components:{
        Card,
        VueSlider,
    },
    data(){
        return{
            arrayPhone:[
                {
                    title:'Apple iPhone 14 Pro 128 ГБ Б/У (Deep Purple) Ідеальний стан',
                    photoURL:"../assets/product/14PM.png",
                    price: 23990,
                },
                {
                    title:'Apple iPhone 14 Pro 128 ГБ Б/У (Deep Purple) Ідеальний стан',
                    photoURL:"../assets/product/14PM.png",
                    price: 22990
                },
                {
                    title:'Apple iPhone 14 Pro 128 ГБ Б/У (Deep Purple) Ідеальний стан',
                    photoURL:"../assets/product/14PM.png",
                    price: 21990,
                },
            ],
            priceFilter:0,
        }
        
    }
}
</script>


<style>
.catalog{
    display:flex;
}
.catalog_list{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.catalog_filter_model span{
    display:block;
}
.catalog_filter_model select{
    border:none;
    font-size: 15px;
    border-radius:10px;
}
.catalog_filter_model option{
    border:none;
}
</style>

