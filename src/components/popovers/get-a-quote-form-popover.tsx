import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@radix-ui/react-popover'
import { GetAQuoteForm } from '../forms/get-a-quote-form'
import { Button } from '../ui/button'

export default function GetAQuoteFormPopover() {
	return (
		<Popover >
			<PopoverTrigger asChild>
				<Button className="mt-4" size="lg">
					Get a Quote Today
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-96 mt-8'>
				<GetAQuoteForm />
			</PopoverContent>
		</Popover>
	)
}
