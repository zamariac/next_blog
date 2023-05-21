// Represents the homepage route

const posts = [
  { title: 'react testing', excerpt: 'learn react testing' },
  { title: 'react w tailwind', excerpt: 'learn react w tailwind' },
];

// this is a SS component

export default function Home() {
  return (
    <section>
      <div className="container mx-auto px-10 mb-8 text-red">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1"> home
            {/* {posts.map((post, index) => <PostCard post={post} key={post.title} /> )} */}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              {/* <PostWidget />
              <Categories /> */}
            </div>
          </div>
      </div>
      </div>
    </section>
  )
}
