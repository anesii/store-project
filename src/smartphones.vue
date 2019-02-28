<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="product in smartphones" :key="product.id">
                <card 
                 :productName="product.name"
                  :productPrice="product.price"
                   :productQuantity="product.quantity"
                    :productImg="product.img"
                     :myProduct="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import card from './card.vue';


export default {
    components:{
      'card': card,
    },
    computed:{
         products(){
            return this.$store.state.products;
        },
        smartphones(){
            var smartphones = this.products.filter( item => {
                return item.category == 'phone';
            } );
            return smartphones;
        }
    },
}
</script>

<style scoped>
 
</style>

