import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../../styles/Users.module.css'

const UserDetails = ({ userinfo }: any) => {
    console.log({ userinfo })
    return (
        <div>
            <h1>UserDetails</h1>
            {/* {
                    userinfo && userinfo.map((v: any, i: any) => {
                        return (
                            <div key={i} className={styles.userdiv}>
                                <p>Name : {v.name}</p>
                                <p>Email: {v.email}</p>
                                <p>Phone: {v.phone}</p>
                                <Link href={`/users/${v.id}`}>Know more</Link>
                            </div>
                        )
                    })
                } */
            }

            <div>
                <p>Name : {userinfo.name}</p>
                <p>Email: {userinfo.email}</p>
                <p>Phone: {userinfo.phone}</p>
                <p>Username: {userinfo.username}</p>

            </div>
        </div>
    )
}

export default UserDetails


export const getServerSideProps = async (context: any) => {
    const { query } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${query.userid}`)
    const data = await res.json()
    return {
        props: {
            userinfo: data
        }
    }

}