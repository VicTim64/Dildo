import React from 'react';

// Components
import PostCard from '@/components/elements/PostCard';

const PostsList = ({ posts, assetUrls }) => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col gap-32 mobile:gap-12 mobile:pt-24'>
      <ul>
        {posts.map((post, index) => (
          <PostCard key={index} postItem={post} assetUrls={assetUrls} />
        ))} 
      </ul> 
    </div>
  );
};

export default PostsList;