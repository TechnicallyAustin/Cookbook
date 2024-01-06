"use-client";
import React from "react";
import Layout from "../../layout";
import NestedLayout from "../../recipes/layout";
import CategoryNav from "../../components/categoryNav/CategoryNav";
import {
  Divider,
  Pagination,
  PaginationItem,
  PaginationColor,
  Card,
  CardBody,
  CardFooter,
  Image,
  Tab
} from "@nextui-org/react";
import RecipeCard from "@/app/components/Recipe/RecipeCard";

export default function Snacks() {
  return (
    <section id="Snacks" className="w-full h-full flex flex-col gap-2 p-1">
      <header className="w-1/2 h-auto text-xl">
        <h2>Snacks</h2>
      </header>
      <Tab className="w-full h-full md:flex md:flex-wrap md:h-5/6 md:justify-around justify-center md:gap-1 grid grid-cols-2 grid-rows-max gap-3 p-1">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Tab>
    </section>
  );
}

Snacks.getLayout = function getLayoout(page) {
  return (
    <Layout>
      <NestedLayout key={"snacks"} pageTitle={"Snacks"}>{page}</NestedLayout>
    </Layout>
  );
};
