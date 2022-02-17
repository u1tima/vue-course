<template>
	<div class="app">
		<PostForm @create="createPost" />
		<PostList :posts="posts" @remove="removePost" />
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
			title: '',
			body: '',
		};
	},

	methods: {
		createPost(post) {
			this.posts.push(post);
		},

        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        }
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
