import React from 'react'
import Layout from '../../layout'
import NestedLayout from '../layout'
export default function Desserts() {
    return (
        <div className='w-full h-40 bg-white'>
            Desserts
        </div>
    )
}

Desserts.getLayout = function getLayoout(page) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}