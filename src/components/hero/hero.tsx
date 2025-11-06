import GetAQuoteFormPopover from '../popovers/get-a-quote-form-popover'
import { AnimateOnScroll } from '../utils/animate-on-scroll'

export default function Hero() {
	return (
		<div className="grid h-100 w-full grid-cols-2 bg-[url('/hero.png')] bg-cover bg-top md:h-160">
			<div className="col-span-2 mb-8 flex flex-col items-center justify-end gap-4 pl-4 font-bold text-4xl sm:col-span-1 md:justify-center md:pl-8">
				<AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-bottom-12 duration-1000">
					<h1 className="drop-shadow-lg">
						Need Work Done On Your House?
					</h1>
				</AnimateOnScroll>
				<AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
					<h1 className="drop-shadow-lg">
						We Are Reliable And Consistence
					</h1>
				</AnimateOnScroll>
				<GetAQuoteFormPopover />
			</div>
		</div>
	)
}
