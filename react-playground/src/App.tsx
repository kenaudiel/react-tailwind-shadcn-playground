import { CardImage } from "./components/cardimage";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/ui/theme-provider";

const cardImageItems:{title:string, description:string, buttonText:string}[] = [
  {
    title:"Card #1",
    description:"This is a demonstration of card description.",
    buttonText:"Learn More"
  },
  {
    title:"Card #2",
    description:"This is a demonstration of card description.",
    buttonText:"View More"
  },
  {
    title:"Card #3",
    description:"This is a demonstration of card description.",
    buttonText:"Learn More"
  },
  {
    title:"Card #4",
    description:"This is a demonstration of card description.",
    buttonText:"View More"
  },
]

export default function App(){
	return(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
      
        <section className="bg-gray-300 p-20">
          <div className="grid grid-cols-4 grid-rows-1 grid-flow-row ">
            {cardImageItems.map((card) => {
              return <CardImage title={card.title} description={card.description} buttonText={card.buttonText}/>
            })}
          </div>
        </section>
      </ThemeProvider>
	)
} 