'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import type * as React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

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
import { ControlledTextArea } from './controlled-text-area'
import { ControlledTextInput } from './controlled-text-input'

// import {
// 	InputGroup,
// 	InputGroupAddon,
// 	InputGroupText,
// 	InputGroupTextarea,
// } from '@/components/ui/input-group'

const formSchema = z.object({
	full_name: z
		.string()
		.min(3, 'Full Name must be at least 3 characters.')
		.max(25, 'Full Name must be at most 25 characters.'),
	email: z
		.email('Enter your email')
		.min(3, 'Email must be at least 3 characters.')
		.max(50, 'Email must be at most 50 characters.'),
	message: z
		.string()
		.min(20, 'Message must be at least 20 characters.')
		.max(200, 'Message must be at most 200 characters.'),
})

export function GetAQuoteForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			full_name: '',
			email: '',
			message: '',
		},
	})

	function onSubmit(data: z.infer<typeof formSchema>) {
		toast('You submitted the following values:', {
			description: (
				<pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
					<code>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
			position: 'bottom-right',
			classNames: {
				content: 'flex flex-col gap-2',
			},
			style: {
				'--border-radius': 'calc(var(--radius)  + 4px)',
			} as React.CSSProperties,
		})
	}

	return (
		<Card className="w-full sm:max-w-md">
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
