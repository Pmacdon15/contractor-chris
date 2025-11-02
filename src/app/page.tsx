import ServicesCarousel from '@/components/carousels/services-carousel'
import { ContentSectionOne } from '@/components/content-sections/content-section-one'
import Hero from '@/components/hero/hero'

export default function Home() {
	return (
		<div className="flex flex-col gap-4 md:gap-16 w-full items-center">
			<Hero />
			<ContentSectionOne />
			<ContentSectionTwo />
		</div>
	)
}

function ContentSectionTwo() {
	return (
		<div className="w-full bg-secondary flex justify-center items-center p-4 flex-col">
			<div className="w-5/6 p-2 text-secondary-foreground flex flex-col gap-4">
				<h1 className="text-2xl font-medium">Service We Provide</h1>
				<p>
					This list is just an example of services we provide, we many
					include many others so please reach out.
				</p>
			</div>

			<div className="w-5/6 ">
				<ServicesCarousel />
			</div>
		</div>
	)
}
