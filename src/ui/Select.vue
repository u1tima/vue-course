<template>
	<select v-model="value" @change="changeValue">
		<option disabled value="">Выберете из списка</option>
		<option v-for="option in options" :key="option.value" :value="option.value">
			{{ option.name }}
		</option>
	</select>
</template>

<script>
export default {
	name: 'Select',
	props: {
		value: { type: String, default: '' },
		options: { type: Array, default: () => [] },
	},

	methods: {
		changeValue(ev) {
			this.$emit('update:value', ev.target.value);
		},
	},
};
</script>

<style scoped></style>
