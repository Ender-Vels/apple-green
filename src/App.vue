<script >


import Popuos from './components/PopupWindow.vue'
export default{

  components:{
    Popuos,
},
  data(){
    return{
     showModal:false
    }
  },
  methods:{
    showModalMenu:function(){
      this.showModal=!this.showModal
    }
  }
  
}




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
    <div class="catalogBTN">
      <button @click="showModalMenu()"> Каталог</button>
    </div>

        <div class="headers_social">
          <RouterLink to="/"><img src="./assets/ico/telegram.png" alt=""></RouterLink>
          <RouterLink to="/"><img src="./assets/ico/viber.png" alt=""></RouterLink>

        </div>
        <div class="headers_func">
          <div class="headers_func_account">
              <RouterLink to="/Autorize"><button ></button></RouterLink>
        </div>
          <div class="headers_func_basket">
            <button></button>

          </div>
        
      </div>
      </div>
      <body>
          <Popuos :showModalWindow="showModal"  @close="showModal=false"/>
      </body>
      
      
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
.headers_func_account button{
  position: relative;
  top:60px;
  background: none;
  border: none;
  background-image: url('./assets/ico/autorize.png');
  cursor: pointer;
  width: 50px;
  height: 50px;
}
.headers_func_basket{
  position: relative;
  top:60px;
  background: none;
  border: none;
  background-image: url('./assets/ico/basket.png');
  cursor: pointer;
  width: 50px;
  height: 50px;;
  margin-left: 20px;
}
.catalogBTN{
  position: relative;
  top: 70px;
}
.catalogBTN button{
  text-align: center;
  font-size: 20px;
  color: aliceblue;
  background-color: #2dda78;
  padding: 6px;
  border-radius: 10px;
}


</style>
