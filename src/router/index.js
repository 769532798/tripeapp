import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/views/home/home.vue')
        },
        {
            path: '/favor',
            component: () => import('@/views/favor/favor.vue')
        },
        {
            path: '/order',
            component: () => import('@/views/order/order.vue')
        },
        {
            path: '/message',
            component: () => import('@/views/message/message.vue'),
            meta: {
                hideTabar: true
            }
        },
        {
            path: '/city',
            component: () => import('@/views/city/city.vue'),
            meta: {
                hideTabar: true
            }
        },
        {
            path: '/search',
            component: () => import('@/views/search/Search.vue'),
            meta: {
                hideTabar: true
            }
        },
        {
            path: '/detail/:id',
            component: () => import('@/views/detail/Detail.vue'),
            // meta: {
            //     hideTabar: true
            // }
        }

    ]
})
export default router