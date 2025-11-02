import Image from 'next/image'
import { AnimateOnScroll } from '../utils/animate-on-scroll'
export function ContentSectionOne() {
	return (
		<div className="sm:grid sm:grid-cols-2 flex flex-col w-full md:w-5/6 p-2 gap-4">
			<div className="flex justify-center items-center">
				<AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-left-12 duration-1000">
					<h1 className="text-black md:ml-8 text-4xl font-bold text-center">
						Transform Your Home with Our Expert Renovation Services.
					</h1>
				</AnimateOnScroll>
			</div>
			<div className="w-full justify-end flex">
				<Image
					alt={'Reno Image'}
					className=' border shadow-lg rounded-sm'
					height={600}
					src={'/reno1.png'}
					width={600}
				/>
			</div>
		</div>
	)
}
