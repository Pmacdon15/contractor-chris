import Image from 'next/image'
export function ContentSectionOne() {
	return (
		<div className="sm:grid sm:grid-cols-2 flex flex-col w-full md:w-5/6 p-2 gap-4">
			<div className="flex justify-center items-center">
                <h1 className="text-black md:ml-8 text-4xl font-bold text-center">
                    Transform Your Home with Our Expert Renovation Services.
                </h1>
			</div>
			<div className="w-full justify-end flex">
				<Image
					alt={'Reno Image'}
					className=' border shadow-lg rounded-sm'
					height={600}
					src={'/reno1.png'}
					width={600}
				/>
			</div>
		</div>
	)
}
