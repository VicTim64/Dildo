import Link from "next/link";
const BlogComponent = () => {
  return (
    <section id="blog">
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Blog</h3>
          {/* <div className="line">
            <span />
          </div> */}
        </div>
        {/* !Main Title */}
        {/* Moving Blog List Shortcode */}
        {/* <p style={{fontSize: "1.5rem", fontWeight: "bold", color: "white", textAlign: "center"}}>
            No Exist!
          </p> */}
        {/* <div className="neoh_fn_moving_blog">
          <ul>
            <li>
              <div className="item">
                <p className="neoh_fn_button only_text">
                  <span>June 01, 2022</span>
                </p>
                <div className="imageBox">
                  <img src="img/blog/1.png" alt="bg" className="moving_img"/>
                </div>
                <h3 className="fn_title">
                  <Link legacyBehavior href="/blog-single">
                    Neots NFT Goes Public In Nod To Crypto Adoption
                  </Link>
                </h3>
                <p className="fn_desc">
                  Morbi non dignissim erat, a blandit felis nec lorem vel orci
                  varius congue ut vitae est.
                </p>
                <p className="fn_read">
                  <Link legacyBehavior href="/blog-single">
                    <a
                      className="blueColor only_text"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="text">Read More</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <p className="neoh_fn_button only_text">
                  <span>May 25, 2022</span>
                </p>
                <div className="imageBox">
                  <img src="img/blog/1.png" alt="bg" className="moving_img"/>
                </div>
                <h3 className="fn_title">
                  <Link legacyBehavior href="/blog-single">
                    Bankman-Fried Would Like to Talk With Musk About Twitter
                  </Link>
                </h3>
                <p className="fn_desc">
                  Morbi non dignissim erat, a blandit felis nec lorem vel orci
                  varius congue ut vitae est.
                </p>
                <p className="fn_read">
                  <Link legacyBehavior href="/blog-single">
                    <a
                      className="blueColor only_text"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="text">Read More</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <p className="neoh_fn_button only_text">
                  <span>May 13, 2022</span>
                </p>
                <div className="imageBox">
                  <img src="img/blog/1.png" alt="bg" className="moving_img"/>
                </div>
                <h3 className="fn_title">
                  <Link legacyBehavior href="/blog-single">
                    Crypto-Focused Silvergate Jumps on Blowout Earnings Report
                  </Link>
                </h3>
                <p className="fn_desc">
                  Morbi non dignissim erat, a blandit felis nec lorem vel orci
                  varius congue ut vitae est.
                </p>
                <p className="fn_read">
                  <Link legacyBehavior href="/blog-single">
                    <a
                      className="blueColor only_text"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="text">Read More</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};
export default BlogComponent;
