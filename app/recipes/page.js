'use client'
import React, {useState} from 'react'
import Snacks from "./snacks/page"
import Drinks from "./drinks/page"
import Entrees from "./entrees/page"
import Desserts from './desserts/page'

export default function Recipes() {
    const [snacksClicked, setSnacksClicked] = useState(false)
    const [drinksClicked, setDrinksClicked] = useState(false);
    const [dessertsClicked, setDessertsClicked] = useState(false);
    const [entreesClicked, setEntreesClicked] = useState(false);

    const RenderMenu = () => {
        switch (clicked) {
          case snacksClicked:
            return (<Snacks />)
            break;
          case drinksClicked:
            return (<Drinks />);
            break;
          case dessertsClicked:
            return (<Desserts />);
            break;
          case entreesClicked:
            return (<Entrees />);
            break;
            default: 
            return "";
        }
    }

    return (
        <section>

        </section>
    )
}
