'use client'

import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'
import {RiMenu2Line} from '@remixicon/react'



const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)
  const [toggle, setToggle] = useState(false)
  console.log(toggle);


  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response)
    }

    setUpProviders()
  }, [])

  return (
    <section className='py-6 w-full alert-active'>
      <div className='w-[90%] mx-auto'>
        <div className='flex justify-between'>
          <Link href='/'>
            <h1 className='text-3xl logo-gradient font-extrabold'>TOOLSY</h1>
          </Link>


          <div className='md:flex hidden gap-3 items-center'>
            <Link
              href='/add-tool'
              className='bg-[#A44CCD] rounded-lg font-semibold py-2 px-5 text-black'
            >Add tool</Link>
            {session?.user ?
              <>
                <button
                  className='bg-[#FF7A68] rounded-lg font-semibold py-2 px-5 text-black'
                  onClick={() => signOut()}
                >Sign out</button>
                <Link
                  href='/profile'
                >
                  <img
                    className='rounded-full object-contain'
                    src={session?.user.image} alt="photo" width={50} height={30} />
                </Link>
              </>
              :
              providers &&
              Object.values(providers).map(provider => (
                <button
                  onClick={() => signIn()}
                  key={provider.name}
                  className='bg-[#FF7A68] rounded-lg font-semibold py-2 px-5 text-black'>Sign in</button>
              ))
            }
          </div>

          <div className='md:hidden flex items-center gap-3'>
            {session?.user && 
            <Link
              href='/profile'
            >
              <img
                className='rounded-full object-contain'
                src={session?.user.image} alt="photo" width={50} height={30} />
            </Link>
            }
            <div onClick={() => setToggle(prev => !prev)} className='relative'>
            <RiMenu2Line color='purple' size={30} />
            </div>

            <div className={`${toggle ? '' : 'hidden'} px-6 py-4 flex flex-col gap-4 rounded-sm bg-blue-100 absolute top-20 right-0`}>
            <Link
              href='/add-tool'
              className='bg-[#A44CCD] rounded-lg font-semibold py-2 px-5 text-black'
            >Add tool</Link>
            {session?.user ?
              <>
                <button
                  className='bg-[#FF7A68] rounded-lg font-semibold py-2 px-5 text-black'
                  onClick={() => signOut()}
                >Sign out</button>
              </>
              :
              providers &&
              Object.values(providers).map(provider => (
                <button
                  onClick={() => signIn()}
                  key={provider.name}
                  className='bg-[#FF7A68] rounded-lg font-semibold py-2 px-5 text-black'>Sign in</button>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nav