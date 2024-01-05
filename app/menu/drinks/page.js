import React from 'react'
import Layout from "../../layout";
import NestedLayout from "../layout";
export default function Drinks() {
    return (
        <div>
            Drinks
        </div>
    )
}

Drinks.getLayout = function getLayoout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};