import { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const NeoVault = () => {
  const [showVideo, setShowVideo] = useState(true); // State to control video visibility

  useEffect(() => {
    // Function to detect if user is on MetaMask mobile browser or on a mobile device
    const isMobileOrMetaMask = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Check for mobile devices
      const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

      // Check for MetaMask mobile in-app browser
      const isMetaMask = userAgent.includes("MetaMask");

      return isMobile || isMetaMask;
    };

    // If mobile or MetaMask is detected, redirect to the dApp link
    if (isMobileOrMetaMask()) {
      window.location.href = "https://3pay.dev/neo";
    }

    // Automatically make the video fullscreen
    const iframe = document.getElementById("youtube-video");

    const requestFullScreen = () => {
      if (iframe && iframe.requestFullscreen) {
        iframe.requestFullscreen().catch((err) => {
          console.error("Fullscreen request failed:", err);
        });
      } else if (iframe && iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe && iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe && iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    };

    // Wait for the iframe to load before requesting fullscreen
    const handleLoad = () => {
      requestFullScreen();
    };

    iframe?.addEventListener("load", handleLoad);

    // Hide the video after 10 seconds
    const timer = setTimeout(() => {
      setShowVideo(false);
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
      iframe?.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <Layout pageName={"NeoVault"}>
      {/* Video Overlay */}
      {showVideo && (
        <div className="video-overlay">
          <iframe
            id="youtube-video"
            src="https://www.youtube.com/embed/coMOePXBf8M?autoplay=1&mute=1&fs=1"
            title="YouTube Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Page Content */}
      <PageBanner pageName={"NeoVault"} imageURL={"img/hero/NeoVault.png"} />
      <div className="neoh_fn_MAASpage">
        <section id="information" className="main_padding">
          <div className="NeoVault responsive-container">
            {/* Iframe container for styling */}
            <div className="iframe-container">
              <iframe
                src="https://3pay.dev/neo/?how=false"
                title="NeoVault Functionality"
              ></iframe>
            </div>
          </div>

          <div className="container responsive-container">
            {/* Main Content */}
            <h2 className="fn_title animate-text">Unlock the Vault, Win Big, and Watch the Pot Grow!</h2>
            <p className="fn_desc fn_animated_text">
              NeoVault is now live, thanks to our partnership with FateLabz!
              The vault is funded with USDT (BEP20) and ready for those daring enough to crack the code and claim it all.
            </p>

            {/* Additional sections */}
            <h3 className="fn_subtitle animate-text">How It Works</h3>
            <p className="fn_desc fn_animated_text">Choose your strategy and try to unlock the vault:</p>

            <h4 className="fn_option_title">Option 1 – Try Your Luck 🎟️</h4>
            <p className="fn_desc fn_animated_text">
              Spend BNB for scratch-off tickets, where matching 3 symbols will unlock the vault!
              The higher the pot, the tougher the odds. Are you up for the challenge?
            </p>

            <h4 className="fn_option_title">Option 2 – Find the Clues 🔍</h4>
            <p className="fn_desc fn_animated_text">
              Stay alert for hints across our website and social channels. Piece them together,
              guess the correct phrase, and if you’re right, the vault and its growing prize are yours!
            </p>

            <h3 className="fn_subtitle animate-text">Cost Per Attempt</h3>
            <ul className="fn_desc fn_animated_text">
              Every attempt: 1.00 USD of BNB
            </ul>

            <h3 className="fn_subtitle animate-text">The Twist</h3>
            <p className="fn_desc fn_animated_text">
              Every failed attempt adds the BNB used back into the vault, growing the pot for the next round.
              The bigger the vault, the greater the stakes!
            </p>

            <p className="fn_desc fn_animated_text">
              So, will you try your luck, or are you a true NeoTech supporter ready to uncover the clues?
            </p>

            <p className="fn_desc fn_animated_text">
              Stay connected and follow us on social media and Telegram for tips and updates! NeoVault will reset it's password and restart each time the Vault gets opened.
            </p>
          </div>
        </section>
      </div>
    <style jsx>{`
 
         /* Video Overlay Styles */
          .video-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
  }

  .video-overlay iframe {
    width: 100%;
    height: 100%;
  }

  #information.main_padding {
    padding-top: 0; /* Remove padding if present */
  }

  /* CSS styles for page content */
  .responsive-container {
    text-align: center;
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
    padding: 0 15px;
  }

  .iframe-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }

  .iframe-container iframe {
    width: 100%;
    height: 600px;
    border: none;
  }

  .animate-text {
    animation: fadeIn 1.5s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .responsive-container {
      max-width: 100%;
    }
    .iframe-container iframe {
      height: 300px;
    }
    h2.fn_title,
    h3.fn_subtitle,
    h4.fn_option_title {
      font-size: 1.5rem;
    }
    p.fn_desc {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h2.fn_title {
      font-size: 1.25rem;
    }
    h3.fn_subtitle,
    h4.fn_option_title {
      font-size: 1rem;
    }
    p.fn_desc {
      font-size: 0.9rem;
    }
    .iframe-container iframe {
      height: 250px;
    }
  }
`}</style>

    </Layout>
  );
};

export default NeoVault;
