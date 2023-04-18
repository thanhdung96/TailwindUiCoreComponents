<template>
    <MenuItem
        v-slot="{ active }"
    >
        <a
            :href="props.menuItem.href"
            :class="[
                active ? 'bg-gray-50' : '',
                'block px-3 py-1 text-sm leading-6 text-gray-900',
            ]"
            >{{ props.menuItem.name }}</a
        >
    </MenuItem>
</template>

<script setup lang="ts">
import {
	MenuItem,
} from '@headlessui/vue';
import { PropType } from 'vue';
import { IDropdownItemType } from './interfaces/IDropdownItem';

const props = defineProps({
	menuItem: {
		type: Object as PropType<IDropdownItemType>,
		required: true,
		default: () => ({
			href: '#',
			name: 'nav item name',
		}),
	},
	withIcon: { type: Boolean, default: true },
});
</script>
