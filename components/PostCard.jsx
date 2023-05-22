import React from 'react';
import moment from 'moment/moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg-rounde-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className="realtive overflow-hidden shadow-md"></div>
      
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
