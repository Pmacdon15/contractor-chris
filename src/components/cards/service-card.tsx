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
			className={'h-96 p-2 bg-cover bg-center'}
			style={{ backgroundImage: `url('/${bg}.png')` }}
		>
			<CardHeader className="mt-auto">
				<CardTitle className="bg-accent/90 p-2 rounded-sm">
					{title}
				</CardTitle>
				<CardDescription className="bg-accent/90 p-2 rounded-sm text-black">
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
