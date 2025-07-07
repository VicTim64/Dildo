import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useFetchThis from "@/hooks/useFetchThis";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from "@/layout/Layout";
import SplitType from 'split-type'
import gsap from 'gsap';

// Helpers
import { getReadTime, formatDate } from "@/utils/Helpers";

const contentfulConfig = {
  baseUrl: "https://cdn.contentful.com",
  spaceId: "n9ci4a0ydf2o",
  environmentId: "master",
  accessToken: "IBhrxUpZK1a1vn6GbYNtVJjkDjC7_Eod1Us6juFVaSo",
  requiredContentType: "blog",
};

const BlogPost = ({ params }) => {
  const router = useRouter();
  const slug = router.query.slug;
  
  const postUrl = `${contentfulConfig.baseUrl}/spaces/${contentfulConfig.spaceId}/environments/${contentfulConfig.environmentId}/entries?access_token=${contentfulConfig.accessToken}&content_type=${contentfulConfig.requiredContentType}&fields.slug=${slug}`;
  const allPostsUrl = `${contentfulConfig.baseUrl}/spaces/${contentfulConfig.spaceId}/environments/${contentfulConfig.environmentId}/entries?access_token=${contentfulConfig.accessToken}&content_type=${contentfulConfig.requiredContentType}`;

  const [singleBlogPost, postLoading, postError] = useFetchThis(postUrl);
  const [allPosts, allPostsLoading, allPostsError] = useFetchThis(allPostsUrl);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [assetUrls, setAssetUrls] = useState({});

  useEffect(() => {
    if (singleBlogPost && singleBlogPost.items.length > 0) {
      const thumbnail = singleBlogPost.items[0].fields.thumbnail;
      if (thumbnail && thumbnail.sys && thumbnail.sys.id) {
        const fetchThumbnail = async () => {
          const assetUrl = `${contentfulConfig.baseUrl}/spaces/${contentfulConfig.spaceId}/environments/${contentfulConfig.environmentId}/assets/${thumbnail.sys.id}?access_token=${contentfulConfig.accessToken}`;
          const response = await fetch(assetUrl);
          const data = await response.json();
          setThumbnailUrl(`https:${data.fields.file.url}`);
        };
        fetchThumbnail();
      }
    }
  }, [singleBlogPost]);

  useEffect(() => {
    const fetchAssets = async () => {
      if (singleBlogPost && singleBlogPost.items.length > 0) {
        const embeddedAssets = [];
        singleBlogPost.items[0].fields.blogContent.content.forEach((block) => {
          if (block.nodeType === "embedded-asset-block") {
            embeddedAssets.push(block.data.target.sys.id);
          }
        });

        const assetPromises = embeddedAssets.map(async (id) => {
          const assetUrl = `${contentfulConfig.baseUrl}/spaces/${contentfulConfig.spaceId}/environments/${contentfulConfig.environmentId}/assets/${id}?access_token=${contentfulConfig.accessToken}`;
          const response = await fetch(assetUrl);
          const data = await response.json();
          return { id, url: `https:${data.fields.file.url}` };
        });

        const assetResults = await Promise.all(assetPromises);
        const assetUrlsMap = assetResults.reduce((acc, asset) => {
          acc[asset.id] = asset.url;
          return acc;
        }, {});

        setAssetUrls(assetUrlsMap);
      }
    };
    fetchAssets();
  }, [singleBlogPost]);

  useEffect(() => {
    if (!postLoading && !postError) {
      const checkForTitle = setInterval(() => { 
        const blogTitle = document.querySelector('.blog_title'); 
        if (SplitType.create(blogTitle) && blogTitle) {
          const title_chars = blogTitle.querySelectorAll('.char');
          if (title_chars.length > 0) {
            clearInterval(checkForTitle); 
            gsap.to(
              title_chars, {
                opacity: 1,
                duration: .8,
                rotateZ: 0,
                rotateX: 0,
                rotateY: 0,
                translate: 0,
                translateY: 0,
                translateZ: 0,
                y: 0,
                stagger: 0.1
              }
            );
          }
        }
      }, 100);
    } 
  }, [postLoading, postError]);

  if (postLoading || allPostsLoading) return <h2>Loading...</h2>;
  if (postError || allPostsError)
    return <p>Could not load the Blog Post! Try refreshing the page.</p>;

  const postItem = singleBlogPost.items[0];
  const postTitle = postItem && postItem.fields.title;
  const postTags = postItem && postItem.metadata.tags;
  const blogContent = postItem && postItem.fields.blogContent;
  const postDate = postItem && postItem.sys.createdAt;

  const currentIndex = allPosts.items.findIndex(
    (item) => item.fields.slug === slug
  );
  const nextPost =
    currentIndex < allPosts.items.length - 1
      ? allPosts.items[currentIndex + 1]
      : null;
  const previousPost =
    currentIndex > 0 ? allPosts.items[currentIndex - 1] : null;

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node.data.target.sys.id;
        const imageUrl = assetUrls[assetId];
        if (!imageUrl) return <p>Loading image...</p>;
        return <img src={imageUrl} alt={postTitle} />;
      },
    },
  };


  return (
    <Layout className="pt-32 bg-black" pageName='Blog'>
      <div className="max-w-7xl mx-auto flex flex-col gap-3 w-full mobile:px-4 mobile:mt-28">
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={postTitle}
            className="w-full h-auto max-h-[600px] rounded-xl mb-4 object-cover z-0"
          />
        )}
        <div className="p-8 mobile:p-6 max-w-5xl mx-auto w-full rounded-xl bg-[#1c1c1c92] backdrop-blur-lg -mt-40 mobile:-mt-0 z-10 relative flex flex-col gap-6">
          <div className="flex items-center gap-3 mobile:gap-1">
            <div className="text-[#fff] text-[16px] mobile:text-sm">
              {formatDate(postDate)}
            </div>
            <span className="text-[#fff] text-[16px] mobile:text-sm">/</span>
            <div className="text-[#fff] text-[16px] mobile:text-sm">
              <span>{getReadTime(blogContent)} min to read</span>
            </div>
          </div>
          <h1 className="text-6xl mobile:text-2xl font-bold blog_title">
            {postTitle}
          </h1>
          <div className="flex gap-3">
            {postTags &&
              postTags.map((tag) => (
                <div
                  key={tag.sys.id}
                  className="capitalize bg-[#28373E] px-3 py-1 rounded-full text-[#F5F5F5] border border-[#3E525B]"
                >
                  {tag.sys.id}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="p-8 max-w-5xl mx-auto flex gap-4 mobile:flex-col mobile:px-5">
        <div className="text-[#cceeff] text-base post_content">
          {documentToReactComponents(blogContent, renderOptions)}
        </div>
      </div>
      <div className="flex justify-between gap-4 max-w-5xl mx-auto p-8 mobile:px-5 mobile:flex-col">
        {previousPost && (
          <div className="flex flex-col gap-3 w-full">
            <Link
              href={`/blog/${previousPost.fields.slug}`}
              className="text-[#F5F5F5] ml-auto w-full border text-center p-3 rounded-xl hover:bg-white hover:text-black"
            >
              Previous
            </Link>
            <div className="p-5 max-w-5xl mx-auto w-full rounded-xl bg-[#10191D] z-10 relative flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="text-[#96B0BD] text-[16px]">
                  {formatDate(previousPost.sys.createdAt)}
                </div>
                <span className="text-[#96B0BD] text-[16px]">/</span>
                <div className="text-[#96B0BD] text-[16px]">
                  <span>
                    {getReadTime(previousPost.fields.blogContent)} min to read
                  </span>
                </div>
              </div>
              <h1 className="text-2xl font-bold">
                {previousPost.fields.title}
              </h1>
              <div className="flex gap-3">
                {previousPost.metadata.tags.map((tag) => (
                  <div
                    key={tag.sys.id}
                    className="capitalize bg-[#28373E] px-3 py-1 rounded-full text-[#F5F5F5] border border-[#3E525B]"
                  >
                    {tag.sys.id}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {nextPost && (
          <div className="flex flex-col gap-3 w-full">
            <Link
              href={`/blog/${nextPost.fields.slug}`}
              className="text-[#F5F5F5] ml-auto w-full border text-center p-3 rounded-xl hover:bg-white hover:text-black"
            >
              Next
            </Link>
            <div className="p-5 max-w-5xl mx-auto w-full rounded-xl bg-[#10191D] z-10 relative flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="text-[#96B0BD] text-[16px]">
                  {formatDate(nextPost.sys.createdAt)}
                </div>
                <span className="text-[#96B0BD] text-[16px]">/</span>
                <div className="text-[#96B0BD] text-[16px]">
                  <span>
                    {getReadTime(nextPost.fields.blogContent)} min to read
                  </span>
                </div>
              </div>
              <h1 className="text-2xl font-bold">{nextPost.fields.title}</h1>
              <div className="flex gap-3">
                {nextPost.metadata.tags.map((tag) => (
                  <div
                    key={tag.sys.id}
                    className="capitalize bg-[#28373E] px-2 py-1 rounded-full text-sm text-[#F5F5F5] border border-[#3E525B]"
                  >
                    {tag.sys.id}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPost;
