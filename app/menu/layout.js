'use client'
import React from 'react'
import CategoryNav from '../components/categoryNav/CategoryNav'
import { Divider, Pagination } from "@nextui-org/react";
export default function layout({children}, pageTitle) {
    console.log(pageTitle)
    console.log(children.props.segmentPath[1])
    const title = children.props.segmentPath[1]
    return (
      <section className="w-full h-full px-3">
        <header className="w-full h-auto text-white relative top-20 flex flex-col gap-1 px-3">
          <h1>{"Title"}</h1>

        </header>

        <section className="w-full h-5/6 relative top-24 ">

            <section id="title" className="w-full h-full flex flex-col gap-2 p-1">


            <Divider />

            <section className="w-full h-full flex flex-wrap md:h-5/6 md:justify-around md:gap-1 gap-3 p-1">
                {children}
            </section>



        
        
      </section>

        
        </section>
      </section>
    );
}
