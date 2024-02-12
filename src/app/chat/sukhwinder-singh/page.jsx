"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SukhwinderChatPage = () => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

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
    if (window.Memberspace && !window.Memberspace.isMember()) {
      router.push("/?msopen=/member/sign_in");
    }
  }, [router]);

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

  const handleCardClick = () => {
    router.push("/");
  };

  return (
    <>
      <div className="profile_header">
        <div className="back_btn" onClick={handleCardClick}></div>

        <div className="rectangle-group" id="profileName">
          <div className="sukhwinder_pic" alt="profile-pic"></div>
          <div className="taapsee-pannu-parent">
            <div className="taapsee-pannu">Sukhwinder Singh</div>
            <div className="filmmaker-and-television2">
              Singer, Rockstar Performer
            </div>
          </div>
        </div>
      </div>

      <div className="chatroom_area">
        <div
          className="main_chatroom_section"
          id="mcontext"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </>
  );
};

export default SukhwinderChatPage;
