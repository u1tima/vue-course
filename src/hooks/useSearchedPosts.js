import { ref, computed } from 'vue';

export function useSearchedPosts(sortedPosts) {
	const searchQuery = ref('');
	const searchedPosts = computed(() =>
		sortedPosts.value.filter(post => post.title.includes(searchQuery.value)),
	);

	return {
		searchQuery,
		searchedPosts,
	};
}
