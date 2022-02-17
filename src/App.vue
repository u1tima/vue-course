<template>
	<div class="app">
		<form class="form" @submit.prevent>
			<h4>Создание поста</h4>
			<input
				class="input"
				type="text"
				placeholder="Название"
				:value="title"
				@input="title = $event.target.value"
			/>
			<input
				class="input"
				type="text"
				placeholder="Описание"
				:value="body"
				@input="body = $event.target.value"
			/>
			<button class="btn" @click="createPost">Создать</button>
		</form>
		<div class="post" v-for="post in posts" :key="post.id">
			<div><strong>Название:</strong> {{ post.title }}</div>
			<div><strong>Описание:</strong> {{ post.body }}</div>
		</div>
	</div>
</template>

<script>
export default {
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
		createPost() {
			const post = {
				id: Date.now(),
				title: this.title,
				body: this.body,
			};
			this.posts.push(post);
			this.title = '';
			this.body = '';
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

.input {
	width: 100%;
	border: 1px solid teal;
	padding: 10px 15px;
	margin-top: 15px;
}

.btn {
	align-self: flex-end;
	margin-top: 15px;
	padding: 10px 15px;
	border: 1px solid teal;
	background: none;
	color: teal;
}

.form {
	display: flex;
	flex-direction: column;
}

.post {
	margin-top: 15px;
	padding: 15px;
	border: 2px solid teal;
}
</style>
