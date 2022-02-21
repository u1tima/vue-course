<template>
	<input type="text" class="input" v-model="modelValue" @input="updateInput" />
</template>

<script>
export default {
	name: 'Input',

	props: {
		modelValue: { type: [String, Number], default: '' },
	},

	methods: {
		updateInput(ev) {
			this.$emit('update:modelValue', ev.target.value);
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
