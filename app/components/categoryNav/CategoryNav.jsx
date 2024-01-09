'use client'
import * as React from 'react'
import NextImage from "next/image";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  Tabs,
  Tab,
  Card,
  Avatar,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import CategoryNavItem from './CategoryNavItem';



export default function CategoryNav(props) {
const {snacks, drinks, desserts, entrees} = props

    const categories = ["Drinks", "Snacks", "Desserts", "Entrees"];

    const handleClick = (e) =>{
        console.log(clicked)
        switch (e.id) {
          case "Drinks":
            return drinks();
            break;

          case "Snacks":
            return snacks();
            break;

          case "Desserts":
            return snacks();
            break;

          case "Entrees":
            return snacks();
            break;
        }
    }

    return (
      <section className="w-full h-full flex ">
        <section className="w-full h-32  left-0 top-0 grid grid-cols-4 p-1 gap-3">
            {categories.map((title) => {

                return (
                         <CategoryNavItem key={title} categoryTitle={title} interactions={props[`${title.toLowerCase()}`]} handleCLick={handleClick}/>
                )
            })}
        </section>
      </section>
    );
}
 