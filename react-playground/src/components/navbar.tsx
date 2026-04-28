import { useState, useEffect } from "react"
import { Bell, Brush, DollarSign, LogOut, Moon, Settings, User } from 'lucide-react'
import { Avatar, AvatarFallback } from './ui/avatar'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from './ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type NavbarProps = {
    href:string,
    children:React.ReactNode,
    onClick?:any
}

const components:NavbarProps[] = [
    {
        href:"",
        children:'Home'
    },
    {
        href:"",
        children:'About'
    },
    {
        href:"",
        children:'Components'
    },
    {
        href:"",
        children:'Specification'
    },
]

const ListItemMap:any = components.map((component) => {
    return <ListItem href={component.href}>{component.children}</ListItem>
})

export default function Navbar(){
    const { isDark, toggle } = useDarkMode()

    return(
            <NavigationMenu className="gap-70 justify-between">
                <NavigationMenuList className="gap-2 w-110 justify-end">
                        {ListItemMap}
                </NavigationMenuList>

                <NavigationMenuList className="gap-2 w-60">
                    <ListItem href="" onClick={toggle}><Moon /></ListItem>
                    <ListItem href=""><Bell /></ListItem>
                    <ListItem href=""><Settings /></ListItem>
                    <ListItem href="https://github.com/kenaudiel"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></ListItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="focus:outline-none">
                            <ListItem href="">
                                <Avatar>
                                    <AvatarFallback>K</AvatarFallback>
                                </Avatar>
                            </ListItem>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem><User/> Profile</DropdownMenuItem>
                                <DropdownMenuItem><DollarSign/> Billing</DropdownMenuItem>
                                <DropdownMenuItem><Brush/>Appearance</DropdownMenuItem>
                                <DropdownMenuItem><Settings/>Setting</DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem className="text-red-600">
                                    <LogOut color="#ff0000" /> Log Out
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuList>
            </NavigationMenu>
    )
}

function ListItem({href, children, onClick}:NavbarProps){
    return(
        <NavigationMenuItem> 
            <NavigationMenuLink href={href} onClick={onClick}>{children}</NavigationMenuLink>
        </NavigationMenuItem>
    )
}

function useDarkMode() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggle = () => setIsDark(prev => !prev)

  return { isDark, toggle }
}