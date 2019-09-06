import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        redirect: '/home',
        component: () =>
            import ('./views/index.vue'),
        children: [{
            path: '/home',
            component: () =>
                import ('./views/home/index.vue')
        }, {
            path: '/my',
            component: () =>
                import ('./views/my/index.vue')
        }]

    }]
})