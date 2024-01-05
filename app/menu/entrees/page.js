import React from 'react'
import Layout from "../../layout";
import NestedLayout from "../layout";
export default function Entrees() {
    return (
        <div>
            Entrees
        </div>
    )
}

Entrees.getLayout = function getLayoout(page) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}