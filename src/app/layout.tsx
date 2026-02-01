import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import PageContainer from '@/components/container/page-container'
import LayoutHeader from '@/components/headers/layout-header'
import { Providers } from '@/components/providers'

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Contractor Chris',
	description: "Need work done on your house? We've got you covered",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Providers>
			<html lang="en">
				<body className={`${outfit.variable} antialiased`}>
					<PageContainer>
						<LayoutHeader />
						{children}
					</PageContainer>
					<Toaster />
					<Analytics />
				</body>
			</html>
		</Providers>
	)
}
