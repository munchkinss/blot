import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Home from '@/components/Home'
/* eslint-disable */
Vue.use(Router)

export default new Router({

    mode: 'history',
    routes: [{
        path: '/signup',
        name: 'signup',
        component: SignUp
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/',
        name: 'home',
        component: Home
    }]
})