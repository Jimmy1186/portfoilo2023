import React, { FC } from 'react'

const Skills:FC = () => {
  return (
    <div className='w-full h-full blown-200 rounded-lg flex p-10 gap-3'>
        <div className="flex flex-col gap-5 lg:w-1/2">
            <div className="">
                <h3 className='font-bold text-2xl'>前端</h3>
                <span>Build client-side applications with modern features like SPA and maintain semantic coding style among other best practices for SEO optimisation. Use modern tech such as Nuxt (Vue.js), TailwindCSS, and GSAP.</span>
            </div>
            <div className="">
                <h3 className='font-bold text-2xl'>後端</h3>
                <span>Build scalable and maintainable server applications using modern technology stacks such as Node.js, Express, and MongoDB</span>
            </div>
            <h3 className='font-bold text-2xl'>看我的作品集</h3>
        </div>
        <div className="hidden lg:w-1/2 lg:flex"></div>
    </div>
  )
}

export default Skills