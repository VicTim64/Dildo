import { useState, useEffect, useRef } from "react";
import Layout from "@/layout/Layout";
import AboutComponent from "@components/AboutComponent";
import ServicesComponent from "@components/ServicesComponent";
import WhyChooseUsComponent from "@components/WhyChooseUsComponent";
import RoadmapComponent from "@/components/RoadmapComponent";
import JoinNeoTechArmy from "@components/JoinNeoTechArmy";
import Sponsors from "@components/Sponsors";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // State for the loading screen
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  const categories = {
    Opportunities: 
      "Transylvania Summit serves as a global networking event for facilitating dialogue, fostering collaboration, and catalyzing investment initiatives in the Web3 Ecosystem.",
    "Growing Market":
      "Gain visibility in the rapidly expanding crypto and blockchain community of Eastern Europe, an untapped region with immense potential for Web3 adoption.",
    Exposure:
      "Feature your logo and messaging across event materials, websites, and sessions to reach a highly engaged audience of developers, investors, and innovators.",
    Networking:
      "Meet high-profile speakers, investors, regional tech leaders, and early adopters, fostering valuable connections and potential business partnerships.",
    Engagement:
      "Interact with decision-makers and influencers in the Web3 space, including tech leaders, early adopters, and industry experts.",
  };

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  useEffect(() => {
    const initialCategory = Object.keys(categories)[0];
    setSelectedCategory(initialCategory);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    startTimer();
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const categoriesArray = Object.keys(categories);
        const nextIndex = (prevIndex + 1) % categoriesArray.length;
        setSelectedCategory(categoriesArray[nextIndex]);
        return nextIndex;
      });
    }, 10000); // 10 seconds
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const buttonStyle = (isSelected) => ({
    padding: "5px 10px",
    transition: "all 0.3s ease",
    background: isSelected
      ? "white"
      : "linear-gradient(to right, #007bff, #00aaff)",
    color: isSelected ? "black" : "white",
    borderRadius: "5px",
    cursor: "pointer",
  });

  const boxStyle = {
    marginTop: "10px",
    padding: "15px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    border: "2px solid",
    borderImage: "linear-gradient(to right, #007bff, #00aaff) 1",
    borderRadius: "5px",
    color: "white",
    textAlign: "center",
    opacity: selectedCategory ? "1" : "0",
    transition: "opacity 0.5s ease, transform 0.5s ease",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    maxHeight: "150px",
    overflowY: "auto",
    width: "100%",
  };

  const containerRefStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "10px",
  };

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <Layout pageName={"Home"}>
      {/* Loading Screen */}
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            zIndex: 9999,
            opacity: 1, // Keep opacity consistent
            transition: "opacity 0.5s ease",
          }}
        />
      ) : (
        <>
          {/* Hero Header */}
          <div className="neoh_fn_hero">
            <div className="bg_overlay">
              <img 
                src="/video/muresnight.png" 
                alt="Background" 
                className="bg-img"
              />
            </div>
            <div className="hero_content">
              <div className="container">
                <div className="content">
                  <h2 className="fn_title"  >
                    Transylvania <span className="blueColor">Web3 </span> Summit
{/*    <br />
                    <br />
                  <br /> style={{ fontSize: "46px" }}
                      <br /> style={{ fontSize: "28px" }}
                     */}
                  </h2>
                  <p className="fn_desc fn_animated_text" >
                    Unlocking Eastern Europe's Blockchain Potential
                  </p>
 <br />
                  
                       
                    
                  
                  <p><b> 29 - 30 May 2025 </b> <br /></p>

                  <div className="home_logo">
                    <div style={wrapperStyle}>
                      <p ref={containerRef} style={containerRefStyle}>
                        {Object.keys(categories).map((category, index) => (
                          <span
                            key={index}
                            className="category-button"
                            style={buttonStyle(selectedCategory === category)}
                            onClick={() => handleClick(category)}
                          >
                            {category}
                          </span>
                        ))}
                      </p>

                      {selectedCategory && (
                        <div className="category-box" style={boxStyle}>
                          <p style={{ margin: "0", color: "white" }}>
                            {categories[selectedCategory]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
             {/*  <a href="#about" className="neoh_fn_down">
                <span className="text">Welcome to the Transylvania Web3 Summit 2025</span>
              </a>  */}
            </div>
          </div>

          {/* Sections */}
          {/* <RoadmapComponent />*/}
          <AboutComponent />
          <ServicesComponent isLoading={isLoading} />
          <Sponsors />
          <WhyChooseUsComponent />
          <JoinNeoTechArmy />
        </>
      )}
      <style jsx>{`
        .bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          object-fit: cover;
          z-index: -1;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
