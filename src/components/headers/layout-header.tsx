import { HardHat } from 'lucide-react'
import { NavBar } from '../nav/nav-bar'

export default function LayoutHeader() {
	return (
		<div className="my-4 flex w-full flex-col items-center gap-4 p-2 md:grid md:grid-cols-3">
			<div className="col-span-1 flex w-fit gap-2 bg-secondary-foreground px-4 py-4">
				<HardHat color="yellow" size={36} />
				<h1 className="text-3xl">Contractor Chris</h1>
			</div>

			<div className="col-span-2 flex justify-center md:col-span-1">
				<NavBar />
			</div>
		</div>
	)
}
