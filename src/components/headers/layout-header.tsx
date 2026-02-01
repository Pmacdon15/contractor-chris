import { HardHat } from 'lucide-react'
import { NavBar } from '../nav/nav-bar'

export default function LayoutHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
				<div className="flex items-center gap-2">
					<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
						<HardHat size={24} />
					</div>
					<h1 className="font-bold text-xl tracking-tight md:text-2xl">
						Contractor Chris
					</h1>
				</div>

				<div className="hidden md:flex">
					<NavBar />
				</div>
				{/* Mobile nav placeholder or implementation could go here if needed, but keeping simple for now */}
			</div>
			<div className="flex justify-center border-t py-2 md:hidden">
				<NavBar />
			</div>
		</header>
	)
}
