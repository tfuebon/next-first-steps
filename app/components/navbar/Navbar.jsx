import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contacts', text: 'Contacts' },
]

export const Navbar = async() => {
    //console.log('Navbar creado');
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={'/'} className="flex items-center">
                <HomeIcon className="w-6 mr-2" />
                <span>Home</span>
            </Link>
            <div className="flex flex-1"></div>
            {navItems.map((item) => (
                //<ActiveLink key={item.path} path={item.path} text={item.text} />
                <ActiveLink key={item.path} {...item} />
            ))}
            {/*<Link className="mr-2" href="/about">About</Link>
            <Link className="mr-2" href="/pricing">Pricing</Link>
            <Link className="mr-2" href="/contacts">Contacts</Link>*/}
        </nav>
    )
}