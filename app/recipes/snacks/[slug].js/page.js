import React from 'react'
import {useRouter} from 'next/router'

const DynamicPage= () => {
    const router = useRouter()
    const {slug} = router.query
}

export default function Snack() {
    return (
        <div>
            Dynamic Recipe page
            <Link href="/snacks/[title]">Linke to page</Link>
        </div>
    )
}
