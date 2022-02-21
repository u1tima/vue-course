<template>
	<div class="app">
		<Input v-model="searchQuery" placeholder="Поиск..."></Input>
		<h1>Страница с постами</h1>
		<div class="app-controls">
			<Button @click="showDialog">Создать пост</Button>
			<Select v-model="selectedSort" :options="sortOptios"></Select>
		</div>
		<PostList v-if="!isPostLoading" :posts="searchedPosts" @remove="removePost" />
		<div v-else>Идёт загрузка</div>
		<Dialog v-model:show="dialogVisible">
			<PostForm @create="createPost" />
		</Dialog>
	</div>
</template>

<script>
import axios from 'axios';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
	components: {
		PostForm,
		PostList,
	},

	data() {
		return {
			posts: [],
			dialogVisible: false,
			isPostLoading: false,
			selectedSort: '',
			searchQuery: '',
			sortOptios: [
				{ value: 'title', name: 'По названию' },
				{ value: 'body', name: 'По содержанию' },
			],
		};
	},

	mounted() {
		this.fetchPosts();
	},

	methods: {
		createPost(post) {
			this.posts.push(post);
			this.dialogVisible = false;
		},

		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id);
		},

		showDialog() {
			this.dialogVisible = true;
		},

		async fetchPosts() {
			try {
				this.isPostLoading = true;
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts?_limit=10',
				);
				this.posts = response.data;
			} catch (error) {
				alert('Ошибка');
			} finally {
				this.isPostLoading = false;
			}
		},
	},

	computed: {
		sortedPosts() {
			return [...this.posts].sort((a, b) =>
				a[this.selectedSort]?.localeCompare(b[this.selectedSort]),
			);
		},

		searchedPosts() {
			return this.sortedPosts.filter(post => post.title.includes(this.searchQuery));
		},
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}

.app-controls {
	display: flex;
	justify-content: space-between;
}
</style>
