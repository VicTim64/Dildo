import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const tokenomics = () => {
  const categories = [
    { name: "Presale", percentage: 8.14, color: "#FF007A" },
    { name: "KOL", percentage: 3, color: "#007BFF" },
    { name: "Team", percentage: 15, color: "#00AAFF" },
    { name: "Advisors", percentage: 5, color: "#FFD700" },
    { name: "Marketing", percentage: 7, color: "#00FFAA" },
    { name: "Ecosystem", percentage: 8, color: "#FF8800" },
    { name: "Airdrops", percentage: 0.3, color: "#AA00FF" },
    { name: "Staking", percentage: 10, color: "#FF6347" }, // Added Staking category with 10%
  ];

  return (
    <Layout pageName={"Tokenomics"}>
      <PageBanner
        pageName={"Tokenomics"}
        imageURL={"img/hero/head_tokenomics_background.png"}
      />
      <div className="neoh_fn_MAASpage">
        <section id="information">
          <div className="container">
            {/* Guarantee List */}
            <p className="fn_desc fn_animated_text">
              $NEOT tokens facilitate value exchange, utilized for staking and ecosystem access pass, serving as the primary
              currency for purchasing data, services and gaining access to unique features within NeoTech.
            </p>
            <p className="fn_desc fn_animated_text">
              Token holders can vote on future collections and locations,
              shaping the marketplace and the future of the NeoTech project.
            </p>
            <p className="fn_desc fn_animated_text">
              The token will be the key-asset that users must hold in their
              wallets to access our platform, purchase advertisements, and
              enquire about scanning services.
            </p>

            {/* Token and Tax Info */}
            <div className="tokenomics_container">
              <div className="flex_row_next_col">
                <div className="token_container">
                  <p className="blueColor" style={{ fontSize: "22px" }}>
                    Token
                  </p>
                  <p className="tokenomics_bigFont">$NEOT</p>
                </div>
                <div className="token_container">
                  <p className="blueColor" style={{ fontSize: "22px" }}>
                    Tax
                  </p>
                  <p className="tokenomics_bigFont">0%</p>
                </div>
              </div>
            </div>

            {/* Launching Section */}
            <div className="tokenomics_container">
              <div
                className="flex_row_next_col"
                style={{ borderColor: "#FF007A" }}
              >
                <p className="tokenomics_midFont">Launching on</p>
                <img
                  src="img/tokenomics/tokenomics_launch.png"
                  alt="uniswap.png"
                />
              </div>
            </div>

            {/* Tokenomics Section */}
            <div className="tokenomics_container flex_column">
              <h2 className="tokenomics_heading">250 Million $NEOT</h2>
              <div className="colored-line"></div>
              <div className="horizontal-categories">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="category-item"
                    style={{
                      borderBottom: `4px solid ${category.color}`,
                    }}
                  >
                    <span className="category-name">{category.name}</span>
                    <span className="category-percentage">{`${category.percentage}%`}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="fn_desc fn_animated_text" style={{ marginTop: "100px" }}>
              *Tokens will be bought at launch and NeoTech will be purchasing tokens for the Future Ecosystem Growth.
            </p>
          </div>
        </section>
      </div>
      <style jsx>{`
        .tokenomics_heading {
          text-align: center;
          font-size: 32px; /* Increased font size by another 30% */
          font-weight: bold;
          margin-bottom: 10px;
        }
        .colored-line {
          width: 55%; /* Reduced the width by 20% from previous */
          height: 10px; /* Line height is still large to stand out */
          background: linear-gradient(
            to right,
            #ff007a,
            #007bff,
            #00aaff,
            #ffd700,
            #00ffaa,
            #ff8800,
            #aa00ff,
            #ff6347  /* Added color for Staking category */
          );
          margin-bottom: 20px;
        }
        .horizontal-categories {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 10px;
          width: 50%; /* Reduced width by 20% from previous to align with the line */
          margin-left: auto;
          margin-right: auto; /* Center the categories */
        }
        .category-item {
          text-align: center;
          padding: 17px 26px; /* Increased padding by 30% */
          border-radius: 5px;
          background-color: #f9f9f9;
          flex: 1;
          min-width: 130px; /* Reduced min-width by another 10% */
        }
        .category-name {
          display: block;
          font-size: 16px; /* Reduced by 20% from previous */
          font-weight: bold;
          margin-bottom: 9px; /* Increased margin to maintain balance */
        }
        .category-percentage {
          font-size: 18px; /* Reduced by 20% from previous */
          color: #666;
        }
      `}</style>
    </Layout>
  );
};

export default tokenomics;
