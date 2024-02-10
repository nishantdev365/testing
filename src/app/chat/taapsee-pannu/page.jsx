// pages/taapsee-chat-page.js
'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReactGA from "react-ga4";

const TaapseeChatPage = () => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Your MemberSpace script
    let MemberSpace = window.MemberSpace || { "subdomain": "celebfie" };
    (function (d) {
      var s = d.createElement("script");
      s.src = "https://cdn.memberspace.com/scripts/widgets.js";
      var e = d.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(s, e);
    })(document);

    // Cleanup function
    return () => {
      // Any cleanup needed
    };
  }, []);

  useEffect(() => {
    // Your Machaao script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.machaao.com/prod/web/js/embed_celebfie.js";
    script.async = true;
    script.setAttribute("mode", "embed");
    script.setAttribute("isolate", "true");
    script.setAttribute("theme_color", "#ec4036");
    script.setAttribute("header", "off");
    script.setAttribute("accentcolor", "#080C19");
    script.setAttribute("textcolor", "white");
    script.setAttribute("id", "webchat");
    script.setAttribute(
      "mkey",
      "YmM0ODlhYTAtYWVjMS0xMWVlLThjMWQtMjM2MzE0Nzc1MTZh"
    );
    script.setAttribute("style", "min-height: 480px");
    script.setAttribute("chathost", "https://messengerx.io");
    script.setAttribute("botname", "mx-tp-ai");

    const mcontextElement = document.getElementById("mcontext");

    while (mcontextElement.firstChild) {
      mcontextElement.removeChild(mcontextElement.firstChild);
    }

    if (mcontextElement) {
      mcontextElement.appendChild(script);

      return () => {
        if (!mcontextElement.contains(script)) {
          window.location.reload();
        }
      };
    } else {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    // Redirect if not a member
    if (window.Memberspace && !window.Memberspace.isMember()) {
      router.push("/?msopen=/member/sign_in");
    }
  }, [router]);

  useEffect(() => {
    // Resize handling
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardClick = () => {
    ReactGA.event({
      category: 'ChatPage',
      action: 'Click',
      label: 'BackButton',
    });

    router.back("/");
  };

  const handleChatroomInteraction = () => {
    ReactGA.event({
      category: 'ChatPage',
      action: 'Interaction',
      label: 'ChatpageInteraction',
    });
  };

  return (
    <>
      {/* Your Helmet code can be placed here if needed */}

      <div className="profile_header">
        <div className="back_btn" onClick={handleCardClick}></div>
        <div className="rectangle-group" id="profileName">
          <div className="rectangle-icon" alt="profile-pic"></div>
          <div className="taapsee-pannu-parent">
            <div className="taapsee-pannu">Taapsee Pannu</div>
            <div className="filmmaker-and-television2">
              Indian actress and producer
            </div>
          </div>
        </div>
      </div>

      <div className="chatroom_area">
        <div
          className="main_chatroom_section"
          id="mcontext"
          style={{ width: "100%", height: "100%" }}
          onClick={handleChatroomInteraction}
        ></div>
      </div>
    </>
  );
};

export default TaapseeChatPage;


