import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import PageContainer from '@/components/container/page-container'
import LayoutHeader from '@/components/headers/layout-header'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
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
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<PageContainer>
					<LayoutHeader />
					{children}
				</PageContainer>
				<Toaster />
			</body>
		</html>
	)
}
