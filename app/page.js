import Image from 'next/image';
import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components';


const posts = [
  { title: 'react testing', excerpt: 'learn react testing' },
  { title: 'react w tailwind', excerpt: 'learn react w tailwind' },
];

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-10 mb-8 bg-gray-300 text-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => <PostCard post={post} key={post.title} /> )}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
      </div>
      </div>
    </main>
  )
}
