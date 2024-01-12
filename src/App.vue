<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import AutorizeBlock from './components/AutorizeSites.vue'



</script>

<template>
  <header>
    <div class="headers">
      <div class="headers_logo">
        <RouterLink to="/"><img src="./assets/logo/logo-color.svg"></RouterLink>
      </div>
      <div class="headers_contacts">
        <span>Зв'яжіться з нами</span>
        <div class="headers_contacts_number">
          <span>000-0000-00-00</span>
        
        
        </div>
      
      
      </div>
        <div class="headers_social">
          <RouterLink to="/"><img src="./assets/ico/telegram.png" alt=""></RouterLink>
          <RouterLink to="/"><img src="./assets/ico/viber.png" alt=""></RouterLink>

        </div>
        <div class="headers_func">
          <div class="headers_func_account">
              <RouterLink to="/"><img src="./assets/ico/autorize.png" alt=""></RouterLink>
        </div>
          <div class="headers_func_basket">
            <RouterLink to="/"><img src="./assets/ico/basket.png" alt=""></RouterLink>

          </div>
        
      </div>
      </div>
      
  </header>

  <RouterView />
</template>

<style>
*{
  margin: 0px;
  padding: 0px;
}
.headers{
  background-color: #051726;
  display: flex;
  width: 100%;
  justify-content: space-around;
 
}

.headers_logo img{
  height: 170px;
}
.headers_contacts{
  display: block;
  text-align: center;
  margin-left: 25px;
}

.headers_contacts span{
  position: relative;
  top: 65px;
  color: white;
  font-size: 13px;
}
.headers_contacts_number span{
  color: white;
  font-size: 25px;
}

.headers_social img {
  position: relative;
  height: 30px;
  top:70px;
  margin-left: 15px;

}
.headers_func{
    display: flex;
}
.headers_func_account{
  display: block;
}
.headers_func_account img{
  position: relative;
  top:60px;
}
.headers_func_basket{
  margin-left: 40px;
  position: relative;
  top:60px;
}


</style>
