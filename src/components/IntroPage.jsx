import React, { useState, useEffect } from "react";
import { TextCase, DesignContainer, ChatBox } from "./IntroPage.style";
import { useRecoilState } from "recoil";
import { NowPage } from "../recoil/atoms";

const IntroPage = () => {
  const [nowPage, setNowPage] = useRecoilState(NowPage);
  const [tmpSearch, setTmpSearch] = useState("");
  const [noindex, setNoindex] = useState(false);
  const [disableClick, setDisableClick] = useState(true);

  const goProfile = () => {
    if (disableClick) return;
    setNowPage("aboutme");
  };
  const goOnsikgo = () => {
    if (disableClick) return;
    setNowPage("onsikgo");
  };
  const goMlbti = () => {
    if (disableClick) return;
    setNowPage("mlbti");
  };
  const goDstation = () => {
    if (disableClick) return;
    setNowPage("dstation");
  };
  const goContact = () => {
    if (disableClick) return;
    setNowPage("contact");
  };

  const search = (e) => {
    e.preventDefault();
    let index = e.target.value.toLowerCase();
    setTmpSearch(index);
  };

  const goSearch = (e) => {
    if (e.keyCode === 13) {
      if (tmpSearch === "intro") {
        setNowPage("intro");
      } else if (tmpSearch === "aboutme") {
        setNowPage("aboutme");
      } else if (tmpSearch === "onsikgo") {
        setNowPage("onsikgo");
      } else if (tmpSearch === "mlbti") {
        setNowPage("mlbti");
      } else if (tmpSearch === "dstation") {
        setNowPage("dstation");
      } else if (tmpSearch === "contact") {
        setNowPage("contact");
      } else {
        setNoindex(true);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisableClick(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <TextCase>
        <div className="int1">Hello 🖐</div>
        <div className="int2">Im FrontEnd Devleoper, Donggeun Lee 🤗</div>
        <div className="int3">I'm trying for a better UI / UX 💻</div>
        <div className="int4">If you want to know more about me, </div>
        <div className="int5">Click this folder or Text Title 👇👇</div>
      </TextCase>
      <DesignContainer>
        <div className="itemCase" onClick={goProfile}>
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + "/assets/skills/profile.png"}
              alt=""
            />
          </div>
          <h5>About me</h5>
        </div>
        <div className="itemCase" onClick={goOnsikgo}>
          <div className="item onsikgo">
            <img
              src={process.env.PUBLIC_URL + "/assets/skills/onsikgo.png"}
              alt=""
            />
          </div>
          <h5>Onsikgo Project</h5>
        </div>
        <div className="itemCase" onClick={goMlbti}>
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + "/assets/skills/mlbti.png"}
              alt=""
            />
          </div>
          <h5>MLBTI Project</h5>
        </div>
        <div className="itemCase" onClick={goDstation}>
          <div className="item dstation">
            <img
              src={process.env.PUBLIC_URL + "/assets/skills/d-station.png"}
              alt=""
            />
          </div>
          <h5>D-station Project</h5>
        </div>
        <div className="itemCase" onClick={goContact}>
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + "/assets/skills/mail.png"}
              alt=""
            />
          </div>
          <h5>Contact me</h5>
        </div>
      </DesignContainer>

      <ChatBox>
        <div className="hbox">
          <h5 className="firsth">DonggeunLee : </h5>
          <h5 className="sech"> ~/portfoilo/</h5>
        </div>
        <label htmlFor="navi">
          <input
            type="text"
            id="navi"
            placeholder="Aboutme"
            autoFocus
            onChange={(e) => search(e)}
            onKeyUp={(e) => goSearch(e)}
          />
        </label>
        {noindex ? (
          <div className="error">
            <h4>Please search with the keyword below</h4>
            <h5>intro, aboutme, onsikgo, mlbti, dstation, contact</h5>
          </div>
        ) : null}
      </ChatBox>
    </>
  );
};
export default IntroPage;
