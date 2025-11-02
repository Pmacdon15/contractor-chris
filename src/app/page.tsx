import { ContentSectionOne } from '@/components/content-sections/content-section-one'
import { ContentSectionTwo } from '@/components/content-sections/content-section-two'
import { GetAQuoteForm } from '@/components/forms/get-a-quote-form'
import Hero from '@/components/hero/hero'

export default function Home() {
	return (
		<div className="flex flex-col gap-4 md:gap-16 w-full items-center">
			<Hero />
			<ContentSectionOne />
			<ContentSectionTwo />
			<GetAQuoteForm />
		</div>
	)
}
