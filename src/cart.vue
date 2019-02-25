<template lang="html">
  <div class="container">
  <h1>Items In Cart</h1>
    <div class="row">
        <div class="col-6">
            <div v-if="myCart==0" class="noItem">
                No Items In Cart
            </div>
        </div>
        <div class="col-6">
            <div v-if="myCart==0" class="noItem">
                <router-link to="/" exact>Go To All Products</router-link>
            </div>
        </div>
    </div>
   <div class="row">
    <div class="col-12" v-for="product in myCart" :key="product.id">
        <div class="CartItem bg-white shadow-sm rounded">
            <div class="row align-items-center mb-3">
                <div class="col-md-1">
                    <div class="item-img pull-left">
                        <img style="width: 70px" class="card-img-top" v-bind:src="product.img">
                    </div>
                </div>
                <div class="col-md-7">
                     <div>
                        {{product.name}}
                    </div>
                </div>
                <div class="col-md-2">
                    <div>
                        &#8358;{{product.price}}
                    </div>
                </div>
                <div class="col-md-1">
                    <div>
                    <button class="btn btn-circle" v-on:click="removeFromCart(product)"><i class="mdi mdi-window-close"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="total" v-if="totalAmount">
    <div> Total : &#8358;{{totalAmount}}</div>
  </div>
 </div>
 
</template>

<script>
import Cart from "./cart.js";
import Card from "./card.vue";

export default {
   name: 'Cart',
   data() {
    return {
      myCart: Cart,
      products: [
          {
                    id: 1,
                    name: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
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
                    name: 'Smartphone Moto G 5S Dual Chip Android 7.0',
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
        ],
        count: 0,
     }
  },
  computed: {
    totalAmount() {
      // return this.Cart.reduce((acc, item) => acc + product.price, 0);
                  let totalPrice = 0;
            this.myCart.forEach(item => {
                totalPrice += item.price;
            })
            return totalPrice;
    },
  },
  methods: {
    removeFromCart(product) {
       var cart = this.myCart;
      cart.splice(cart.indexOf(product), 1);
    },
  }
}
</script>

<style lang="css" scoped>
  .btn-circle{
      color: white;
      background-color: lightgrey;
      border-radius: 50%;
      width: 30px;
      height:30px;
      padding: 2.5px 0px;
      text-align: center;
  }

  .total{
      float: right;
      font-weight: bold;
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size:30px;
  }

  .noItem{
      font-size:20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: bold ;
      color: red;
  }

</style>