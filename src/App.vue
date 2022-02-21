<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<div class="controls">
			<Input v-model="searchQuery" placeholder="Поиск..."></Input>
			<div class="buttons">
				<Button @click="showDialog">Создать пост</Button>
				<Select v-model="selectedSort" :options="sortOptios"></Select>
			</div>
		</div>
		<PostList
			v-if="!isPostLoading"
			:posts="searchedPosts"
			@remove="removePost"
		/>
		<div ref="observer" class="observer"></div>
		<!-- <div class="pages">
			<div
				v-for="pageNumber in totalPages"
				:key="pageNumber"
				:class="['page', { 'current-page': pageNumber === page }]"
				@click="changePage(pageNumber)"
			>
				{{ pageNumber }}
			</div>
		</div> -->
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
			page: 1,
			limit: 10,
			totalPages: 0,
			sortOptios: [
				{ value: 'title', name: 'По названию' },
				{ value: 'body', name: 'По содержанию' },
			],
		};
	},

	mounted() {
		this.fetchPosts();

		const options = {
			rootMargin: '8px',
			threshold: 1.0,
		};

		const cb = (entries, observer) => {
			if (entries[0].isIntersecting && this.page <= this.totalPages) {
				this.loadingMorePosts();
			}
		};

		const observer = new IntersectionObserver(cb, options);
		observer.observe(this.$refs.observer);
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
					'https://jsonplaceholder.typicode.com/posts',
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					},
				);
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit,
				);
				this.posts = response.data;
			} catch (error) {
				alert('Ошибка');
			} finally {
				this.isPostLoading = false;
			}
		},

		async loadingMorePosts() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts',
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					},
				);
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit,
				);
				this.posts = [...this.posts, ...response.data];
				this.page += 1;
			} catch (error) {
				alert('Ошибка');
			} 
		},

		// changePage(pageNumber) {
		// 	this.page = pageNumber;
		// 	this.fetchPosts();
		// },
	},

	computed: {
		sortedPosts() {
			return [...this.posts].sort((a, b) =>
				a[this.selectedSort]?.localeCompare(b[this.selectedSort]),
			);
		},

		searchedPosts() {
			return this.sortedPosts.filter(post =>
				post.title.includes(this.searchQuery),
			);
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

.controls {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.buttons {
	display: flex;
	justify-content: space-between;
}

.pages {
	display: flex;
	margin-top: 15px;
}

.page {
	border: 1px solid black;
	padding: 10px;
}

.current-page {
	border: 2px solid teal;
}

.observer {
	height: 15px;
	background-color: teal;
}
</style>
