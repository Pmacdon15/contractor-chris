import { GetAQuoteForm } from '@/components/forms/get-a-quote-form'
import Hero from '@/components/hero/hero'

export default function Page() {
	return (
		<div className="flex w-full flex-col items-center gap-4 p-2 md:gap-10">
			<Hero />
			<h1 className="font-extrabold text-4xl text-black">
				Big or small we have you covered
			</h1>
			<p className="text-black">
				{' '}
				So send us a message to day and we can schedule an on-site visit
				and get your a quote.
			</p>
			<GetAQuoteForm />
		</div>
	)
}
