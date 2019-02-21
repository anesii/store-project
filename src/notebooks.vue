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
                    id: 1,
                    name: 'Smartphone Xiaomi Mi A1 dual Andriod one 7.1',
                    price: 1199,
                    category: 'phone',
                    quantity: 10,
                    img: require('./assets/img/phone1.jpg'),
                },
                {
                    id: 2,
                    name: 'Smartphone Samsung Galaxy s7 Edge',
                    price: 1943,
                    category: 'phone',
                    quantity: 10,
                    img: require('./assets/img/phone2.jpg'),
                },
                {
                    id: 3,
                    name: 'Smartphone Moto G 5S Dual Chip Andriod 7.0',
                    price: 929,
                    category: 'phone',
                    quantity: 10,
                   img: require('./assets/img/phone3.jpg'),
                },
                {
                    id: 4,
                    name: 'iPhone 8 Dourado 64GB Tela 4.7" iOS 11',
                    price: 3949,
                    category: 'phone',
                    quantity: 10,
                   img: require('./assets/img/phone4.jpg'),
                },
                {
                    id: 5,
                    name: 'Smartphone Motorola Moto G6 Plus',
                    price: 1699,
                    category: 'phone',
                    quantity: 10,
                    img: require('./assets/img/phone5.jpg'),
                },
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

