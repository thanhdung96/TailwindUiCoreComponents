<template>
	<button
		type="button"
		class="font-semibold shadow-sm"
		:class="[ BUTTON_STYLE[props.style], BUTTON_SIZE[props.size] ]"
		@click="handleClick"
		:disabled="props.disabled"
		
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
const emits = defineEmits(['onClick']);

type ButtonStyle = 'primary' | 'secondary';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const BUTTON_STYLE: Record<ButtonStyle, string> = {
	primary: 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
	secondary: 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
}
const BUTTON_SIZE: Record<ButtonSize, string> = {
	xs: 'rounded px-2 py-1 text-xs',
	sm: 'rounded px-2 py-1 text-sm',
	md: 'rounded-md px-2.5 py-1.5 text-sm',
	lg: 'rounded-md px-3 py-2 text-sm',
	xl: 'rounded-md px-3.5 py-2.5 text-sm'
}

const props = defineProps({
	style: { type: String, default: 'primary' },
	size: { type: String, default: 'xl' },
	disabled: { type: Boolean, default: false }
});

const handleClick = () => {
	emits('onClick');
};
</script>
