<template>
    <div class="catalog">
        <div class="catalog_category">
            <RouterLink to="/CatalogPhone">
            <div class="catalog_category_phone">
                <div class="catalog_category_phone_img">
                <img src="../assets/functions/Phone.webp"> 
                <div class="catalog_category_phone_title">
                    <span>Смартфони</span>
                </div>    
            </div>

            </div>
        </RouterLink>
        <RouterLink to="/">
            <div class="catalog_category_Acs">
                <div class="catalog_category_acs_img">
                <img src="../assets/functions/case.webp">     
            </div>
            <div class="catalog_category_phone_title">
                <span>Аксесуари</span>
            </div> 
            </div>
        </RouterLink>
            
        </div>

    </div>
    <RouterView/>
</template>

<script>



</script>

<style>
.catalog{
    max-width: 1900px;
    margin: 0 auto;

}
.catalog_category{
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    justify-content: space-around;
    
}
.catalog_category_phone_img img{
max-height: 350px;
}
.catalog_category_acs_img img{
    max-width: 320px;
    
}
.catalog_category_acs_img{
    height: 320px;
    
}
</style>