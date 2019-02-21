<template>
<div class="card mb-3 p-3">
  <div>
      <div class="row justify-content-center">
          <div class="col">
              <div class="product-img m-2" :style="{ backgroundImage: `url(${productImg})` }"></div>
          </div>
      </div>
      <div class="row">
          <div class="col">
              <div class="mt-3 product-name">
                  <strong>{{productName}}</strong>
              </div>
          </div>
      </div>
      <div class="row ">
        <div class="col-6">
            <div class="">
               <strong> &#8358; {{productPrice}} </strong>
            </div>
        </div>
        <div class="col-6 pl-5">
            <div>
               <strong> Quantity: {{productQuantity}} </strong>
            </div>
        </div>
      </div>
      <div class="row">
          <div class="col">
                  <button class="btn btn-primary btn-block " @click="addToCart(myProduct)">Add To Cart <i class="mdi mdi-cart"></i></button>
          </div>
      </div>
  </div>
  <div>
  </div>
</div>
</template>

<script>

import {eventBus} from './main.js';

export default {
    props: [
        'productName',
        'productPrice',
        'productQuantity',
        'productImg',
        'myProduct'
    ],
    data() {
        return {
            
        }
    },
     methods:{
      addToCart(product) {
        eventBus.$emit('addToCart', product);
      }
    }
}
</script>

<style scoped>

   .btn{
       background-color: green;
       border: green;
       margin-top: 20px;
   }

   .product-name{
       height: 50px;
   }

   .card{
       height:500px;
   }

   .product-img{
       background-size: contain;
       background-repeat: no-repeat;
       background-position: center, center;
       height: 270px;
   }
/* 
   .card-body{
       padding: 0;
   } */
</style>
