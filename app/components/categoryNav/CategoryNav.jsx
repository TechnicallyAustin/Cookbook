'use clients'
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
import CategoryNavItem from './CategoryNavCard';



export default function CategoryNav(props) {
    const categories = {"Drinks": {drinksToggle}, "Snacks": {snacksToggle}, "Desserts" : {dessertsToggle}, "Entrees" : {entreesToggle}};
    const {snacksToggle, drinksToggle, dessertsToggle, entreesToggle} = props
    console.log("props", props,"snacks", snacksToggle)
    return (
      <section className="w-full h-full flex ">
        <section className="w-full h-32  left-0 top-0 grid grid-cols-4 p-1 gap-3">
            {categories.map((title) => {
                
                return (
                         <CategoryNavItem key={title}  categoryTitle={title} toggle={title}/>
                )
            })}
        </section>
      </section>
    );
}
 