<template>
	<li @click="navigate">
		<a
			class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
			:href="props.navItem.href"
			:class="[
				props.navItem.current
					? NAV_ITEM_ACTIVE['active']
					: NAV_ITEM_ACTIVE['inactive'],
			]"
		>
			<component
				:is="props.navItem.icon"
				class="h-6 w-6 shrink-0"
				aria-hidden="true"
			/>
			{{ props.navItem.name }}
		</a>
	</li>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { INavItemType } from '@/core/interfaces/INavItem';
import { PropType } from 'vue';

const router = useRouter();

const NAV_ITEM_ACTIVE = {
	active: 'bg-gray-800 text-white',
	inactive: 'text-gray-400 hover:text-white hover:bg-gray-800',
};

const props = defineProps({
	navItem: {
		type: Object as PropType<INavItemType>,
		required: true,
		default: () => ({
			href: '#',
			current: false,
			name: 'nav item name',
		}),
	},
	withIcon: { type: Boolean, default: true },
});

const navigate = () => {
	router.push(props.navItem.href);
};
</script>
