'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';


const categories = [{ name: 'React', slug: 'react' }, { name: 'Web Dev', slug: 'web-dev' }]

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
            <Link href="/">
                <span className="cursor-pointer font-bold text-2xl text-white">
                    Art, Design and Lorem Ipsum.
                </span>
            </Link>
        </div>
        <div className="hidden md:float-left md:contents text-white">
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-2 align-middle text-red ml-4 font-semibold cursor-pointer">
                        {category.name}
                    </span>
                </Link>
            ))};
        </div>
      </div>
    </div>
  )
}

export default Header
