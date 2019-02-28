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
                            <div class="col" v-for="product in bigCart" :key="product.id">
                                <div class="CartItem bg1 shadow-sm">
                                    <div class="row align-items-justify mb-3">
                                        <div class="col-2">
                                            <div class="item-img pull-left">
                                                <img style="width: 60px; height:60px" class="card-img-top" v-bind:src="product.img">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div>{{product.name}}</div>
                                             <span class="incart">
                                                In Cart: {{product.stock}}
                                            </span>
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

// import Cart from './cart.js';

export default {
  name: 'Navbar',
  data(){
    return{
    }
  },
    methods:{
        clearCart(product) {
        var cart = this.bigCart;
        cart.splice(cart);
    },
    },
    computed:{
        bigCart(){
            return this.$store.getters.getDistinctCart;
        } 
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
    width:450px;
    
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

.incart{
    font-weight:bold;
    color: darkslategrey;
}
</style>
