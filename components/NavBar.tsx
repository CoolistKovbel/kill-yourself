import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <header className='bg-[#111] p-4 text-white'>

        <div className='flex items-center justify-between'>

            <h2 className='text-2xl md:text-4xl font-bold'><Link href="/">BoredAI</Link></h2>

            <nav className='flex items-center justify-between w-[300px]'>
                <Link href="/buisnessBot">BBBot</Link>
                <Link href="/chatBot">CBot</Link>
                <Link href="/photoBot">PBot</Link>
                <Link href="/">Enter</Link>
            </nav>

        </div>

        <div className='mt-4'>
            <h2>Hi, 0x1C352E8F3e035c524F2385818b44859906d3c705</h2>
        </div>


    </header>
  )
}

export default NavBar