import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; 
// Helpers
import { getReadTime, formatDate } from "@/utils/Helpers";

const PostCard = ({ postItem, assetUrls }) => {
  const post = postItem && postItem?.fields;
  const imageUrl = post?.thumbnail?.sys?.id ? assetUrls[post?.thumbnail.sys.id] : null;
  return (
    <li>
      <Link className='flex flex-col' href={'/blog/' + post?.slug} scroll={false}>
        <div className="item">
          {imageUrl && (
            <div className="imageBox">
              <Image
                height={300}
                src={imageUrl}
                width={600}
              />
            </div>
          )}
          <p className="neoh_fn_button condensed min-w-fit only_text">
            <span className='whitespace-nowrap text-sm'>{formatDate(postItem?.sys.createdAt)}</span> 
          </p>
          <h3 className="fn_title">
            <Link legacyBehavior href={'/blog/' + post?.slug}>
              {postItem?.fields.title}
            </Link>
          </h3>
          {/* <p className="fn_desc">
            Morbi non dignissim erat, a blandit felis nec lorem vel orci
            varius congue ut vitae est.
          </p> */}
          <p className="fn_read">
            <Link className='blueColor only_text' href={'/blog/' + post?.slug}> 
              <span className="text">Read More</span> 
            </Link>
          </p>
        </div>
      </Link>
    </li>
  )
};

export default PostCard;
