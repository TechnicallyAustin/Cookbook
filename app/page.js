
import * as React from "react"
import {Image} from '@nextui-org/react'
import NextImage from "next/image"
import { Button, ButtonGroup } from "@nextui-org/react";


export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-wrap gap-0">
      <header className="w-auto h-auto p-3 absolute bottom-1/4  z-30 flex flex-col gap-3">
        <h1 className="w-full h-auto text-3xl bg-black bg-opacity-35 rounded-lg backdrop-blur-md text-white p-2 shadow-xl"> Johnson Family CookBook</h1>
        <h2 className="w-full h-auto text-lg  bg-black bg-opacity-35 rounded-lg backdrop-blur-md text-white p-2 shadow-xl">Discover new recipes or create your own. lets get started</h2>
      <article className="w-full h-auto flex gap-3">
          <Button
          color="primary"
          variant="shadow"
          size="large"
          radius="small"
          className="bg-transparent border border-primary border-2">Find a recipe</Button>
          <Button
          variant="shadow"
          color="primary"
          size="Large"
          radius="small">Create your own</Button>
      </article>
      </header>
      <figure isblurred className="w-screen h-full blur-sm">
        <Image
          isblurred
          removeWrapper
          radius="none"
          isZoomedOut={true}
          width="384"
          height="384"
          src={"/photo8.jpeg"}
          alt="photo of food"
          className="w-full h-full object-cover"
        />
      </figure>
    </section>
  );
}