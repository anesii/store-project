export default {
    computed:{
        filteredProducts: function(){
            return this.products.filter((product) => {
                return product.name.match(this.search);
            });
        }
    }
}