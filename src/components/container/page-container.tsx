export default function PageContainer({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col items-center  font-sans">{children}</div>
	)
}
