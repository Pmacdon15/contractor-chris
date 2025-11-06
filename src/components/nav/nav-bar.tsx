'use client'

import Link from 'next/link'
import type * as React from 'react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

// import { useIsMobile } from '@/hooks/use-mobile'
const components: {
	id: number
	title: string
	href: string
	description: string
}[] = [
	{
		id: 1,
		title: 'Handyman Services',
		href: '/service/handyman',
		description:
			'Professional and reliable handyman solutions for your home or business',
	},
	{
		id: 2,
		title: 'Drywall & Framing',
		href: '/service/drywall-framing',
		description: 'Quality structural work and seamless drywall finishing',
	},
	{
		id: 3,
		title: 'Finishing & Trim',
		href: '/service/finishing-&-trim',
		description:
			'Precision carpentry and seamless finishing for interiors and cabinetry',
	},
	{
		id: 4,
		title: 'Painting Services',
		href: '/service/painting',
		description: 'High-quality paint work with attention to detail',
	},
	{
		id: 5,
		title: 'Kitchen Remodeling',
		href: '/service/kitchen-remodeling',
		description: 'Transform your kitchen into a modern, functional space',
	},
]

export function NavBar() {
	// const isMobile = useIsMobile()

	return (
		<NavigationMenu viewport={true}>
			<NavigationMenuList className="flex-wrap">
				<NavigationMenuItem>
					<NavigationMenuLink
						asChild
						className={navigationMenuTriggerStyle()}
					>
						<Link href="/">home</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{components.map((component) => (
								<ListItem
									href={`${component.href}`}
									key={component.title}
									title={component.title}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						asChild
						className={navigationMenuTriggerStyle()}
					>
						<Link href="/about">About</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuLink
						asChild
						className={navigationMenuTriggerStyle()}
					>
						<Link href="/get-a-quote">Get a Quote</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className="font-medium text-sm leading-none">
						{title}
					</div>
					<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	)
}
