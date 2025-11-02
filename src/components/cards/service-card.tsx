import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card'

export default function ServiceCard({
	title,
	description,
	content,
	footer,
}: {
	title: string
	description: string
	content: string
	footer: string
}) {
	return (
		<Card className='h-96'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>				
			</CardHeader>
			<CardContent>
				<p>{content}</p>
			</CardContent>
			<CardFooter>
				<p>{footer}</p>
			</CardFooter>
		</Card>
	)
}
