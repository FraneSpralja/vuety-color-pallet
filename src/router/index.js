import { createMemoryHistory, createRouter } from "vue-router";
import ColorHome from "../views/ColorHome.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: ColorHome
    },
    {
        path: '/saved',
        name: 'saved-palletes',
        component: () => import('../views/ColorSaves.vue')
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export {
    router
}