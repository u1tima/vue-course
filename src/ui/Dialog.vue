<template>
	<div class="dialog" v-if="show" @click.stop="hideDialog">
		<div class="content" @click.stop>
			<slot />
		</div>
	</div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
	name: 'Dialog',

	mixins: [toggleMixin],
};
</script>

<style scoped>
.dialog {
	position: fixed;
	display: flex;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
}

.content {
	min-height: 50px;
	min-width: 300px;
	margin: auto;
	padding: 20px;
	border-radius: 12px;
	background: #ffffff;
}
</style>
