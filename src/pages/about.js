import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import TeamInfor from "@/data/team_infor.json";
import Link from "next/link";
import { useCallback } from "react";

const About = () => {
  const handleVideoClick = useCallback((event) => {
    event.preventDefault();
    window.open("https://www.youtube.com/watch?v=ielcYX0fRfg", "_blank");
  }, []);

  return (
    <Layout pageName={"About"}>
      <PageBanner
        pageName={"About"}
        imageURL={"img/hero/head_about_background.png"}
      />
      <div className="neoh_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            <p className="fn_desc fn_animated_text">
              Introducing the premier blockchain and Web3 event in Romania, designed to drive innovation and adoption across Eastern Europe.
            </p>
            <p className="fn_desc fn_animated_text">
              Transylvania Web3 Summit, a groundbreaking event aimed at driving blockchain innovation in Eastern Europe. Transylvania Summit serves as a global networking event for facilitating dialogue, fostering collaboration, and catalyzing investment initiatives in the Web3 Ecosystem.
            </p>
            <p className="fn_desc fn_animated_text">
              The Transylvania Web3 Summit will be held at a modern convention center in the heart of Targu Mure, Romania. This state-of-the-art venue features high-speed internet and ample space for a seamless blend of in-person and digital experiences.
            </p>
            
            {/* Image List */}
            <div className="neoh_fn_images">
              <ul>
                <li><img src="/img/about/aboutimg1.png" alt="About Image 1" /></li>
                <li><img src="/img/about/aboutimg2.png" alt="About Image 2" /></li>
                <li><img src="/img/about/aboutimg3.png" alt="About Image 3" /></li>
              </ul>
            </div>
          </div>
        </section>
        {/* !Information Section */}
        
        {/* Video Section */}
        <section id="video">
          <div className="video_link">
            <video autoPlay loop muted onClick={handleVideoClick} className="video_background">
              <source src="/video/TWSpresentation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        {/* !Video Section */}
        
        {/* Team Section */}
        <section id="team">
          <div className="container">
            <div className="neoh_fn_title">
              <h3 className="fn_title">Meet The Hosts!</h3>
            </div>
            <p className="fn_desc fn_animated_text">
             Interact with decision-makers and
influencers in the Web3 space, including
tech leaders, early adopters, and industry
experts.

            </p>
            <div className="neoh_fn_team">
              <ul className="team_list">
                {TeamInfor.map((item, key) =>
                  key < 6 && (
                    <li className="team_item" key={key}>
                      <div className="t_item">
                        <div className="person_info">
                          <div className="img_holder">
                            <img src={`img/team/${item.avatar}`} alt="avatar" />
                          </div>
                          <div className="title_holder">
                            <h3 className="fn_title">{item.name}</h3>
                            <p className="fn_desc">{item.position}</p>
                          </div>
                        </div>
                        <div className="person_social">
                          <ul>
                            <li>
                              <a href={item.social.linkedin}>
                                <img src="img/team/linkedin_white.png" alt="linkedin_link" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
            <Link legacyBehavior href="/team">
              <div className="full_button">Enter Team Page</div>
            </Link>
          </div>
        </section>
        {/* !Team Section */}
      </div>

      {/* Inline CSS for the Video Section */}
      <style jsx>{`
        .video_container {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: auto;
        }
        .video_link {
          display: block;
          position: relative;
        }
        .video_background {
          width: 100%;
          height: auto;
          cursor: pointer;
        }
        .neoh_fn_images ul {
          display: flex;
          justify-content: space-between;
          list-style: none;
          padding: 0;
        }
        .neoh_fn_images ul li {
          width: 30%;
        }
        .neoh_fn_images ul li img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </Layout>
  );
};

export default About;
