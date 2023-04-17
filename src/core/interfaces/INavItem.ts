export interface INavItemType {
	href: string
	current: boolean
	name: string
	icon: object
}

// export class NavItemType implements INavItemType {
// 	href: string
// 	current: boolean
// 	name: string
// 	icon: object

// 	constructor(
// 		href: string = '#',
// 		current: boolean = false,
// 		name: string = '#',
// 		icon: object
// 	) {
// 		this.href = href
// 		this.current = current
// 		this.name = name
// 		this.icon = icon
// 	}
// }

// export class NavItemListType {
// 	lstNavItem: Array<NavItemType>

// 	constructor(lstNavItem: Array<NavItemType> = []) {
// 		this.lstNavItem = lstNavItem
// 	}
// }
