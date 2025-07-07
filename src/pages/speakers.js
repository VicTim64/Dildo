import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import { getPagination, pagination } from "@/utilits";
import Link from "next/link";
import { useEffect, useState } from "react";
import TeamInfor from "@/data/team_infor.json";
import TeamAdvisor from '@/data/team_advisor.json';

const Team = () => {
  return (
    <Layout pageName={"Speakers"}>
      <PageBanner pageName={"Speakers"} imageURL={"img/hero/head_about_background.png"}/>
      <div className="neoh_fn_teampage">
        <section id="team">
          <div className="container">
            <p className="fn_desc fn_animated_text">
              Interact with decision-makers and
influencers in the Web3 space, including
tech leaders, early adopters, and industry
experts.
            </p>

            {/* Team List Shortcode */}
            <div className="neoh_fn_team">
              <ul className="team_list">
                {TeamInfor.map((item, key) => (
                  <li className="team_item" key={key}>
                    <div className="t_item">
                      <div className="person_info">
                        <div className="img_holder">
                          <img src={`img/team/${item.avatar}`} alt="avatar" />
                        </div>
                        <div className="title_holder">
                          <h3 className="fn_title">{item.name}</h3>
                          <p className="fn_desc">{item.position}</p>
                        </div>
                      </div>

                      <div className="person_social">
                        <ul>
                          {/* Check for social links in the order of priority */}
                          {item.social.twitter && (
                            <li>
                              <a href={item.social.twitter} target="_blank" rel="noopener noreferrer">
                                <img
                                  src="img/team/twitter_white.png"
                                  alt="twitter_link"
                                />
                              </a>
                            </li>
                          )}
                          {item.social.linkedin && !item.social.twitter && (
                            <li>
                              <a href={item.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <img
                                  src="img/team/linkedin_white.png"
                                  alt="linkedin_link"
                                />
                              </a>
                            </li>
                          )}
                            {item.social.facebook && !item.social.linkedin && !item.social.twitter && (
                            <li>
                              <a href={item.social.facebook} target="_blank" rel="noopener noreferrer">
                                <img
                                  src="img/team/facebook_white.png"
                                  alt="facebook_link"
                                />
                              </a>
                            </li>
                          )}
                            
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
 {/*
            <div className="neoh_fn_team">
              <h1 style={{textAlign:"center", margin:"50px"}}>Project Advisors</h1>
              <ul className="team_list">
                {TeamAdvisor.map((item, key) => (
                  <li className="team_item" key={key}>
                    <div className="t_item">
                      <div className="person_info">
                        <div className="img_holder">
                          <img src={`img/team/${item.avatar}`} alt="avatar" />
                        </div>
                        <div className="title_holder">
                          <h3 className="fn_title">{item.name}</h3>
                          <p className="fn_desc">{item.position}</p>
                        </div>
                      </div>

                      <div className="person_social">
                        <ul>*/}
                          {/* Check for social links in the order of priority 
                          {item.social.twitter && (
                            <li>
                              <a href={item.social.twitter} target="_blank" rel="noopener noreferrer">
                                <img
                                  src="img/team/twitter_white.png"
                                  alt="twitter_link"
                                />
                              </a>
                            </li>
                          )}
                          {item.social.linkedin && !item.social.twitter && (
                            <li>
                              <a href={item.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <img
                                  src="img/team/linkedin_white.png"
                                  alt="linkedin_link"
                                />
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
*/}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;
