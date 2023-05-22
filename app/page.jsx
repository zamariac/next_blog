import PostCard from "@components/PostCard";
import PostWidget from "@components/PostWidget";
import Categories from "@components/Categories";
import { getPosts } from "./api/prompt/new/route.js";

// Represents the homepage route

// const posts = [
//   { title: 'react testing', excerpt: 'learn react testing' },
//   { title: 'react w tailwind', excerpt: 'learn react w tailwind' },
// ];

// this is a SS component

export default function Home({ posts }) {
  return (
    <section>
      <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => <PostCard post={post} key={post.title} /> )}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8 md:float-right">
              <PostWidget />
              <Categories />
            </div>
          </div>
      </div>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { props }
  }
}
