import React from 'react'
import { Badge, Divider,Button,  Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import {NextImage} from "next/image"
export default function RecipeCard() {
    return (
      <Card isFooterBlurred className="w-full h-full bg-white md:h-1/3 md:w-auto">
          <Image as={NextImage} removeWrapper raidus="none" src="/photo6.jpeg" alt="" width={95} height={180} className="w-full h-full object-cover aspect-square" />
        <CardFooter className='w-full h-16 absolute bottom-0 z-10'>
            <p className='w-full'>Recipe Name</p>
            <p className='w-1/6'>$$$</p>
        </CardFooter>
      </Card>
    );
}
