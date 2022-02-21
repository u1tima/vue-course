<template>
	<Navbar />
	<div class="app">
		<RouterView />
	</div>
</template>

<script>
import Navbar from '@/ui/Navbar';

export default {
	components: {
		Navbar,
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
</style>
