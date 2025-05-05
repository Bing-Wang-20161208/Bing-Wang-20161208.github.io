
import { createRouter, createWebHashHistory } from 'vue-router';
import ContentFeed from './components/ContentFeed.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ContentFeed
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;