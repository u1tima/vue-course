<template>
	<PostItem
		v-for="post in posts"
		:key="post.id"
		:post="post"
		@remove="this.$emit('remove', post)"
	/>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
	components: {
		PostItem,
	},

	props: {
		posts: { type: Array, default: () => [] },
	},
};
</script>

<style scoped></style>
