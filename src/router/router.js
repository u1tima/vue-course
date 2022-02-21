import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import About from '@/pages/About';
import Posts from '@/pages/Posts';
import Post from '@/pages/Post';

const routes = [
	{ path: '/', component: Main },
	{ path: '/about', component: About },
	{ path: '/posts', component: Posts },
	{ path: '/posts/:id', component: Post },
];

export const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
});
