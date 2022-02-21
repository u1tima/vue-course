<template>
	<div class="post">
		<div class="content">
            <div><strong>ID:</strong> {{ post.id }}</div>
			<div><strong>Название:</strong> {{ post.title }}</div>
			<div><strong>Описание:</strong> {{ post.body }}</div>
		</div>
		<div class="controls">
			<Button @click="this.$emit('remove', post)">Удалить</Button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: { type: Object, default: () => {} },
	},
};
</script>

<style scoped>
.post {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 15px;
	padding: 15px;
	border: 2px solid teal;
}
</style>
