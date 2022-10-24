import React, { FC } from 'react'

interface Props {
    children: React.ReactNode
  }
const MainSide = ({children}: Props) =>{

    return (
        <main className='blown-100 w-full min-h-screen h-full mx-auto max-w-5xl 
        lg:rounded-lg'>
            {children}
        </main>
    )
}

export default MainSide