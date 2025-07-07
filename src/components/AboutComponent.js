import Link from "next/link";

const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/technology/summitintro.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Welcome To Transylvania</h3>
              {/* <div className="line">
                <span />
              </div> */}
            </div>
            <div className="desc">
              <p>
          The Transylvania Summit is a premier private networking event dedicated to fostering dialogue, collaboration, and investment within the Web3 ecosystem. Scheduled for May 29-30, 2025, at the EMERALD LUXURY EVENTS in Târgu Mureș, Romania, this exclusive gathering brings together investors, diplomats, entrepreneurs, and business leaders from around the globe.
  </p>
  <p>
          Building on the success of its inaugural edition, which attracted over 120 distinguished guests from countries including the United States, Belgium, Switzerland, Germany, Jordan, Brazil, Spain, and Monaco, the summit continues to highlight the investment potential and innovation inherent in the region.
              </p>
  <p>
The summit's agenda includes conference panels, networking sessions, and festive dinners with wine tastings, providing ample opportunities for attendees to connect and explore collaboration prospects.
By uniting global stakeholders in the heart of Transylvania, the summit aims to catalyze investment initiatives and drive blockchain innovation in Eastern Europe.
  </p>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/technology/galaplace.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Venue Place</h3>
            </div>
            <div className="desc">
              <p>
              Nestled in a serene corner of Târgu Mureș yet just
minutes from the city center, EMERALD LUXURY EVENTS offers the
perfect blend of tranquility and convenience. Ideal for
both brief getaways and extended stays, this historic
venue promises an unforgettable experience for
business or leisure travelers.
              </p>
                  <p>
                   Located only 1.5 km from
downtown and 0.5 km from Târgu Mureș Train Station.
EMERALD LUXURY EVENTS sets the stage for the Transylvania Web3
Summit, providing a modern, comfortable environment
that elevates every event to new heights.
                  </p>
                 
             
      
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
              {/* About Item #3 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/technology/reach.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Who Will You Reach at Transylvania Web3 Summit?</h3>
            </div>
            <div className="desc">
              <p>
              Demographics: Professionals aged 25-45 including developers,
entrepreneurs, investors, and crypto enthusiasts
              </p>
               <p>
                  Geographic Distribution: Predominantly Eastern European, with international
Web3 professionals from 10+ countries.
                    </p>
  <p> Key Atendee Groups: Crypto enthusiasts, blockchain developers, investors,
enterprises, and policymakers. </p>
  <p>
  Engagement Opportunities: Direct access to decision-makers, influencers, and
early adopters in the crypto space.
  </p>
            </div>
          </div>
        </div>
        {/* !About Item #3 */}
      </div>
    </section>
  );
};
export default AboutComponent;
