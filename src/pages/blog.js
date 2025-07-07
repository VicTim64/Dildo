import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// Components
import PostsList from '@/components/elements/PostsList';
import useFetchThis from '@/hooks/useFetchThis';

const Blog = () => { 
  const contentfulConfig = useMemo(
    () => ({
      accessToken: 'IBhrxUpZK1a1vn6GbYNtVJjkDjC7_Eod1Us6juFVaSo',
      baseUrl: 'https://cdn.contentful.com',
      environmentId: 'master',
      requiredContentType: 'blog',
      spaceId: 'n9ci4a0ydf2o',
    }),
    []
  );

  const [blogPostsData, loading, error] = useFetchThis(
    `${contentfulConfig.baseUrl}/spaces/${contentfulConfig.spaceId}/environments/${contentfulConfig.environmentId}/entries?access_token=${contentfulConfig.accessToken}&content_type=${contentfulConfig.requiredContentType}`
  );
  const [assetUrls, setAssetUrls] = useState({});

  const fetchAssetUrl = useCallback(
    async (assetId) => {
      if (assetUrls[assetId]) {
        return assetUrls[assetId];
      }
      try {
        const response = await fetch(
          `${contentfulConfig.baseUrl}/spaces/${contentfulConfig.spaceId}/environments/${contentfulConfig.environmentId}/assets/${assetId}?access_token=${contentfulConfig.accessToken}`
        );
        const data = await response.json();
        const url = `https:${data.fields.file.url}`;
        setAssetUrls((prevState) => ({ ...prevState, [assetId]: url }));
        return url;
      } catch (error) {
        console.error('Failed to fetch asset:', error);
        return null;
      }
    },
    [assetUrls, contentfulConfig]
  );

  useEffect(() => {
    if (blogPostsData && blogPostsData.items) {
      blogPostsData.items.forEach((post) => {
        if (post.fields.thumbnail && post.fields.thumbnail.sys) {
          fetchAssetUrl(post.fields.thumbnail.sys.id);
        }
      });
    }
  }, [blogPostsData, fetchAssetUrl]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>Could not load the Blog Posts! Try refreshing the page.</p>;

  return (
    <Layout pageName={"Blog"}>
      <PageBanner
        pageName={"Blog"}
        imageURL={"img/hero/head_blog_background.png"}
      />
      <div className="neoh_fn_blog_page">
        <div className="container">
          <div className="neoh_fn_moving_blog">
            {blogPostsData && <PostsList assetUrls={assetUrls} posts={blogPostsData.items} />}
          </div>
          {/* <div className="full_button">
            Load more  
          </div> */}
          {/* !Moving Blog List Shortcode */}
          {/* Pagination */}
          {/* <div className="neoh_fn_pagination">
            <ul>
              {state &&
                state.map((s, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={` ${active === s ? "current" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(s);
                      }}
                    >
                      {s}
                    </a>
                  </li>
                ))}
            </ul>
          </div> */}
          {/* !Pagination */}
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
