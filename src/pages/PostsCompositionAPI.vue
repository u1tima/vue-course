<template>
	<h1>Страница с постами</h1>
	<div class="controls">
		<Input v-model="searchQuery" v-focus placeholder="Поиск..."></Input>
		<div class="buttons">
			<Button @click="showDialog">Создать пост</Button>
			<Select v-model="selectedSort" :options="sortOptios"></Select>
		</div>
	</div>
	<PostList v-if="!isPostLoading" :posts="searchedPosts" @remove="removePost" />
	<div v-intersection="loadingMorePosts" class="observer"></div>
	<Dialog v-model:show="dialogVisible">
		<PostForm @create="createPost" />
	</Dialog>
</template>

<script>
import { usePosts, useSortedPosts, useSearchedPosts } from '@/hooks';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
	components: {
		PostForm,
		PostList,
	},

	setup(props) {
		const { posts, totalPages, isPostLoading } = usePosts(10);
		const { sortedPosts, selectedSort } = useSortedPosts(posts);
		const { searchQuery, searchedPosts } = useSearchedPosts(sortedPosts);

		return {
			posts,
			totalPages,
			isPostLoading,
			sortedPosts,
			selectedSort,
			searchQuery,
			searchedPosts,
		};
	},

	data() {
		return {
			dialogVisible: false,
			sortOptios: [
				{ value: 'title', name: 'По названию' },
				{ value: 'body', name: 'По содержанию' },
			],
		};
	},

	methods: {},

	computed: {},
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
