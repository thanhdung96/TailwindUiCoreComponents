<template>
	<nav class="flex flex-1 flex-col">
		<ul role="list" class="flex flex-1 flex-col gap-y-7">
			<li>
				<ul role="list" class="-mx-2 space-y-1">
					<MatiNavItem
						v-for="item in props.navItemList.lstNavItem"
						:key="item.name"
						:nav-item="item"
					/>
				</ul>
			</li>

			<li v-if="subNavItemList.lstNavItem.length > 0" class="mt-auto">
				<ul role="list" class="-mx-2 space-y-1">
					<MatiNavItem
						v-for="subItem in props.subNavItemList.lstNavItem"
						:key="subItem.name"
						:nav-item="subItem"
					/>
				</ul>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
// import { PropType } from 'vue'
import MatiNavItem from './MatiNavItem.vue'
import { NavItemListType } from '@/core/interfaces/INavItem'

const props = defineProps({
	navItemList: { type: NavItemListType, required: true, default: () => [] },
	subNavItemList: {
		type: NavItemListType,
		required: false,
		default: () => [],
	},
	withIcon: { type: Boolean, default: true },
})
</script>
