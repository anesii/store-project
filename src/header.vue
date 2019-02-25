<template>
<div>
    <nav class="sticky-top">
       <ul>
           <li><router-link to="/" exact>All Products</router-link></li>
            <li><router-link to="/smartphones" exact>Smart Phones</router-link> </li>
            <li><router-link to="/notebooks" exact>Notebooks</router-link> </li>
            <li>
                <div class="dropdown open">
                        <button class="btn btn-primary" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                    Cart<i class="mdi mdi-cart"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="triggerId">
                            <div class="col" v-for="product in myCart" :key="product.id">
                                <div class="CartItem bg1 shadow-sm">
                                    <div class="row align-items-justify mb-3">
                                        <div class="col-2">
                                            <div class="item-img pull-left">
                                                <img style="width: 60px; height:60px" class="card-img-top" v-bind:src="product.img">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div>{{product.name}}</div>
                                        </div>
                                        <div class="col-4">
                                            <div>&#8358;{{product.price}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="empty" v-if="bigCart.length==0">No Items In Cart</div>
                            <router-link to="/cart" exact>
                                <button class="btn btn-primary" v-if="bigCart.length > 0">View Cart<i class="mdi mdi-cart"></i></button>
                            </router-link> 
                            <button class="btn btn-danger clear" v-on:click="clearCart(product)" v-if="bigCart.length > 0">Clear Cart</button>
                        </div>
                </div> 
            </li>
       </ul>  
       <div class="notification" v-if="bigCart.length > 0">{{bigCart.length}}</div>
    </nav>
</div>
</template>

<script>

import Cart from './cart.js';
import {eventBus} from './main.js';

export default {
  name: 'Navbar',
  data(){
    return{
      bigCart: [],
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
    }
  },
  mounted() {
    this.bigCart = Cart;
  },
  methods:{
     clearCart(product) {
       var cart = this.myCart;
      cart.splice(cart);
    },
  }
}

</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    color: rgb(170, 170, 219);
}

.notification{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position:relative;
    top: -45px;
    left: 15rem;
    font-weight:bold;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:auto;
}

.dropdown-menu{
    width:400px;
    
}

.bg1{
    background-color: whitesmoke;
}

.empty{
    color: #444;
    text-align: center;
    font-weight: bold;
}

.clear{
    margin-left: 10rem;
}
</style>
