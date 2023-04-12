<template>
	<label
		:for="props.id"
		class="block text-sm font-medium leading-6 text-gray-900"
	>
		<slot></slot>
		<span v-if="props.required">*</span>
	</label>

	<div class="mt-2">
		<input
			:id="props.id"
			:type="props.id"
			:name="props.name"
			:disabled="props.disabled"
			:placeholder="props.placeholder"
			:required="props.required"
			class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			@change="onChange"
			@focusin="onFocusIn"
			@focusout="onFocusOut"
		/>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	id: { type: String, default: 'id' },
	type: { type: String, default: 'text' },
	name: { type: String, default: 'name' },
	placeholder: { type: String, default: 'placeholder' },
	disabled: { type: Boolean, default: false },
	required: { type: Boolean, default: false },
});

const emits = defineEmits(['onChange', 'onFocusIn', 'onFocusOut']);

const onChange = () => {
	emits('onChange');
};

const onFocusIn = () => {
	emits('onFocusIn');
};

const onFocusOut = () => {
	emits('onFocusOut');
};
</script>
