<template>
    <transition name="modalAnimation">
        <div class="modal" v-show="showModalWindow">
        <div class="modalMenu" >
          <div class="modalMenu_cancel">
            <button @click="$emit('close')"><img src="../assets/functions/cancel.png" alt=""></button>
          </div>
          <div class="modalMenu_phone">
            <RouterLink to="/CatalogPhone">Смартфони</RouterLink>
         
          </div>
          <div class="modalMenu_acs">
              <RouterLink to="/">Аксесуари</RouterLink>
              
          </div>
        </div>
      </div>
      </transition>
</template>

<script>
  export default{
    props:["showModalWindow"],
    emits:{
      close:null
    },
    data(){
      return{
        
      }
    },
    methods:{
      closeModal:function(){
        
      }
    }
  
  }
</script>

<style>
.modalMenu_cancel{
  padding: 10px;
}
.modalMenu_cancel button{
  display: block;
border: none;
background: none;
float: right;
cursor: pointer;
}
.modal{
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .3);
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.modalMenu{
  background-color: aliceblue;
  width: 350px;
  height: 100%;
  text-align: center;
}
.modalMenu a{
  font-size: 25px;
  text-decoration: none;
  color: black;
  padding: 10px;
  margin-top: 10px;
}


.modalAnimation-enter-active, .modalAnimation-leave-active{
  animation: modalAnim .5s ease-in-out;
  transition:100px .5s;
}
.modalAnimation-enter, .modalAnimation-leave-to{
  animation: modalAnim .5s ease-in-out;
}



@keyframes modalAnim {
  0%{
    left: 0px;
  }
 
  100%{
    left:5px;
  }
}


.modalMenu_phone{
  padding: 30px;

}
.modalMenu a:hover{
  color: darkblue;
}

</style>