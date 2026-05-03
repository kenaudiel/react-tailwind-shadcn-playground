import {useState} from 'react'
import { CardImage } from "./components/cardimage";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/ui/theme-provider";
import FormInput from './components/form-input';
import SubmitButton from './components/submit-button';

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

type User = {
  username:string,
  password:string
}

export default function App(){
  const [form, setForm] = useState<User>({
    username:"",
    password:""
  })
  const [error, setError] = useState<string>("")

  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setForm(prev => {
      return {...prev, [e.target.name]:e.target.value}
    })}

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
      e.preventDefault();

      if(form.username === "" || form.password === ""){
        setError("Error Woi")
      }
    }

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

      <section className="p-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <FormInput name="username" placeholder="John Doe" value={form.username} onChange={handleChange}/>
          <FormInput name="username" placeholder="John Doe" value={form.password} onChange={handleChange}/>
          {error && <p>{error}</p>}
          <SubmitButton>
        </form>
      </section>

    </ThemeProvider>
	)
} 