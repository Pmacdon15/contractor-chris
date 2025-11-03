import GetAQuoteFormPopover from '../popovers/get-a-quote-form-popover'
import { AnimateOnScroll } from '../utils/animate-on-scroll'

export default function Hero() {
	return (
		<div className="bg-[url('/hero.png')] bg-cover bg-top w-full h-100  md:h-160 grid grid-cols-2">
			<div className="col-span-2 sm:col-span-1 flex flex-col  items-center justify-end mb-8 md:justify-center  text-4xl font-bold gap-4 pl-4 md:pl-8">
				<AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-bottom-12 duration-1000">
					<h1 className=" drop-shadow-lg">
						Need Work Done On Your House?
					</h1>
				</AnimateOnScroll>
				<AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
					<h1 className=" drop-shadow-lg">
						We Are Reliable And Consistence
					</h1>
				</AnimateOnScroll>
				<GetAQuoteFormPopover />
			</div>
		</div>
	)
}
