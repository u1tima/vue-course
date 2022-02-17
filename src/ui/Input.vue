<template>
	<input type="text" class="input" :value="value" @input="updateInput" />
</template>

<script>
export default {
	name: 'Input',

	props: {
		value: { type: [String, Number], default: '' },
	},

	methods: {
		updateInput(ev) {
			this.$emit('update:value', ev.target.value);
		},
	},
};
</script>

<style scoped>
.input {
	width: 100%;
	border: 1px solid teal;
	padding: 10px 15px;
}
</style>
