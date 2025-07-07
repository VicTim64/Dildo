// src/pages/[...slug].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ErrorPage from 'next/error'; // Ensure you have "next/error" imported for 404 handling

export default function DynamicPage() {
  const router = useRouter();
  const { slug = [] } = router.query;

  // Convert the slug array into a normalized lowercase path
  const normalizedPath = slug.join('/').toLowerCase();

  useEffect(() => {
    // Redirect to lowercase path if the current path has uppercase letters
    if (router.asPath !== `/${normalizedPath}`) {
      router.replace(`/${normalizedPath}`);
    }
  }, [normalizedPath, router]);

  // Sample conditional rendering for known pages
  if (normalizedPath === 'about') {
    return <div>Content for "About Page"</div>;
  } else if (normalizedPath === 'services') {
    return <div>Content for "Services Page"</div>;
  } else if (normalizedPath === 'contact') {
    return <div>Content for "Contact Page"</div>;
  }

  // If path does not match any known pages, show 404 error
  return <ErrorPage statusCode={404} />;
}
