<template>
  <div>
   <app-header :cartNo="numberInCart"></app-header>
   <div class="container">
      <div class="row">
        <div class="col">
   <router-view></router-view>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import header from './header.vue';
import Cart from './cart.js';
import {eventBus} from "./main.js";

export default {
  components: {
    'app-header': header
  },
     computed: {
    numberInCart() {
      return Cart.length;
    }
  },
  beforeCreate() {
      eventBus.$on('addToCart', (data) => {
        console.log("adding product");
        Cart.unshift(data);
        console.log(Cart);
      });
   }
}
</script>

<style scoped>
  @import url("//cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css");

</style>
