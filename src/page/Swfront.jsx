import React from "react";
import { Link } from "react-router-dom";
import useDeviceDetector from "../components/DeviceDetector";
import Logo from "../assets/img/sw-logo.png";
import FtLogo from "../assets/img/sw-logo-footer.png";

const SwFront = () => {
  const { deviceType, osType, osVersion } = useDeviceDetector();

  return (
    <>
      <div id="skipNav">
        <Link to="#container">본문 바로가기</Link>
      </div>
      <div
        id="container"
        className={`fix-layout swhub ${deviceType} ${osType} ${osVersion}`}
      >
        <header id="header" className="header">
          <div className="header-inner">
            <h1 className="logo">
              <Link to="/">
                <img src={Logo} alt="SW미래채움 로고" />
              </Link>
            </h1>
            <nav className="gnb">
              <ul>
                <li>
                  <Link to="/">소개</Link>
                </li>
                <li>
                  <Link to="/">교육안내</Link>
                </li>
                <li>
                  <Link to="/">행사안내</Link>
                </li>
                <li>
                  <Link to="/">공지사항</Link>
                </li>
                <li>
                  <Link to="/">홍보자료</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="contents" className="contents">
          <div className="key-visual-wrap">
            <div className="key-visual-inner">
              <h2>교육안내</h2>
            </div>
          </div>

          <section>
            <div className="box-wrap">
              <div className="box box1">box1</div>
              <div className="box box2">box2</div>
              <div className="box box3">box3</div>
              <div className="box box4">box4</div>
              <div className="box box5">box5</div>
              <div className="box box6">box6</div>
              <div className="box box7">box7</div>
              <div className="box box8">box8</div>
              <div className="box box9">box9</div>
              <div className="box box10">box10</div>
            </div>
          </section>
        </main>
        <footer id="footer" className="footer">
          <div className="footer-inner">
            <div className="footer-info">
              <ul>
                <li>
                  <Link to="/">이용약관</Link>
                </li>
                <li>
                  <Link to="/">개인정보처리방침</Link>
                </li>
              </ul>
              <div className="footer-logo">
                <img src={FtLogo} alt="SW미래채움 하단 로고" />
              </div>
            </div>
            <address className="footer-address">
              <p>
                주소 : 서울특별시 마포구 월드컵북로 396, 누리꿈스퀘어
                연구개발타워 14F 지역SW융합비즈마루
              </p>
              <p>COPYRIGHT SW미래채움. ALL RIGHTS RESERVED</p>
            </address>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SwFront;
