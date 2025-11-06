import Hero from '@/components/hero/hero'

export default async function Page(props: PageProps<'/service/[serviceId]'>) {
	const params = await props.params
	const rawId = params?.serviceId
	let serviceId: string | undefined
	try {
		serviceId =
			rawId == null
				? undefined
				: decodeURIComponent(
						Array.isArray(rawId) ? rawId.join('/') : rawId,
					)
	} catch {
		// fallback if decoding fails
		serviceId = Array.isArray(rawId)
			? rawId.join('/')
			: (rawId ?? undefined)
	}
	return (
		<div className="flex w-full flex-col gap-8 p-2">
			<Hero />
			<h1 className="rounded-sm border p-4 font-medium text-4xl text-black">
				{serviceId
					?.split(/[\s-_]+/)
					.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
					.join(' ')}
				Services
			</h1>
		</div>
	)
}
