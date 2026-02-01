'use client'

import type { Route } from 'next'
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
import { services } from '@/lib/services'

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
						<Link href="/">Home</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{services.map((component) => (
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
				<Link href={href as Route}>
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
