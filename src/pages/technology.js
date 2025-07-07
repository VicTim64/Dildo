import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import TeamInfor from "@/data/team_infor.json";
import Link from "next/link";

const technology = () => {
  return (
    <Layout pageName={"Technology"}>
      <PageBanner pageName={"Technology"} imageURL={"img/hero/head_technology_background.png"}/>
      <div className="neoh_fn_MAASpage">
        <section id="information">
          <div className="container">
            {/* Guarantee List */}
            <p className="fn_desc fn_animated_text">
              NeoTech’s cutting-edge digital twins use advanced scanning and AI
              technologies, including vehicle-mounted scanners with
              high-resolution cameras, LiDAR, GPS, GNSS, IMU, and drones for
              large-scale data capture. AI-enhanced processing integrates and
              optimizes data.
            </p>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="neoh_fn_about_item">
              <div className="img_item">
                <img src="img/technology/tech1.png" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Capturing Real Environments</h3>
                </div>
                <div className="desc">
                  <p>
                    At NeoTech, we specialize in bringing the real world into the digital realm 
                    with unmatched precision. Our cutting-edge technology allows us to capture 
                    any real-world object, from buildings to landscapes, using a combination of 
                    high-resolution cameras, LiDAR, GPS, and drones. By meticulously scanning every detail, 
                    we create highly accurate digital representations of physical environments, 
                    preserving every nuance and texture. Whether it’s for urban planning, historical preservation, 
                    or immersive virtual experiences, NeoTech’s technology ensures that no detail is left behind.
                  </p>
                </div>
              </div>
            </div>
            <div className="neoh_fn_about_item reverse">
              <div className="img_item">
                <img src="img/technology/tech2.png" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Converting data into Point-Cloud System</h3>
                </div>
                <div className="desc">
                  <p>
                  Once we’ve captured the environment, our advanced processing 
                  converts this data into a detailed point cloud model. 
                  This model, made up of millions of data points, provides a precise, 
                  three-dimensional representation of the scanned asset. Geo-engineers 
                  and public administrators can use these point clouds to measure dimensions 
                  like height, width, and volume with incredible accuracy. 
                  The detailed analysis helps city planners maintain existing structures,
                  plan renovations, or prepare for construction projects. NeoTech’s point clouds 
                  offer a reliable foundation for any project requiring exact measurements and detailed 
                  information about real-world structures.
                  </p>
                </div>
              </div>
            </div>
            <div className="neoh_fn_about_item">
              <div className="img_item">
                <img src="img/technology/tech3.png" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">
                    3D ready to Use Asset
                  </h3>
                </div>
                <div className="desc">
                  <p>
                    After processing the point cloud data, NeoTech can generate fully-realized 3D models of the scanned assets. 
                    These models are not just digital copies, they are versatile tools ready for various applications. 
                    Within our NeoTech ecosystem, users can integrate these 3D assets to create immersive virtual experiences, 
                    whether in video games, films, or virtual reality environments. Moreover, clients can customize these assets 
                    to fit their specific needs or request custom scans for exclusive use in their projects. Our technology empowers 
                    creators to bring their visions to life, with realistic and adaptable 3D models ready for any creative endeavor.
                  </p>
                </div>
              </div>
            </div>
            <div className="neoh_fn_about_item reverse">
              <div className="img_item">
                <img src="img/technology/tech4.png" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">AI-Enhanced Processing</h3>
                </div>
                <div className="desc">
                  <p>
                    Neotech leverages AI to integrate data from diverse sources
                    including cameras, LiDAR, GPS, GNSS, and IMU. This
                    integration ensures precise alignment and consistency across
                    datasets.
                  </p>
                  <p>
                    AI algorithms play a critical role in detecting and
                    correcting anomalies, enhancing the accuracy of digital
                    twins and point clouds. Furthermore, AI-driven optimization
                    tailors these digital twins for various applications, from
                    immersive VR experiences to practical urban planning tools.
                  </p>
                  <p>
                    This sophisticated integration of scanning and AI
                    technologies ensures unparalleled accuracy and detail,
                    offering businesses a powerful tool for virtual environment
                    creation and cost-efficient operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="neoh_fn_about_item">
              <div className="img_item">
                <img src="img/technology/tech5.png" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Enhance your 3D Experience </h3>
                </div>
                <div className="desc">
                  <p>
                    With Neotech, the possibilities are limitless. Our advanced
                    technologies transform real-world environments into
                    high-fidelity 3D assets that seamlessly integrate into any
                    virtual setting or application. Whether for gaming, virtual
                    tours, commercials, or innovative projects, Neotech empowers
                    you to unleash your creativity and bring your ideas to life
                    in the digital realm. Your imagination is the only limit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default technology;
