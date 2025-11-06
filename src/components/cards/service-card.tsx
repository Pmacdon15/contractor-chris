import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

export default function ServiceCard({
	title,
	description,
	// content,
	// footer,
	bg,
}: {
	title: string
	description: string
	// content: string
	// footer: string
	bg?: string
}) {
	return (
		<Card
			className={'h-96 bg-center bg-cover p-2'}
			style={{ backgroundImage: `url('/${bg}')` }}
		>
			<CardHeader className="mt-auto">
				<CardTitle className="rounded-sm bg-accent/90 p-2">
					{title}
				</CardTitle>
				<CardDescription className="rounded-sm bg-accent/90 p-2 text-black">
					{description}
				</CardDescription>
			</CardHeader>
			{/* <CardContent className="bg-accent/70 p-2 rounded-sm">
				<p>{content}</p>
			</CardContent> */}
			{/* <CardFooter className='bg-accent/70 p-2 rounded-sm'>
				<p>{footer}</p>
			</CardFooter> */}
		</Card>
	)
}
