'use client'
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent,NavbarMenuToggle, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
      <header className="w-full h-16 bg-red-500 absolute top-0 left-0 z-40">
        <Navbar className='w-full h-full flex' isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>

            <NavbarBrand className='sm:hidden' justify="start">
                <h1>Johnson Cookbook</h1>
            </NavbarBrand>

            <NavbarContent className='sm:hidden' justify="end">
                <NavbarMenuToggle className='w-auto' aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

        </Navbar>
      </header>
    );
}
