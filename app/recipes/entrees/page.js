"use-client";
import React from "react";
import Layout from "../../layout";
import NestedLayout from "../../menu/layout";
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
} from "@nextui-org/react";
import RecipeCard from "@/app/components/Recipe/RecipeCard";

export default function Entrees() {
  return (
    <section id="snacks" className="w-full h-full flex flex-col gap-2 p-1">
      <section className="w-full h-auto">
        <CategoryNav />
      </section>

      <Divider />

      <section className="w-full h-4/6 md:flex md:flex-wrap md:h-5/6 md:justify-around md:gap-1 grid grid-cols-2 grid-rows-max gap-3 p-1">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <Divider />
      </section>

      <section className="w-full h-16 flex justify-center md:absolute md:bottom-0 md:translate-y-12 items-center pt-6">
        <Pagination
          showShadow
          showControls="true"
          size="md"
          variant="shadow"
          color="primary"
          total={10}
          initialPage={1}
          className=""
        />
      </section>
    </section>
  );
}

Entrees.getLayout = function getLayoout(page) {
  return (
    <Layout pageTitle={page}>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
