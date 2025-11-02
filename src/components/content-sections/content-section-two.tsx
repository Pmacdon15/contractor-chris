import ServicesCarousel from '../carousels/services-carousel'

export function ContentSectionTwo() {
	return (
		<div className="w-full bg-secondary flex justify-center items-center p-4 flex-col">
			<div className="w-5/6 p-2 text-secondary-foreground flex flex-col gap-4">
				<h1 className="text-2xl font-medium">Services We Provide</h1>
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
