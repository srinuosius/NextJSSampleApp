import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import styles from '../../styles/navbar.module.css'

const Navbar = () => {
    const router = useRouter()
    const placeOrder = () => {
        router.push("/products")
    }
    return (
        <>
            <div className={styles.navbar}>
                <Link className={styles.navbarItem} href="/">
                    <h4>Home</h4>
                </Link>
                <Link className={styles.navbarItem} href="/blog">
                    <h4>Blog</h4>
                </Link>
                <Link className={styles.navbarItem} href="/products">
                    <h4>Producs</h4>
                </Link>
                <Link className={styles.navbarItem} href="/docs">
                    <h4>Docs</h4>
                </Link>
                <Link className={styles.navbarItem} href="/users">
                    <h4>Users</h4>
                </Link>
                <Link className={styles.navbarItem} href="/products">
                    <h4>Place Order</h4>
                </Link>
                


            </div>

        </>
    )
}

export default Navbar