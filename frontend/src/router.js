import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home";
import Top5 from "@/views/Top5";
import AllList from "@/views/AllList";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: 'home'},
        {path: '/home', name: 'home', component: Home},
        {path: '/top', name: 'top', component: Top5},
        {path: '/full', name: 'full', component: AllList}
    ]
})