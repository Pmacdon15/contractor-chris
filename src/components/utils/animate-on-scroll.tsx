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
				if (entry.isIntersecting) {
					setIsVisible(true)
					if (ref.current) {
						observer.unobserve(ref.current)
					}
				}
			},
			{
				threshold: 0.1,
			},
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(ref.current)
			}
		}
	}, [])

	return (
		<div
			ref={ref}
			className={`${className} ${isVisible ? animationClassName : 'opacity-0'}`}
		>
			{children}
		</div>
	)
}
