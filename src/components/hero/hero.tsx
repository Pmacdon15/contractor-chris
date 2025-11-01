import { Button } from "../ui/button";

export default function Hero() {
	return (
		<div className="bg-[url('/hero.png')] bg-cover bg-top w-full md:w-5/6 h-160 grid grid-cols-2">
			<div className="col-span-1 flex flex-col  items-center justify-center  text-4xl font-bold gap-4 pl-4 md:pl-8">
				<h1>Need Work Done On Your House?</h1>
                <h1>We Are Reliable And Consistence</h1>
                <Button className="mt-4">Get a Quote Today</Button>
			</div>
		</div>
	)
}
