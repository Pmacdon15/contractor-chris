'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Field } from '@/components/ui/field'
import { useSendMessage } from '@/lib/mutations/send-message'
import { formSchema } from '@/lib/zod/schemas'
import { ControlledTextArea } from './controlled-text-area'
import { ControlledTextInput } from './controlled-text-input'

export function GetAQuoteForm() {
	const { mutate } = useSendMessage({
		onSuccess: () => {
			toast.success('Email Sent', {
				description: 'Your message has been sent to Contractor Chris!',
			})
			form.reset()
		},
		onError: (error) => {
			toast.error('Error Sending Email', {
				description:
					error instanceof Error
						? error.message
						: 'An error occurred while sending your message.',
			})
		},
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			full_name: '',
			email: '',
			message: '',
		},
	})

	function onSubmit(data: z.infer<typeof formSchema>) {
		mutate(data)
	}

	return (
		<Card className="w-full border-2 shadow-2xl sm:max-w-4xl">
			<CardHeader>
				<CardTitle>Get a Quote</CardTitle>
				<CardDescription>
					Send us a message so we can schedule an on site inspection.{' '}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					id="form-get-a-quote"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<ControlledTextInput
						control={form.control}
						label="Full Name"
						name="full_name"
						placeholder="John Doe"
					/>
					<ControlledTextInput
						control={form.control}
						label="Email"
						name="email"
						placeholder="j.doe@example.com"
					/>
					<ControlledTextArea
						control={form.control}
						label="Message"
						name="message"
						placeholder="This should be a detailed message about the type of work you need done"
					/>
				</form>
			</CardContent>
			<CardFooter>
				<Field orientation="horizontal">
					<Button
						onClick={() => form.reset()}
						type="button"
						variant="outline"
					>
						Reset
					</Button>
					<Button form="form-get-a-quote" type="submit">
						Submit
					</Button>
				</Field>
			</CardFooter>
		</Card>
	)
}
