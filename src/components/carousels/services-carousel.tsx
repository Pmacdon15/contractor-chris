'use client'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
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
		description:
			'Professional and reliable handyman solutions for your home or business',
		bg: 'handy',
	},
	{
		title: 'Drywall & Framing',
		description: 'Quality structural work and seamless drywall finishing',
		bg: 'framing',
	},
	{
		title: 'Finishing & Trim Services',
		description:
			'Precision carpentry and seamless finishing for interiors and cabinetry',
		bg: 'finishing',
	},
	{
		title: 'Painting Services',
		description: 'High-quality paint work with attention to detail',
		bg: 'painting',
	},
	{
		title: 'Kitchen Remodeling',
		description: 'Transform your kitchen into a modern, functional space',
		bg: 'remodel',
	},
]
export default function ServicesCarousel() {
	const plugin = React.useRef(
		Autoplay({ delay: 1000, stopOnInteraction: true }),
	)
	return (
		<Carousel
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.play}
			plugins={[plugin.current]}
		>
			<CarouselContent>
				{serviceData.map((service, index) => (
					<CarouselItem
						className="basis-[85%] sm:basis-[65%] md:basis-[45%] lg:basis-[35%]"
						key={index}
					>
						<ServiceCard
							bg={service.bg}
							description={service.description}
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
