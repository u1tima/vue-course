import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import About from '@/pages/About';
import Posts from '@/pages/Posts';
import Post from '@/pages/Post';
import PostsWithStore from '@/pages/PostsWithStore';
import PostsCompositionAPI from '@/pages/PostsCompositionAPI';

const routes = [
	{ path: '/', component: Main },
	{ path: '/about', component: About },
	{ path: '/posts', component: Posts },
	{ path: '/posts/:id', component: Post },
	{ path: '/store', component: PostsWithStore },
	{ path: '/composition', component: PostsCompositionAPI },
];

export default createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
});
