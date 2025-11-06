export default function PageContainer({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col items-center pb-20 font-sans">
			{children}
		</div>
	)
}
