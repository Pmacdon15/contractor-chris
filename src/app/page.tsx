import { ContentSectionOne } from '@/components/content-sections/content-section-one'
import { ContentSectionTwo } from '@/components/content-sections/content-section-two'
import { GetAQuoteForm } from '@/components/forms/get-a-quote-form'
import Hero from '@/components/hero/hero'

export default function Home() {
	return (
		<div className="flex w-full flex-col items-center gap-4 p-2 md:gap-16">
			<Hero />
			<ContentSectionOne />
			<ContentSectionTwo />
			<GetAQuoteForm />
		</div>
	)
}
