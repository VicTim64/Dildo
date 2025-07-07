import { useState, useEffect, Fragment } from "react";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  const phases = [
    {
    
      phase: "29 May",
      description: [
        "8:30 AM - Meet & Greet",
        "10 AM - Grand Opening",
        "11 AM - Conference Panels",
        "13 PM - Lunch & Networking",
        "14 PM - Conference Panels",
        "18 PM - Festive Dinner & Wine Tasting"
      ],
      image: "img/timeline/1/2.png", // New image path for Phase 2
    },
    {
      phase: "30 May",
      description: [
       "9 AM - Coffe & Netowrking",
        "10 AM - Conference Panels",
        "13 PM - Lunch & Networking",
        "14 PM - Conference Panels",
        "19 PM - Gala Dinner & After Party"
      ],
      image: "img/timeline/1/3.png", // New image path for Phase 3
    },
   
  ];

  useEffect(() => {
    const resetInterval = () => {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % phases.length);
      }, 10000); // Slide transition interval
      setAutoSlideInterval(interval);
    };

    resetInterval();

    return () => {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
    };
  }, [phases.length]);

  const handleArrowClick = (direction, event) => {
    event.preventDefault(); // Prevent the default behavior
    setActiveIndex((prevIndex) => {
      const newIndex =
        direction === "prev"
          ? (prevIndex - 1 + phases.length) % phases.length
          : (prevIndex + 1) % phases.length;
      return newIndex;
    });
    // Reset the timer on arrow click
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % phases.length);
    }, 10000); // Slide transition interval
    setAutoSlideInterval(interval);
  };

  return (
    <Fragment>
      {/* Main Title */}
      <div className="neoh_fn_title">
        <h3 className="fn_title">Event Timeline</h3>
      </div>
      {/* Timeline */}
      <div className="neoh_fn_timeline">
        <div className="timeline_container">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`timeline_item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src={phase.image} alt="" /> {/* Dynamically set image */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <h3 className="fn_title">
                    <a href="https://neotechai.gitbook.io/neotechai/roadmap">{phase.phase}</a>
                  </h3>
                  {phase.description.map((desc, idx) => (
                    <p className="fn_desc" key={idx}>
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="timeline_nav">
          <button
            className="nav_arrow prev"
            onClick={(event) => handleArrowClick("prev", event)}
          >
            &lt;
          </button>
          <button
            className="nav_arrow next"
            onClick={(event) => handleArrowClick("next", event)}
          >
            &gt;
          </button>
        </div>
      </div>

      <style jsx>{`
        .neoh_fn_title {
          text-align: center;
          margin-bottom: 20px;
        }

        .fn_title {
          font-size: 2em;
          color: white;
        }

        .neoh_fn_timeline {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .timeline_container {
          display: flex;
          transition: transform 1s ease-in-out;
          width: 100%;
        }

        .timeline_item {
          min-width: 100%;
          transition: opacity 1s ease-in-out;
          opacity: 0;
        }

        .timeline_item.active {
          opacity: 1;
        }

        .t_item_img img {
          width: 100%;
        }

        .fn_title,
        .fn_desc {
          color: white;
        }

        .timeline_nav {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 20px;
        }

        .nav_arrow {
          background: blue;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          font-size: 2em;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav_arrow.prev {
          margin-right: auto;
        }

        .nav_arrow.next {
          margin-left: auto;
        }
      `}</style>
    </Fragment>
  );
};

export default Timeline;
