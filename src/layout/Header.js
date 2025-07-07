import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      {/* Right Navigation */}
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div
          className="trigger is-active"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Close Button */}
          <div className="trigger_in" onClick={() => setToggle(false)}>
            <img src="/img/menu/close_button.png" alt="closeButton" />
          </div>
        </div>
        <div className="nav_content">
          <ul style={{ padding: "20px 0" }}>
            <li className="menu-item" style={{ marginBottom: "30px" }}>
              <Link legacyBehavior href="/about">
                <a style={linkStyle}>About</a>
              </Link>
            </li>
            <li className="menu-item" style={{ marginBottom: "30px" }}>
              <Link legacyBehavior href="/speakers">
                <a style={linkStyle}>Speakers</a>
              </Link>
            </li>
            <li className="menu-item" style={{ marginBottom: "30px" }}>
              <Link legacyBehavior href="/dayone">
                <a style={linkStyle}>Day One Panel</a>
              </Link>
            </li>
            <li className="menu-item" style={{ marginBottom: "30px" }}>
              <Link legacyBehavior href="/daytwo">
                <a style={linkStyle}>Day Two Panel</a>
              </Link>
            </li>
            <li className="menu-item" style={{ marginBottom: "30px" }}>
              <a href="/TwsBrochure.pdf" target="_blank" style={linkStyle}>
                Brochure
              </a>
            </li>
            <li className="menu-item" style={{ marginBottom: "30px" }}>
              <a href="/PastSpeakers.pdf" target="_blank" style={linkStyle}>
                Past Speakers
              </a>
            </li>
            <li className="menu-item" style={{ marginBottom: "30px" }}>
              <Link legacyBehavior href="/contact">
                <a style={linkStyle}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          <div className="nf_left">
            <p style={{ color: "#fff" }}>
              Copyright {new Date().getFullYear()} Transylvania Summit
            </p>
          </div>
          <div className="nf_right">
            <div className="neoh_fn_social_list">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/transylvania-web3-summit-864689362">
                    <img src="/img/menu/menu_linkedin.png" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61574956267004">
                    <img src="/img/menu/menu_facebook.png" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/transylvaniaw3s">
                    <img src="/img/menu/menu_twitter.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* !Nav Footer */}
      </div>
      {/* !Right Navigation */}

      {/* Header */}
      <header className="neoh_fn_header">
        <div
          className="header_in"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Animated Gradient Box */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: "400px",
              padding: "15px 30px",
              borderRadius: "10px",
              textAlign: "center",
              animation: "gradient-wave 3s linear infinite",
              background: "linear-gradient(270deg, #00ff99, #0066ff, #00ff99)",
              backgroundSize: "400% 400%",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <a
              href="https://transylvaniasummit.com/daytwo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                wordBreak: "break-word",
              }}
            >
              Day Two Panel
            </a>
          </div>

          {/* Logo */}
          <div className="logo">
            <Link legacyBehavior href="/">
              <a>
                <img src="/img/menu/logo.png" alt="Logo" />
              </a>
            </Link>
          </div>

          {/* Sandwich Menu */}
          <div className="trigger" style={{ marginLeft: "auto" }}>
            <div
              className="trigger_in"
              onClick={() => setToggle(!toggle)}
              style={{ cursor: "pointer" }}
            >
              <a>
                <img src="/img/menu/menu.png" alt="Menu" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* CSS for Animation */}
      <style jsx>{`
        @keyframes gradient-wave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .neoh_fn_header div[style*="animation"] {
          background-size: 200% 200%;
        }
        .nav_content ul li a {
          font-size: 32px;
          font-weight: bold;
          color: #fff;
          transition: color 0.3s ease;
        }
        .nav_content ul li a:hover {
          color: #00bfff !important;
        }
        @media screen and (max-width: 768px) {
          .neoh_fn_header div[style*="position: absolute"] {
            width: 95%;
            max-width: 300px;
            font-size: 16px;
          }
        }
      `}</style>
    </Fragment>
  );
};

const linkStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#fff",
};

export default Header;

