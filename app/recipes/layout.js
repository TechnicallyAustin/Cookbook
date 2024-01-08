
'use client'
import React, {useState} from 'react'
import CategoryNav from '../components/categoryNav/CategoryNav'
import {Pagination, Divider} from "@nextui-org/react"
import RecipeCard from '../components/Recipe/RecipeCard'

export default function layout({children}) {
console.log(children)

    const [snacksClicked, setSnacksClicked] = useState(false);
    const [drinksClicked, setDrinksClicked] = useState(false);
    const [dessertsClicked, setDessertsClicked] = useState(false);
    const [entreesClicked, setEntreesClicked] = useState(false);

    const snacksToggle = () => {
        setSnacksClicked(!snacksClicked)
        setDessertsClicked(false)
        setDrinksClicked(false)
        setEntreesClicked(false)
    }
    const drinksToggle = () => {
        setDrinksClicked(!drinksClicked);
        setSnacksClicked(false);
        setDessertsClicked(false);
        setEntreesClicked(false);
    }
    const dessertsToggle = () => {
        setDessertsClicked(!dessertsClicked);
        setSnacksClicked(false);
        setDrinksClicked(false);
        setEntreesClicked(false);
    }
    const entreesToggle = () => {
        setEntreesClicked(!entreesClicked);
        setSnacksClicked(false);
        setDessertsClicked(false);
        setDrinksClicked(false);
    }



    return (
        <section id="recipes" className="w-full h-5/6 flex flex-col gap-2 p-1 relative top-16 px-4" aria-label="Loading">
      <section className="w-full h-auto">
        <CategoryNav snacks={snacksToggle} drinksToggle={drinksToggle} dessertsToggle={dessertsToggle} entreesToggle={entreesToggle} />
      </section>

      <header className='w-full h-auto px-1'>
        <h2 className='w-full text-xl'>{""}</h2>
      </header>

      <Divider />
      <section id="" className="w-full h-full md:flex md:flex-wrap md:h-5/6 md:justify-around md:gap-1 gap-3 p-1">
            {children}
      </section>

      <section className="w-full h-20 flex flex-col gap-2 justify-center items-center pt-2 md:absolute md:bottom-0 md:translate-y-6 items-center">
        <Divider />
        <Pagination
          showShadow
          showControls="true"
          size="md"
          variant="shadow"
          color="primary"
          total={10}
          initialPage={1}
          className="p-3"
        />
      </section>
    </section>
    )
}