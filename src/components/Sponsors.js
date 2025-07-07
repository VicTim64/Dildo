import sponsors_infor from "@/data/sponsors.json";

const Sponsors = () => {
  // Define styles for the logo container and the image itself
  const logoContainerStyles = {
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  };

  const logoStyles = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    display: "block",
  };

  return (
    <section id="investor">
      <div className="container">
        <div className="neoh_fn_title">
          <h3 className="fn_title" style={{ marginTop: "100px" }}>
            Main Sponsors
          </h3>
        </div>

        <div className="neoh_fn_investor">
          <ul>
            {sponsors_infor.map((sponsor, key) => (
              <li key={key}>
                <div className="item">
                  <div style={logoContainerStyles}>
                    <img
                      src={`img/landing/${sponsor.logo}`}
                      alt={sponsor.title}
                      style={logoStyles}
                    />
                  </div>
                  <a href={sponsor.url} className="full_link" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
