<template>
<div class="card mb-3 p-3">
  <div>
      <div class="row justify-content-center">
          <div class="col">
              <div class="product-img m-2" :style="{ backgroundImage: `url(${productImg})` }">
                  <div class="overlay rounded p-5 m-5 shadow-sm">
                    <div class="text"> 
                        <div class="feat ml-4">
                        Features: 
                        </div>
                            <ul>
                                <li v-for="item in productDescription" :key="item.id">{{item}}</li>
                            </ul> 
                    </div>
                </div>
              </div>
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


export default {
    props: [
        'productName',
        'productPrice',
        'productQuantity',
        'productImg',
        'myProduct',
        'productDescription'
    ],
    data() {
        return {
            
        }
    },
     methods:{ 
         addToCart(myProduct){
             this.$store.commit('addToCart', myProduct)
         }
    //   addToCart(product){
    //       this.productQuantity--;
    //       eventBus.$emit('addToCart',product);
    //       if(this.productQuantity == 0){
    //           this.productQuantity=0;
    //           alert('This product is not available at the moment');
    //       }
    //     },
    }
}
</script>

<style scoped>

   .btn{
       background-color: green;
       border: green;
       margin-top: 20px;
       cursor: pointer;
   }

.btn:hover{
    background-color: darkgreen;
}
button:active {
  transform: translateY(2px);
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

    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        z-index:5;
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
        -webkit-transition: .3s ease;
        transition: .3s ease;
        background-color: lightgray;
}
    .product-img:hover .overlay {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        opacity:0.8;
}
    .text{
        font-weight:bold;
        font-size:20px;
        align-content: center;
        color: black;
    }
    
</style>
