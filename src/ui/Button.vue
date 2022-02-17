<template>
	<button class="btn">
		<slot />
	</button>
</template>

<script>
export default {
	name: 'Button',
};
</script>

<style scoped>
.btn {
	padding: 10px 15px;
	border: 1px solid teal;
	background: none;
	color: teal;
}
</style>
