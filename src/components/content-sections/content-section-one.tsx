import Image from 'next/image'
import { AnimateOnScroll } from '../utils/animate-on-scroll'
export function ContentSectionOne() {
	return (
		<div className="flex w-full flex-col gap-4 p-2 sm:grid sm:grid-cols-2 md:w-5/6">
			<div className="flex items-center justify-center">
				<AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-left-12 duration-1000">
					<h1 className="text-center font-bold text-4xl text-black md:ml-8">
						Transform Your Home with Our Expert Renovation Services.
					</h1>
				</AnimateOnScroll>
			</div>
			<div className="flex w-full justify-end">
				<Image
					alt={'Reno Image'}
					className="rounded-sm border shadow-lg"
					height={600}
					src={'/reno1.png'}
					width={600}
				/>
			</div>
		</div>
	)
}
