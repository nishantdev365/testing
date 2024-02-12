"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook_icon.png";
import Instagram from "../assets/instagram_icon.png";
import Group from "../assets/group.png";
// import Play from "../assets/play.png";
import ReactPlayer from "react-player";
import ReactModal from "react-modal";
import Navbar from "./components/navbar.jsx";

import ReactGA from "react-ga4";

const Home = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, []);

  useEffect(() => {
    let MemberSpace = window.MemberSpace || { subdomain: "celebfie" };
    (function (d) {
      var s = d.createElement("script");
      s.src = "https://cdn.memberspace.com/scripts/widgets.js";
      var e = d.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(s, e);
    })(document);

    return () => {};
  }, []);

  useEffect(() => {
    if (window.Memberspace && !window.Memberspace.isMember()) {
      useRouter.push("/?msopen=/member/sign_in");
    }
  }, []);

  const handleTriggerClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  const ClosePopup = () => {
    setPopupOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlTaapseePage = () => {
    ReactGA.event({
      category: "CelebrityProfile",
      action: "Click",
      label: "Taapsee Pannu",
    });

    router.push("/chat/taapsee-pannu");
  };

  const handlUrvashiPage = () => {
    ReactGA.event({
      category: "CelebrityProfile",
      action: "Click",
      label: "Urvashi Rautela",
    });

    router.push("/chat/urvashi-rautela");
  };

  // const handlSukhwinderPage = () => {
  //   navigate("/chat/sukhwinder-singh");
  // };

  const handlMalaikaPage = () => {
    router.push("/chat/malaika-arora");
  };

  const handlKaranPage = () => {
    router.push("/chat/karan-johar");
  };

  return (
    <>
      <Navbar />
      <section className="homepage">
        <div className="mobile_banner">
          <div className="banner_play" onClick={openModal}></div>
          {/* {isMobile && ( */}
          <div className="video" onClick={openModal}>
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={true}
              style={{
                content: {
                  top: "25%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "8px",
                  border: "none",
                  padding: "0",
                  width: "95%",
                  maxWidth: "900px",
                  maxHeight: "90%",
                },

                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <button onClick={openModal} className="close_modal_btn">
                Close
              </button>

              <ReactPlayer
                url="https://res.cloudinary.com/dzhl8bgd9/video/upload/v1707489924/video_lnrrae.mp4"
                controls={true}
                width="100%"
                height="100%"
              />
            </ReactModal>
            {/* <Image className="banner_play" src={Play} alt="play" /> */}
          </div>
          {/* )} */}
        </div>

        {isPopupOpen && (
          <div className="coming_soon_popup open">
            <div className="coming_soon_popup_inner">
              <Image src={Group} alt="group" />
              <div className="coming_soon_popup_text">
                <h1 className="coming_soon_heading">Coming Soon!</h1>
                <p className="coming_soon_para">
                  For you to interact not just with this celebrity but with
                  their AI-driven characters. This immersive experience will
                  transform conversations into memorable engagement.
                </p>
              </div>
              <button
                className="comming_soon_close_btn"
                type="button"
                onClick={ClosePopup}
              >
                Close
              </button>
            </div>
            <div className="close_popup" onClick={ClosePopup}></div>
          </div>
        )}

        <div className="profile_section_cards">
          <div className="Explore_Bollywood">
            Explore <span>Bollywood Artist</span>
          </div>
          <div className="explore_bollywood_section">
            <div className="profile_cards">
              <div
                className="profile taapsee_Pannu_profile"
                onClick={handlTaapseePage}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Taapsee Pannu</b>
                  <br />
                  <p className="bottom_text">Indian actress and producer</p>
                </div>
                <p className="start">Start Chat</p>
                {/* <p className="members_only">
                  {" "}
                  <span className="members_span">(</span> Members Only{" "}
                  <span className="members_span">)</span>{" "}
                </p> */}
              </div>

              <div
                className="profile urvashi_Rautela_profile"
                onClick={handlUrvashiPage}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Urvashi Rautela</b>
                  <br />
                  <p className="bottom_text">Bollywood actress, ace dancer</p>
                </div>
                <p className="start">Start Chat</p>
                {/* <p className="members_only">
                  {" "}
                  <span className="members_span">(</span> Members Only{" "}
                  <span className="members_span">)</span>{" "}
                </p> */}
              </div>

              <div
                className="profile sukhwinder_Singh_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Sukhwinder Singh</b>
                  <br />
                  <p className="bottom_text">Singer, Rockstar Performer</p>
                </div>
                <p className="start">Start Chat</p>
                {/* <p className="members_only">
                  {" "}
                  <span className="members_span">(</span> Members Only{" "}
                  <span className="members_span">)</span>{" "}
                </p> */}
              </div>

              <div
                className="profile malaika_Arora_profile"
                onClick={handlMalaikaPage}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Malaika Arora</b>
                  <br />
                  <p className="bottom_text">
                    Bollywood actress, global influencer
                  </p>
                </div>
                <p className="start">Start Chat</p>
                {/* <p className="members_only">
                  {" "}
                  <span className="members_span">(</span> Members Only{" "}
                  <span className="members_span">)</span>{" "}
                </p> */}
              </div>

              <div
                className="profile karan_Johar_profile"
                onClick={handlKaranPage}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Karan Johar</b>
                  <br />
                  <p className="bottom_text">Producer, Director and TV host</p>
                </div>
                <p className="start">Start Chat</p>
                {/* <p className="members_only">
                  {" "}
                  <span className="members_span">(</span> Members Only{" "}
                  <span className="members_span">)</span>{" "}
                </p> */}
              </div>
            </div>
          </div>

          <div className="Explore_Influencers">
            Explore <span>Influencers</span>
          </div>

          <div className="explore_influencers_section">
            <div className="profile_cards">
              <div
                className="profile agnijita_Banerjee_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Agnijita Banerjee</b>
                  <br />
                  <p className="bottom_text">
                    fashion influencer, and social media influencer
                  </p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile hema_Adhikari_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Hema Adhikari</b>
                  <br />
                  <p className="bottom_text">
                    fashion influencer, and social media influencer
                  </p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile rugees_Vini_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Rugees Vini</b>
                  <br />
                  <p className="bottom_text">
                    fashion influencer, and social media influencer
                  </p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile shalini_Chopra_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Shalini Chopra</b>
                  <br />
                  <p className="bottom_text">
                    fashion influencer, and social media influencer
                  </p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile nilam_Parmar_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">SNilam Parmar</b>
                  <br />
                  <p className="bottom_text">
                    fashion influencer, and social media influencer
                  </p>
                </div>
                <p className="start">Start Chat</p>
              </div>
            </div>
          </div>

          <div className="Explore_Sport_Influencers">
            Explore <span>Sport Personalities</span>
          </div>

          <div
            className="explore_sport_influencers_section"
            onClick={handleTriggerClick}
          >
            <div className="profile_cards">
              <div className="profile virat_Kohli_profile">
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Virat Kohli</b>
                  <br />
                  <p className="bottom_text">International physique Athlete</p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile dhoni_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Dhoni</b>
                  <br />
                  <p className="bottom_text">International physique Athlete</p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile geeta_Phogat_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Geeta Phogat</b>
                  <br />
                  <p className="bottom_text">
                    Geeta Phogat is a freestyle wrestler
                  </p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile rani_Rampal_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Rani Rampal</b>
                  <br />
                  <p className="bottom_text">Indian field hockey player</p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile guru_Mann_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Guru Mann</b>
                  <br />
                  <p className="bottom_text">
                    Fitness Trainer & Fitness Celebrity
                  </p>
                </div>
                <p className="start">Start Chat</p>
              </div>
            </div>
          </div>
        </div>

        <div className="how_to_use_section">
          <div className="theory_how_to_use">
            <b className="how-to-use-container">
              <p className="ai-chat">
                Welcome to Celebfie 3.0 <br />
                <span className="how-to-use">
                  Your Gateway to Unparalleled Celeb connect!
                </span>
              </p>
            </b>

            <div className="lorem_ipsum_dolor">
              Engage in meaningful and fascinating conversations with your
              favorite film stars, musicians, athletes, and influencers on our
              Conversational AI platform. Our celebrities have crafted their AI
              counterparts, allowing fans and brands to connect on a whole new
              level. Whether you seek knowledge, guidance, or just pure
              entertainment, Celebfie 3.0 brings you closer to the personalities
              you adore. Brands can seize the opportunity to collaborate with
              celebrities for impactful engagements. Elevate your interactions,
              learn, and have fun – Celebfie 3.0 is where authentic connections
              come to life!
              <br />
              Our platform operates seamlessly, offering a user-friendly
              experience for fans and brands alike. Upon entering Celebfie 3.0,
              users can explore a diverse array of AI versions of their favorite
              celebrities. Engaging in conversations is as simple as selecting a
              celebrity AI and initiating a chat. Through advanced natural
              language processing, these AI counterparts emulate the
              personalities of the real celebrities, ensuring a genuine and
              immersive interaction. Fans can inquire, share, and enjoy
              personalized responses, while brands can navigate an efficient
              collaboration request process. Celebfie 3.0 opens the door to a
              novel form of connection, where the magic of technology converges
              with the charisma of your beloved stars.
            </div>
          </div>
          <div className="video_show">
            {/* <div className="play_btn"> */}
            {/* <Image src={Play} className="play_btn_icon" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
              >
                <circle opacity="0.51" cx="55" cy="55" r="55" fill="black" />
              </svg> */}

            <ReactPlayer
              url="https://res.cloudinary.com/dzhl8bgd9/video/upload/v1707489924/video_lnrrae.mp4"
              controls={true}
              width="100%"
              height="100%"
              light={true}
            />
            {/* </div> */}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer_left">
          <Image className="footer_logo" alt="" src={Logo} />
          <div className="lorem-ipsum-dolor1">
            Celebfie is a platform where you can chat with your favorite
            celebrities and get to know them better.
          </div>
          <div className="social_icons">
            <a
              href="https://www.facebook.com/celebfieapp?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="Facebook_icon"
                alt="facebook-icon"
                src={Facebook}
              />
            </a>

            <a
              href="https://www.instagram.com/celebfieapp/?igsh=bXo5MWtqYzZ6dHc1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="instagram_icon"
                alt="instagram-icon"
                src={Instagram}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
