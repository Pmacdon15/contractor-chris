import { GetAQuoteForm } from '@/components/forms/get-a-quote-form'
import Hero from '@/components/hero/hero'

export default function Page() {
	return (
		<div className="flex flex-col gap-4 md:gap-16 w-full items-center p-2">
			<Hero />
			<GetAQuoteForm />
		</div>
	)
}
