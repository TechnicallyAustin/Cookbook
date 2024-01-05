import React from 'react'
import NextImage from "next/image";
import Layout from '../layout.js'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import MenuCard from '../components/menu/MenuCard.jsx';

export default function Menu() {
    return (
        <>
      <section className="w-full md:justify-items-center h-5/6 text-black grid grid-cols-2 grid-rows-2 md:flex gap-3 md:gap-6 md:px-6 ">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </section>
        <section className='w-full h-24 relative bottom-0 flex justify-center'>
            <Card className='w-full h-full flex flex-row justify-center items-around'>
                <Image removeWrapper radius="none" src="/photo10.jpeg" alt="" height={"24"} width={"60"} className='object-cover border-r' />
                <Image removeWrapper radius="none" src="/photo11.jpeg" alt="" height={"24"} width={"60"} className='object-cover border-r' />
                <Image removeWrapper radius="none" src="/photo12.jpeg" alt="" height={"24"} width={"60"} className='object-cover border-r' />
                <CardFooter className=''>
                    <Button variant="shadow" size="lg" color="danger" className='w-full px-2'>
                        Feeling Dangerous?
                    </Button>
                </CardFooter>
            </Card>
        </section>
        </>
    );
}

Menu.getLayout = function getLayoout(page) {
  return (
    <Layout title="Menu">
        {page}
    </Layout>
  );
};
