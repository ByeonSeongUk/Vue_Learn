import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '../Par'},
        {path: '/Par', component: () => import('../components/ParentCop.vue')},
        {path: '/Chi', component: () => import('../components/ChildCop.vue')}
    ]
})