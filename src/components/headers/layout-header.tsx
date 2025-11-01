import { HardHat } from 'lucide-react'
import { NavBar } from '../nav/nav-bar'

export default function LayoutHeader() {
	return (
		<div className=" flex flex-col gap-4 md:grid md:grid-cols-3 items-center w-full my-4 p-2">
			<div className=" flex gap-2  col-span-1 bg-secondary-foreground w-fit px-4 py-4">
				<HardHat color="yellow" size={36} />
				<h1 className="text-3xl">Contractor Chris</h1>
			</div>

			<div className="col-span-2 md:col-span-1  flex justify-center">
				<NavBar />
			</div>
		
		</div>
	)
}
