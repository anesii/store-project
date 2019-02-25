<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="product in products" :key="product.id">
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
    data() {
        return {
            products: [
                
                {
                    id: 6,
                    name: 'Notebook Lenovo Ideapad 320 Intel Core i5-7200u 8GB',
                    price: 2999,
                    category: 'notebook',
                    quantity: 10,
                   img: require('./assets/img/laptop1.jpg'),
                },
                {
                    id: 7,
                    name: 'Notebook Lenovo Ideapad 320 Intel Core i5-7200u 8GB',
                    price: 1199,
                    category: 'notebook',
                    quantity: 10,
                    img: require('./assets/img/laptop2.jpg'),
                },
                {
                  id: 8,
                    name: 'Notebook Dell Inspironi15-3567-A30P Intel Core 7a i5 4GB',
                    price: 1199,
                    category: 'notebook',
                    quantity: 10,
                   img: require('./assets/img/laptop3.jpg'), 
                },
                {
                    id: 9,
                    name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
                    price: 1199,
                    category: 'notebook',
                    quantity: 10,
                    img: require('./assets/img/laptop4.jpg'),
                },
                {
                    id: 10,
                    name: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
                    price: 1199,
                    category: 'notebook',
                    quantity: 10,
                    img: require('./assets/img/laptop5.jpg'),
                },
            ]
        }
    },
    computed:{
        notebooks(){
            var notebooks = this.products.filter( item => {
                return item.category == 'notebook';
            } );

            return notebooks;
        }
    }
}
</script>

<style scoped>
 
</style>

