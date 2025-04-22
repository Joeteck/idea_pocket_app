import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { auth, signOut, signIn } from '@/auth'

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="py-2 px-5 bg-white shadow-md font-work-sans ">
            <nav className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src='/logo.png' alt='Logo' width={28} height={25}/>
                </Link>

                <div className='flex gap-5 text-black'>
                    {session && session?.user ? (
                        <>
                            <Link href='/startup/create' className='flex gap-5 items-center'>
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server"
                                await signOut()
                            }}>
                                <button type='submit'>Logout</button>
                            </form>

                            <Link href={`/profile/${session.user.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={ async () => {
                            "use server"
                            await signIn("github")
                        }} className='items-center'>
                            <button type='submit'>Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar