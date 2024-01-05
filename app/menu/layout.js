'use client'
import React from 'react'
import CategoryNav from '../components/categoryNav/CategoryNav'
import { Divider } from "@nextui-org/react";
export default function layout({children}) {
    return (
      <section className="w-full h-full px-3">
        <header className="w-full h-auto text-white relative top-20 flex flex-col gap-1 px-3">
          <h1>{"Title"}</h1>
          <Divider />
        </header>

        <section
          className="w-full h-5/6 relative top-24 flex"
        >
            
     
          <section className="w-full h-full p-1">
            {children}
          </section>
        </section>
      </section>
    );
}
