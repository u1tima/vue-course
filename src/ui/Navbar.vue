<template>
	<div class="navbar">
		<div @click="$router.push('/')">Vue 3</div>
		<div class="buttons">
			<Button @click="$router.push('/posts')">Посты</Button>
			<Button @click="$router.push('/about')">О сайте</Button>
			<Button @click="$router.push('/store')">Store</Button>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 56px;
	padding: 0 15px;
	background-color: lightgray;
	box-shadow: 2px 2px 4px gray;
}

.buttons {
	display: flex;
	gap: 10px;
}
</style>
