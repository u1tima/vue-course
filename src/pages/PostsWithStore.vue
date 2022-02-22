<template>
	<h1>Страница с постами</h1>
	<div class="controls">
		<Input
			:modelValue="searchQuery"
			@update:modelValue="setSearchQuery"
			v-focus
			placeholder="Поиск..."
		></Input>
		<div class="buttons">
			<Button @click="showDialog">Создать пост</Button>
			<Select
				:modelValue="selectedSort"
				:options="sortOptios"
				@update:modelValue="setSelectedSort"
			></Select>
		</div>
	</div>
	<PostList v-if="!isPostLoading" :posts="searchedPosts" @remove="removePost" />
	<div v-intersection="loadMorePosts" class="observer"></div>
	<Dialog v-model:show="dialogVisible">
		<PostForm @create="createPost" />
	</Dialog>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
	components: {
		PostForm,
		PostList,
	},

	data() {
		return {
			dialogVisible: false,
		};
	},

	mounted() {
		this.fetchPosts();
	},

	methods: {
		...mapMutations({
			setPage: 'post/setPage',
			setPosts: 'post/setPosts',
			setSearchQuery: 'post/setSearchQuery',
			setSelectedSort: 'post/setSelectedSort',
		}),

		...mapActions({
			loadMorePosts: 'post/loadMorePosts',
			fetchPosts: 'post/fetchPosts',
		}),

		createPost(post) {
			this.setPosts([...this.posts, post]);
			this.dialogVisible = false;
		},

		removePost(post) {
			this.setPosts(this.posts.filter(p => p.id !== post.id));
		},

		showDialog() {
			this.dialogVisible = true;
		},
	},

	computed: {
		...mapState({
			posts: state => state.post.posts,
			isPostLoading: state => state.post.isPostLoading,
			selectedSort: state => state.post.selectedSort,
			searchQuery: state => state.post.searchQuery,
			page: state => state.post.page,
			limit: state => state.post.limit,
			totalPages: state => state.post.totalPages,
			sortOptios: state => state.post.sortOptios,
		}),

		...mapGetters({
			sortedPosts: 'post/sortedPosts',
			searchedPosts: 'post/searchedPosts',
		}),
	},
};
</script>

<style scoped>
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
