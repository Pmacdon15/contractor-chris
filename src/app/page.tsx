import { ContentSectionOne } from '@/components/content-sections/content-section-one'
import Hero from '@/components/hero/hero'

export default function Home() {
	return (
		<div className="flex flex-col gap-16 w-full items-center">
			<Hero />
			<ContentSectionOne />
			<ContentSectionTwo />
		</div>
	)
}

function ContentSectionTwo() {
	return <div className="w-full bg-secondary-foreground"></div>
}
