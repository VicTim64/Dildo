import { useEffect, useState } from "react";

const DayTwo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="dayone-wrapper">
      <img
        src={isMobile ? "/img/daytwomobile.png" : "/img/daytwo.png"}
        alt="Day Two"
        className="responsive-img"
      />

      <style jsx>{`
        .dayone-wrapper {
          margin: 0;
          padding: 0;
          width: 100vw;
          height: 100vh;
          background: #000;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .responsive-img {
          width: 100vw;
          height: auto;
          max-height: 100vh;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default DayTwo;
