import Hero from '@/components/hero/hero'

export default async function Page(props: PageProps<'/service/[serviceId]'>) {
	const params = await props.params
	const rawId = params?.serviceId
	let serviceId: string | undefined
	try {
		serviceId = rawId == null ? undefined : decodeURIComponent(Array.isArray(rawId) ? rawId.join('/') : rawId)
	} catch {
		// fallback if decoding fails
		serviceId = Array.isArray(rawId) ? rawId.join('/') : rawId ?? undefined
	}
	return (
		<div className="flex flex-col w-full gap-8 p-2">
			<Hero />
			<h1 className='text-black font-medium text-4xl border rounded-sm p-4'>
				{serviceId
					?.split(/[\s-_]+/)
					.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
					.join(' ')}
				Services
			</h1>
		</div>
	)
}
