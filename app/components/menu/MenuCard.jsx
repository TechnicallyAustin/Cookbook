'use client'
import React from 'react'
import {
  Divider,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import NextImage from "next/image";
import Link  from 'next/link';


export default function MenuCard(props) {
    const {title} = props

    const handleClick = (e) => {

        
    }
    return (
        <Card className="w-full h-full flex md:h-1/3 md:w-1/3 md:justify-center md:items-center">
        <figure className="w-full h-full flex flex-col justify-around items-center">
            <Link href={`recipes/${title.toLowerCase()}`}>
          <Image
            id={title.toLowerCase()}
            as={NextImage}
            src="/photo2.jpeg"
            alt="Menu Categories"
            width={348}
            height={348}
            className="md:w-full md:wrapper aspect-square"
            />
            </Link>
          <CardBody>
            <figcaption className="w-full h-5/6 text-white">
              <h2 className='w-full h-auto'>{title}</h2>
              <p className='w-full h-auto text-sm'>Category Description</p>
            </figcaption>
          </CardBody>
          <CardFooter>
            <p>{"#"} Recipes</p>
          </CardFooter>
        </figure>
      </Card>
    );
}
