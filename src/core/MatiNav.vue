<template>
	<nav class="flex flex-1 flex-col">
		<ul role="list" class="flex flex-1 flex-col gap-y-7">
			<li>
				<ul role="list" class="-mx-2 space-y-1">
					<MatiNavItem
						v-for="item in props.navItemList"
						:key="item.name"
						:nav-item="item"
					/>
				</ul>
			</li>

			<li v-if="props.subNavItemList.length > 0" class="mt-auto">
				<ul role="list" class="-mx-2 space-y-1">
					<MatiNavItem
						v-for="subItem in props.subNavItemList"
						:key="subItem.name"
						:nav-item="subItem"
					/>
				</ul>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import MatiNavItem from '@/core/MatiNavItem.vue';
import { INavItemType } from '@/core/interfaces/INavItem';

const props = defineProps({
	navItemList: {
		type: Array as PropType<Array<INavItemType>>,
		required: true,
		default: () => [],
	},
	subNavItemList: {
		type: Array as PropType<Array<INavItemType>>,
		required: false,
		default: () => [],
	},
	withIcon: { type: Boolean, default: true },
});
</script>
