<template lang="html">
  <div class="container">
  <h1>Items In Cart</h1>
    <div class="row">
        <div class="col-6">
            <div v-if="bigCart==0" class="noItem">
                No Items In Cart
            </div>
        </div>
        <div class="col-6">
            <div v-if="bigCart==0" class="noItem">
                <router-link to="/" exact>Go To All Products</router-link>
            </div>
        </div>
    </div>
   <div class="row">
    <div class="col-12" v-for="product in distinctCart" :key="product.id">
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
                <div>
                    <i class="mdi mdi-plus-box" @click="addCart(product)" ></i> 
                        {{product.stock}}  
                     <i class="mdi mdi-minus-box" @click="removeCart(product)"></i>
                </div>
                <div class="col-md-2">
                    <div>
                        &#8358;{{product.price}}
                    </div>
                </div>
                <div class="col-md-1">
                    <div>
                    <button class="btn btn-circle" v-on:click="removeProduct(product)"><i class="mdi mdi-window-close"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="total" v-if="totalAmount">
    <div> Total : &#8358;{{totalAmount}}</div>
  </div>
    <div class="pop">
        <div class="pop-up" v-if="isPopped"> Check Out Successful!</div>
    </div>
    <div>
        <button class="btn btn-block btn-primary" @click="start" v-if="bigCart.length > 0"> Check Out </button>
    </div>
 </div>
 
</template>

<script>
import Card from "./card.vue";

export default {
   name: 'Cart',
   data() {
    return {
      isPopped: false
     }
  },
  computed: {
    totalAmount() {
      // return this.Cart.reduce((acc, item) => acc + product.price, 0);
                  let totalPrice = 0;
            this.bigCart.forEach(item => {
                totalPrice += item.price;
            })
            return totalPrice;
    },
    bigCart (){
        // var anything = [...new Set(this.$store.getters.getBigCart)]
        return this.$store.getters.getBigCart
    },
    distinctCart(){
        return this.$store.getters.getDistinctCart
    }
  },
  methods: {
    removeFromCart(product) {
       var cart = this.bigCart;
      cart.splice(cart.indexOf(product), 1);
    },
     removeCart:function(cart){
        this.$store.commit('removeFromCart', cart)
    },
    addCart:function(cart){
        this.$store.commit('addToCart', cart)
    },
    removeProduct(cart){
        this.$store.commit('removeProduct', cart)
    },
    start () {
          this.$confetti.start()
          this.isPopped = !this.isPopped
          
          setTimeout(() => {
              this.$confetti.stop()
            //   this.isPopped = !this.isPopped
          }, 1500);
        var cart = this.bigCart;
        cart.splice(cart);
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

.mdi-plus-box, .mdi-minus-box{
   color: black;
   cursor:pointer;
}
.pop-up{
    border: 1px solid black;
    border-radius: 50px;
    color: darkslategray;
    background-color: whitesmoke;
    font-weight: bold;
    font-size:35px;
    padding: 50px;
    width:50%;
}
.pop{
    display: flex;
    position: absolute;
    left: 25rem;
    width:50%;
}
</style>