<template>
	<form class="form" @submit.prevent>
		<h4>Создание поста</h4>
		<Input v-model:value="post.title" />
		<Input v-model:value="post.body" />
		<Button @click="createPost">Создать</Button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			post: {
				title: '',
				body: '',
			},
		};
	},

	methods: {
		createPost() {
			this.post.id = Date.now();
			this.$emit('create', this.post);
			this.post = {
				title: '',
				body: '',
			};
		},
	},
};
</script>

<style scoped>
.form {
	display: flex;
	flex-direction: column;
	gap: 15px;
}
</style>
