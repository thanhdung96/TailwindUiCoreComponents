<template>
	<div>
		<div class="flex justify-between">
			<label
				:for="props.id"
				class="block text-sm font-medium leading-6 text-gray-900"
				:class="
					props.isValid
						? LABEL_VALID['valid']
						: LABEL_VALID['invalid']
				"
			>
				<slot name="label">default label text</slot>
			</label>
			<span
				v-if="props.required"
				id="email-optional"
				class="text-sm leading-6 text-gray-500"
			>
				<slot name="require">default require text</slot>
			</span>
		</div>

		<div
			:class="[
				props.isValid
					? CONTAINER_VALID['valid']
					: CONTAINER_VALID['invalid'],
			]"
		>
			<input
				:id="props.id"
				:type="props.id"
				:name="props.name"
				:disabled="props.disabled"
				:placeholder="props.placeholder"
				:required="props.required"
				:aria-invalid="props.isValid"
				aria-describedby="error-message"
				class="block w-full rounded-md pl-2.5 border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
				:class="[
					props.isValid
						? INPUT_VALID['valid']
						: INPUT_VALID['invalid'],
				]"
				@change="onChange"
				@focusin="onFocusIn"
				@focusout="onFocusOut"
			/>
			<div
				v-if="!props.isValid"
				class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
			>
				<ExclamationCircleIcon
					class="h-5 w-5 text-red-500"
					aria-hidden="true"
				/>
			</div>
		</div>
		<p
			v-if="!props.isValid"
			id="error-message"
			class="mt-2 text-sm text-red-600"
		>
			{{ props.errorMessage }}
		</p>
	</div>
</template>

<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid'

const INPUT_VALID = {
	valid: 'text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600',
	invalid:
		'pr-10 text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500',
}
const LABEL_VALID = {
	valid: 'text-gray-900',
	invalid: 'text-red-900',
}
const CONTAINER_VALID = {
	none: '',
	valid: 'mt-2',
	invalid: 'relative mt-2 rounded-md shadow-sm',
}
const props = defineProps({
	id: { type: String, default: 'id' },
	type: { type: String, default: 'text' },
	name: { type: String, default: 'name' },
	placeholder: { type: String, default: 'placeholder' },
	disabled: { type: Boolean, default: false },
	isValid: { type: Boolean, default: true },
	errorMessage: { type: String, default: 'true' },
	required: { type: Boolean, default: false },
})

const emits = defineEmits(['onChange', 'onFocusIn', 'onFocusOut'])

const onChange = () => {
	emits('onChange')
}

const onFocusIn = () => {
	emits('onFocusIn')
}

const onFocusOut = () => {
	emits('onFocusOut')
}
</script>
