import { useEffect } from "react";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const NeotClaimOne = () => {
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
      window.location.href = "https://3pay.dev/neovest/?vest=presale";
    }
  }, []);

  return (
    <Layout pageName={"NeotClaim First Presalers"}>
      {/* Page Content */}
      <PageBanner pageName={"NeoTech First Presale"} imageURL={"img/hero/NeoVault.png"} />
      <div className="neoh_fn_MAASpage">
        <section id="information" className="main_padding">
          <div className="NeotVesting responsive-container">
            {/* Iframe container for styling */}
            <div className="iframe-container">
              <iframe
                src="https://3pay.dev/neovest/?vest=presale"
                title="NeotVesting Functionality"
              ></iframe>
            </div>
          </div>

          <div className="container responsive-container">
            {/* Main Content */}
            <h2 className="fn_title animate-text">Claim your allocated tokens here!</h2>
            <p>
              Make sure to check this page each month to claim your vested tokens! < br/>
              First Round of Presalers Vesting: 20% unlocked at Launch and then 20% Linear each month for 4 months.
            </p>
          </div>
        </section>
      </div>
      <style jsx>{`
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

export default NeotClaimOne;

