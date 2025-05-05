
import { createRouter, createWebHistory } from 'vue-router';
import ContentFeed from './components/ContentFeed.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ContentFeed
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;