'use client'
import React from 'react'
import {Navbar, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarContent,NavbarMenuToggle, NavbarItem, Link, Button} from "@nextui-org/react";
import ExpandedMenu from './ExpandedMenu';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = ["Home", "Menu", "Login"]
    return (
      <header className="w-full h-16 absolute top-0 left-0 z-40">
        <Navbar
          className="w-full h-full flex"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarBrand className="" justify="start">
            <h1>Johnson Cookbook</h1>
          </NavbarBrand>

          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle
              className="w-auto"
              aria-label={isMenuOpen ? "Close menu" : "open menu"}
            />
          </NavbarContent>

          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? "warning"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </header>
    );
}
