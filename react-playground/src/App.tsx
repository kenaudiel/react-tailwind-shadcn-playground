import { CardImage } from "./components/cardimage";

export default function App(){
	return(
		<section className="bg-gray-300 p-20">
			<div className="grid grid-cols-4 grid-rows-1 grid-flow-row ">
        <CardImage title="Card Title #1" description="This is a demonstration of card description." buttonText="Learn More"/>
        <CardImage title="Card Title #2" description="This is the card description as demonstration." buttonText="View More"/>
        <CardImage title="Card Title #3" description="This is the card description as demonstration." buttonText="Learn More"/>
        <CardImage title="Card Title #4" description="This is the card description as demonstration." buttonText="View More"/>
			</div>
		</section>
	)
}
  