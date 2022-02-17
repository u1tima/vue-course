<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<Button @click="showDialog">Создать пост</Button>
		<PostList v-if="!isPostLoading" :posts="posts" @remove="removePost" />
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
			} finally {
				this.isPostLoading = false;
			}
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
</style>
