import ServiceCard from '../cards/service-card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'

export default function ServicesCarousel() {
	return (
		<Carousel>
			<CarouselContent>
                <CarouselItem>
                    <ServiceCard
                        content={'From minor repairs to home improvements, our handyman services cover all your maintenance needs.'}
                        description={'Professional and reliable handyman solutions for your home or business'}
                        footer={'Available for emergency repairs'}
                        title={'Handyman Services'}
                    />
                </CarouselItem>
                <CarouselItem>
                    <ServiceCard
                        content={'Expert drywall installation, repair, and framing services for your construction needs.'}
                        description={'Quality structural work and seamless drywall finishing'}
                        footer={'Licensed & insured contractors'}
                        title={'Drywall & Framing'}
                    />
                </CarouselItem>
				<CarouselItem>3</CarouselItem>
			</CarouselContent>
			<CarouselPrevious className='bg-secondary' />
			<CarouselNext className='bg-secondary' />
		</Carousel>
	)
}
