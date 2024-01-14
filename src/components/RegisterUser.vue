<script>

</script>

<template>
    <div class="Register_box">
        <div class="Register_box_form">
            <form action="">
                <div class="Register_box_form_Email">
                    <label for="">
                        <span>Email:</span>
                        <input type="email">
                    </label>
                </div>
                
                <div class="Register_box_form_password">
                    <label for="">
                        <span>Пароль:</span>
                        <input type="password">
                    </label>
                </div>
                
                <div class="Register_box_form_ConfirmPassword">
                    <label for="">
                        <span>Підтвердити Пароль:</span>
                        <input type="password">
                    </label>
                </div>
                

                <div class="Register_box_form_Name">
                    <label for="">
                        <span>Ваше ім'я:</span>
                        <input type="name">
                    </label>
                </div>


                <div class="Register_box_form_Surname">
                    <label for="">
                        <span>Ваше прізвище:</span>
                        <input type="surname">
                    </label>
                </div>


                <div class="Register_box_form_DateOfBirth">
                    <label for="">
                        <span>Дата народження:</span>
                        <input type="date">
                    </label>
                </div>
                    <div class="Register_box_form_btn">
                        <button>Зареєструвати мене</button>
                    </div>
            </form>
        </div>
    </div>
</template>

<style>
.Register_box{
    position: absolute;
    width:100%;
    height: 100%;
    z-index: 99998;
    background-color: rgba(146, 136, 136, .3);
    display: grid;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
}
.Register_box_form{
    max-width: 1200px;
    padding: 55px;
    z-index: 1;
    background-color: rgb(211, 223, 223);
    -webkit-box-shadow: 15px -11px 44px -14px rgba(67,185,240,1);
    -moz-box-shadow: 15px -11px 44px -14px rgba(67,185,240,1);
    box-shadow: 15px -11px 44px -14px rgba(67,185,240,1);
    overflow-y:auto;
    margin-top: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    
}
.Register_box_form span{
    display: block;
    font-size: 25px;
    text-align: center;
}
.Register_box_form input{
    display: block;
    font-size: 25px;
    text-align: center;
    border: none;
    margin: 10px;
    border-radius: 10px 0px 10px 0px;
    background: rgba(255,255,255,1);
    background: -moz-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(240,240,240,0.81) 42%, rgba(246,246,246,0.78) 47%, rgba(244,244,244,0.74) 56%, rgba(237,237,237,0.74) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(42%, rgba(240,240,240,0.81)), color-stop(47%, rgba(246,246,246,0.78)), color-stop(56%, rgba(244,244,244,0.74)), color-stop(100%, rgba(237,237,237,0.74)));
    background: -webkit-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(240,240,240,0.81) 42%, rgba(246,246,246,0.78) 47%, rgba(244,244,244,0.74) 56%, rgba(237,237,237,0.74) 100%);
    background: -o-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(240,240,240,0.81) 42%, rgba(246,246,246,0.78) 47%, rgba(244,244,244,0.74) 56%, rgba(237,237,237,0.74) 100%);
    background: -ms-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(240,240,240,0.81) 42%, rgba(246,246,246,0.78) 47%, rgba(244,244,244,0.74) 56%, rgba(237,237,237,0.74) 100%);
    background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(240,240,240,0.81) 42%, rgba(246,246,246,0.78) 47%, rgba(244,244,244,0.74) 56%, rgba(237,237,237,0.74) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );
}

.Register_box_form_Email input{
   
   display: block;
   text-align: center;
    
}

</style>