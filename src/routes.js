import smartPhones from './smartphones.vue';
import noteBooks from './notebooks.vue';
import allProducts from './allproducts.vue';
import cart from './cart.vue';

export default[
    {path: '/', component: allProducts},
    {path: '/smartphones', component: smartPhones},
    {path: '/notebooks', component: noteBooks},
    {path: '/cart', component: cart},
]