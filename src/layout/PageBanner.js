import Link from "next/link";
const PageBanner = ({ pageName, otherName, imageURL }) => {
  return (
    <div className="neoh_fn_pagetitle">
      <div className="bg_overlay">
        <div className="bg_color" />
    <div 
          className="bg_image"
          data-bg-img={imageURL ? imageURL : ""}
          style={{
            backgroundSize: "cover",       // Keeps the image fully visible without cropping
            backgroundPosition: "right center", // Aligns image to the right without distortion
            backgroundRepeat: "no-repeat",     // Prevents tiling if the image is smaller than container
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="pt_content">
        <div className="container">
          <h3
            className="fn_title fn_animated_text"
            data-wait={1000}
            data-speed={8}
          >
            {pageName}
          </h3>
          <p className="fn_desc">
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
            <span className="separator">/</span>
            <span className="current">{otherName?otherName:pageName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
