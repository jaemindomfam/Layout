import React from "react";
import { Link } from "react-router-dom";
import useDeviceDetector from "../components/DeviceDetector";
import Logo from "../assets/img/dr-Logo.png";
import Search from "../assets/img/search.png";
import Menu from "../assets/img/Menu.svg";

const SwFront = () => {
  const { deviceType, osType, osVersion } = useDeviceDetector();

  return (
    <div
      id="container"
      className={`responsive-layout dreams ${deviceType} ${osType} ${osVersion}`}
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
                <Link to="/">정책</Link>
              </li>
              <li>
                <Link to="/">사업</Link>
              </li>
              <li>
                <Link to="/">정보</Link>
              </li>
              <li>
                <Link to="/">우수사례</Link>
              </li>
            </ul>
          </nav>
          <div className="global-box">
            <div className="searchbar">
              <input type="text" placeholder="검색어를 입력해 주세요." />
              <button>
                <img src={Search} alt="" />
              </button>
            </div>
            <button>
              <img src={Menu} alt="" />
            </button>
          </div>
        </div>
      </header>

      <main id="contents" className="contents">
        <div className="key-visual-wrap">
          <div className="key-visual-inner">
            <h2>
              소개
              <span>
                DREAMS <em>I</em>ntroduction
              </span>
            </h2>
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
          <div className="footer-link">
            <ul>
              <li>
                <Link to="/">이용약관</Link>
              </li>
              <li>
                <Link to="/">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="/">저작권정책</Link>
              </li>
              <li>
                <Link to="/">이메일무단수집거부</Link>
              </li>
            </ul>
            <div className="familly-site">
              <select name="" id="">
                <option value="">Family Site</option>
              </select>
            </div>
          </div>
          <div className="footer-info">
            <div className="footer-logo">
              <img src={Logo} alt="dreams 하단 로고" />
            </div>
            <address className="footer-address">
              <b>지역SW산업발전협의회</b>
              <p>
                주소 : 서울특별시 마포구 월드컵북로 396, 14층 상암동 누리꿈
                스퀘어 연구개발타워 사업자 등록번호 : 232-82-00092
              </p>
              <p className="copy">Copyright © 2023 RSW All Right Reserved.</p>
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SwFront;
