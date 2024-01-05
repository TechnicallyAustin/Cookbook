import React from 'react'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  Card,
  Avatar,
  CardBody,
  CardFooter,
  Button
} from "@nextui-org/react";
import NextImage from "next/image"

export default function CategoryNavItem() {
    return (
      <Card isFooterBlurred className="w-full h-full grid gird-cols-5 justify-between items-center gap-0">
          <Image as={NextImage} radius="none" removeWrapper src="/photo4.jpeg" height={24} width={130} alt="" className="w-full h-full object-cover self center row-span-4" />
        <CardFooter className='h-1/4 row-span-1 absolute z-10 bottom-0'>
          <h2 className="w-full h-full text-sm flex items-center justify-center p-1">Category</h2>
        </CardFooter>
      </Card>
    );
}
