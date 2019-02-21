<template>
    <nav class="sticky-top">
       <ul>
           <li><router-link to="/" exact>All Products</router-link></li>
            <li><router-link to="/smartphones" exact>Smart Phones</router-link> </li>
            <li><router-link to="/notebooks" exact>Notebooks</router-link> </li>
            <li>
                <router-link to="/cart" exact>
                    <button class="btn btn-primary">Cart<i class="mdi mdi-cart"></i>
                    </button>
                    <!-- <div class="notification">{{bigCart.length}}</div> -->
                </router-link> 
            </li>
       </ul>  
       <div class="notification">{{bigCart.length}}</div>
    </nav>
</template>

<script>

import Cart from './cart.js';
import {eventBus} from './main.js';

export default {
  name: 'Navbar',
  data(){
    return{
      bigCart: [],
    }
  },
  mounted() {
    this.bigCart = Cart;
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
    /* color: black;
    background-color: white;
    border-radius:50%;
    position: absolute;
    width:15px;
    height:15px;
    align-items: center;
    bottom:35px; */

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
</style>
