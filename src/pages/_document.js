import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Mailchimp Site Connection Script */}
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `
              !function(c,h,i,m,p){
                m=c.createElement(h),p=c.getElementsByTagName(h)[0],
                m.async=1,m.src=i,p.parentNode.insertBefore(m,p)
              }(document,"script",
              "https://chimpstatic.com/mcjs-connected/js/users/521a13403086817f0cd63e1b4/4b5fce1d2fac904d3af9072a3.js");
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
