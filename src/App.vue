<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<Button @click="showDialog" style="margin: 15px">Создать пост</Button>
		<PostList :posts="posts" @remove="removePost" />
		<Dialog v-model:show="dialogVisible">
			<PostForm @create="createPost" />
		</Dialog>
	</div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
	components: {
		PostForm,
		PostList,
	},

	data() {
		return {
			posts: [
				{ id: 1, title: 'Javascript', body: 'Описание' },
				{ id: 2, title: 'Javascript 2', body: 'Описание 2' },
				{ id: 3, title: 'Javascript 3', body: 'Описание 3' },
			],
			dialogVisible: false,
		};
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
