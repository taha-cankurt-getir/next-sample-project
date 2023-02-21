'use client'

import Link from "next/link";

const NavLink = ({children,href}) =>{
    return(
        <Link href={href} className={"hover:opacity-60"}>{children}</Link>
    )
}

const Header = () => {
    return (
        <div className={'bg-blue-300 py-5'}>
            <div className={'container mx-auto'}>
                <div className={'grid grid-cols-6 gap-4'}>
                    <div>
                        <NavLink href={'/'}>Sample App</NavLink>
                    </div>
                    <div>
                        <NavLink href={'/blog'}>Blog</NavLink>
                    </div>
                    <div>
                        <NavLink href={'/'}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
