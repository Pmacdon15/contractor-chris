'use client'

import { useEffect, useRef, useState } from 'react'

type AnimateOnScrollProps = {
	children: React.ReactNode
	className?: string
	animationClassName: string
}

export function AnimateOnScroll({
	children,
	className,
	animationClassName,
}: AnimateOnScrollProps) {
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{
				threshold: 0.1,
			},
		)

		const currentRef = ref.current

		if (currentRef) {
			observer.observe(currentRef)
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef)
			}
		}
	}, [])

	return (
		<div
			className={`${className} ${isVisible ? animationClassName : 'opacity-0'}`}
			ref={ref}
		>
			{children}
		</div>
	)
}
