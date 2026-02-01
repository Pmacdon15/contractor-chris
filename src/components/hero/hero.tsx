import GetAQuoteFormPopover from '../popovers/get-a-quote-form-popover'
import { AnimateOnScroll } from '../utils/animate-on-scroll'

export default function Hero() {
	return (
		<div className="relative grid h-[500px] w-full grid-cols-1 overflow-hidden rounded-xl bg-[url('/hero.png')] bg-cover bg-center md:h-[600px] md:grid-cols-2">
			<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
			<div className="relative z-10 col-span-2 flex flex-col justify-center px-6 md:col-span-1 md:pl-16">
				<AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-left-12 duration-1000">
					<h1 className="mb-4 font-bold text-4xl text-white leading-tight drop-shadow-sm md:text-6xl">
						Need Work Done{' '}
						<span className="text-accent">On Your House?</span>
					</h1>
				</AnimateOnScroll>
				<AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-left-12 duration-1000 delay-300">
					<p className="mb-8 max-w-lg text-lg text-gray-200 md:text-xl">
						We are reliable, consistent, and ready to help you build
						your dream home.
					</p>
				</AnimateOnScroll>
				<div className="w-fit">
					<GetAQuoteFormPopover />
				</div>
			</div>
		</div>
	)
}
