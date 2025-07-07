import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Top */}
        <div className="footer_top">
          <div className="container">
            <div className="ft_in">
              <div className="desc">
                {/* <div className="img">
                  <img src="/img/footer-logo.png" alt="" />
                </div> */}
                <p className="fn_title">
    {/* Don’t miss out on our updates!<br/> Subscribe to our newsletter. */}
                 Looking forward to see you in the heart of Transylvania!
                </p>
                {/* <p className="fn_desc">
                  Morbi non dignissim erat, a blandit felis nec lorem vel orci
                  varius congue ut vitae est. Nam quis tempus nisl. Fusce
                  posuere nibh a mi molestie, sit amet ornare
                </p> */}
  
              </div>
{/*
              <div className="subscribe_form">
                <div className="subscribe_in">
                  <input
                    type="text"
                    placeholder="Email address"
                    style={{ border: "none", backgroundColor: "transparent" }}
                  />
                  <a href="#" className="neoh_fn_button only_text">
                    <span className="text">Subscribe</span>
                  </a>
                </div>
                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                  data-message="You have subscribed to our updates. Thank you"
                  data-invalid-email="Please enter valid email!"
                />
                <div className="empty_notice">
                  <span>Please enter your Email</span>
                </div>
              </div>
*/}


{/*
              <div className="neoh_fn_social_list">
                <ul>
                  <li>
                    <a href="https://t.me/NeoTechAi">
                      <img src="/img/menu/menu_telegram.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/neotechai">
                      <img src="/img/menu/menu_linkedin.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@neotech.official">
                      <img src="/img/menu/menu_youtube.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/NeoTechAi">
                      <img src="/img/menu/menu_facebook.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/NeoTech_Ai">
                       <img src="/img/menu/menu_twitter.png" />
                    </a>
                  </li>
                </ul>
              </div>
*/}
            </div>
          </div>
        </div>



        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-100px'  }}>
          <p>
            <a href='https://neotechai.com'>
              <img src='/img/poweredby.png' target="_blank" alt='NeoTechAi' width='800px' />
            </a>
          </p>
        </div> 
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
             
              <a className="originTextColor" href="/team">
                Speakers
              </a>
             <a className="originTextColor" href="/public/TwsBrochure.pdf" download="TwsBrochure.pdf">
                Brochure
              </a>
            
              <a className="originTextColor" href="/contact">
                Contact
              </a>
          
              {/*
              <a className="originTextColor" href="/trade">
                Trade
              </a>
              <a className="originTextColor" href="/swap">
                Swap
              </a>
              */}
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
