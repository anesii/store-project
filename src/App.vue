<template>
  <div>
   <app-header :cartNo="numberInCart"></app-header>
   <div class="container">
      <div class="row">
        <div class="col">
          <transition name="fade">
            <router-view />
          </transition>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import header from './header.vue';


export default {
  components: {
    'app-header': header
  },
     computed: {
      numberInCart() {
      return this.$store.getters.getBigCart.length;
    }
  },
  
}
</script>

<style scoped>
  @import url("//cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css");

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .35s;
}

.fade-enter-active {
  transition-delay: .35s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
