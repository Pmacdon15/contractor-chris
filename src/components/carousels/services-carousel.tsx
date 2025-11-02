import ServiceCard from '../cards/service-card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'

const serviceData = [
	{
		title: 'Handyman Services',
		content:
			'From minor repairs to home improvements, our handyman services cover all your maintenance needs.',
		description:
			'Professional and reliable handyman solutions for your home or business',
		footer: 'Available for emergency repairs',
	},
	{
		title: 'Drywall & Framing',
		content:
			'Expert drywall installation, repair, and framing services for your construction needs.',
		description: 'Quality structural work and seamless drywall finishing',
		footer: 'Licensed & insured contractors',
	},
	{
		title: 'Finishing & Trim Services',
		content:
			'Skilled finishing and trim work — baseboards, crown molding, door/window casings, and final touches to make your space look polished.',
		description:
			'Precision carpentry and seamless finishing for interiors and cabinetry',
		footer: 'Attention to detail & flawless results',
	},
	{
		title: 'Painting Services',
		content:
			'Professional interior and exterior painting services for residential and commercial properties.',
		description: 'High-quality paint work with attention to detail',
		footer: 'Color consultation available',
	},
	{
		title: 'Kitchen Remodeling',
		content:
			'Complete kitchen renovation services from design to installation.',
		description: 'Transform your kitchen into a modern, functional space',
		footer: 'Free design consultation',
	},
]
export default function ServicesCarousel() {
	return (
		<Carousel>
			<CarouselContent>
				{serviceData.map((service, index) => (
					<CarouselItem
						className="basis-[95%] md:basis-[45%] lg:basis-[30%]"
						key={index}
					>
						<ServiceCard
							content={service.content}
							description={service.description}
							footer={service.footer}
							title={service.title}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="bg-secondary" />
			<CarouselNext className="bg-secondary" />
		</Carousel>
	)
}
