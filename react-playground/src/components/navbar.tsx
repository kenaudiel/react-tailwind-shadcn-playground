import { Bell, Moon, Settings } from 'lucide-react'
import { Avatar, AvatarFallback } from './ui/avatar'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from './ui/navigation-menu'

type NavbarProps = {
    href:string,
    children:React.ReactNode
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
    return(
            <NavigationMenu className="gap-70 justify-between">
                <NavigationMenuList className="gap-2 w-110 justify-end">
                        {ListItemMap}
                </NavigationMenuList>

                <NavigationMenuList className="gap-2 w-50">
                    <ListItem href=""><Moon /></ListItem>
                    <ListItem href=""><Bell /></ListItem>
                    <ListItem href=""><Settings /></ListItem>
                    <ListItem href="">
                        <Avatar>
                            <AvatarFallback>K</AvatarFallback>
                        </Avatar>
                    </ListItem>
                </NavigationMenuList>
            </NavigationMenu>
    )
}

function ListItem({href, children}:NavbarProps){
    return(
        <NavigationMenuItem> 
            <NavigationMenuLink href={href}>{children}</NavigationMenuLink>
        </NavigationMenuItem>
    )
}
