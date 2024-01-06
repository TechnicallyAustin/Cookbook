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
const categories = [
    'Drinks',
    "Snacks",
    "Desserts",
    "Entrees"
]


export default function CategoryNav() {
    return (
      <section className="w-full h-full flex ">
        <section className="w-full h-32  left-0 top-0 grid grid-cols-4 p-1 gap-3">
            {categories.map((title) => {
                
                return (
                         <CategoryNavItem key={title}  categoryTitle={title}/>
                )
            })}
        </section>
      </section>
    );
}
