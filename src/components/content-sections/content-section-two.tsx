import ServicesCarousel from '../carousels/services-carousel'

export function ContentSectionTwo() {
	return (
		<div className="flex w-full flex-col items-center justify-center bg-secondary p-4">
			<div className="flex w-5/6 flex-col gap-4 p-2 text-secondary-foreground">
				<h1 className="font-medium text-2xl">Services We Provide</h1>
				<p>
					This list is just an example of services we provide, we many
					include many others so please reach out.
				</p>
			</div>

			<div className="w-5/6">
				<ServicesCarousel />
			</div>
		</div>
	)
}
