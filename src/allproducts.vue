<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="product in products" :key="product.id">
                <card 
                 :productName="product.name"
                  :productPrice="product.price"
                   :productQuantity="product.quantity"
                    :productImg="product.img"
                     :myProduct="product"
                      :stock="product.stock"/>
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
    }
}
</script>

<style scoped>
 
</style>

