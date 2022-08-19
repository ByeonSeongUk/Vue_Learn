import { createWebHistory, createRouter } from "vue-router"; // 라이브러리 들고오기
import HomePage from "@/components/HomePage";
import ContentsList from './components/ContentsList.vue'
import Detail from './components/DetailPage'

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/ContentsList",
        component: ContentsList
    },
    {
        path: "/Detail/:id(\\d+)",
        component: Detail
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; // 밖으로 내보내기