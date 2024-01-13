

<script>
    export default{
        props:{
            isClick:Boolean
        },
        data(){
            return{
                
            
            }
            
        },
        
        
        
        
}
</script>



<template>
    <div class="ModalBoard" v-if="isClick">
        <div class="ModalBoard_contentBox">
        <form action="">
            <div>
                <button @click="ThisCkickAutorizeForm()">X</button>
            </div>
            <div class="ModalBoard_Email">
                <label for="">
                    <span>Email:</span>
                    <input type="email">
                </label>
            </div>
            <div class="ModalBoard_Password">
                <label for="">
                    <span>Password:</span>
                    <input type="password">
                </label>
            </div>
            <div class="ModalBoard_contentBox_btn">
                <button>Увійти</button>
                <RouterLink to="/">Ще не зареєстровані?</RouterLink>
            </div>
            <div>
                
            </div>
        </form>
    </div>
</div>
<RouterView/>
</template>






<style>

    .ModalBoard{
        position: fixed;
        width:100%;
        height: 90%;
        z-index: 99998;
        background-color: rgba(146, 136, 136, .3);
        display: grid;
        align-items: center;
        justify-content: center;
        overflow-y: auto;
        
       
    }
    .ModalBoard_contentBox{
        max-width: 600px;
        height: 380px;
        padding: 55px;
        z-index: 1;
        background-color: rgb(197, 206, 206);
        -webkit-box-shadow: 15px -11px 44px -14px rgba(67,185,240,1);
        -moz-box-shadow: 15px -11px 44px -14px rgba(67,185,240,1);
        box-shadow: 15px -11px 44px -14px rgba(67,185,240,1);
        overflow-y:auto;
        
        
        
       

    }
    .ModalBoard_Email {
        
       align-items: center;
       justify-content: center;
       text-align: center;
       padding-top: 50px;

    }
    .ModalBoard_Email span{
        display: block;
        font-size: 30px;
    

    }
    .ModalBoard_Password{
        
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 10px;
        padding-top: 50px;
 
     }
     .ModalBoard_Password span{
        display: block;
        font-size: 30px;
       
 
     }
     .ModalBoard_contentBox_btn{
        align-items: center;
        text-align: center;
        margin-top: 20px;    
     }
     .ModalBoard_contentBox_btn button{
        font-size: 25px;
        padding: 10px;
        border-radius: 10px;
        padding: 15px;
        margin: 20px;
        border-radius: 0px 10px 0px 10px;
        width: 200px;
        border: 3px solid rgb(27, 160, 116);
        background: none;
        cursor: pointer;
     }
     .ModalBoard_Email input{
        border: none;
        font-size: 30px;
        border-radius: 10px 0px 10px 0px;
     }
     .ModalBoard_Password input{
        border: none;
        font-size: 30px;
        border-radius: 10px 0px 10px 0px;
     }
     .ModalBoard_contentBox_btn a{
        display: block;
        color: blue;
        font-size: 18px;
        text-decoration: none;
     }

</style>
