import { useEffect } from "react";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const Contact = () => {

  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/250748554584367";
    script.type = "text/javascript";

    // Append the script to the form container
    const formContainer = document.getElementById("jotform-container");
    formContainer.appendChild(script);

    // Clean up by removing the script when the component unmounts
    return () => {
      formContainer.removeChild(script);
    };
  }, []);

  return (
    <Layout pageName={"Contact"}>
      <PageBanner pageName={"Contact"} imageURL={"img/hero/head_about_background.png"} />
      <div className="neoh_fn_contact_page">
        <div className="container">
          <div className="mw_500">
            <div className="info_list">
              <ul>
                <li>
    {/*  <p className="label">Contact us</p>
                  <h3 className="value">
                    <a href="mailto:example@domain.com">hello@neotechai.com</a>
  
                  </h3>
*/}
                </li>
              </ul>
            </div>
            
            {/* Container for the JotForm */}
            <div id="jotform-container"></div>
            
            {/* Old form commented out */}
            {/*
            <form
              action="/"
              method="post"
              className="contact_form"
              id="contact_form"
              autoComplete="off"
            >
              <div className="input_list">
                <ul>
                  <li>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Your Name" />
                  </li>
                  <li>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="text"
                      placeholder="Your Email"
                    />
                  </li>
                  <li>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" defaultValue={""} placeholder="Your Message" />
                  </li>
                  <li>
                    <a
                      id="send_message"
                      href="#"
                      className="neoh_fn_button only_text"
                    >
                      <span className="text">Send</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="returnmessage"
                data-success="Your message has been received, We will contact you soon."
              />
              <div className="empty_notice">
                <span>Please Fill Required Fields</span>
              </div>
            </form>
            */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
