import Image from 'next/image'
import Hero from '@/components/hero/hero'

export default function Home() {
	return (
		<div className="flex flex-col gap-16 w-full items-center">
			<Hero />
			<ContentSection />
		</div>
	)
}

function ContentSection() {
	return (
		<div className="grid grid-cols-2 w-full md:w-5/6">
			<div className="flex justify-center items-center">
				<h1 className="text-black ml-2 md:ml-8 text-lg md:text-4xl font-bold ">
					Let Us Deal With Your Home Renovation Needs.
				</h1>
			</div>
			<div className="w-full justify-end flex ">
				<Image
					alt={'Reno Image'}
					className='className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-200 p-2"'
					height={600}
					src={'/reno.png'}
					width={600}
				/>
			</div>
		</div>
	)
}
