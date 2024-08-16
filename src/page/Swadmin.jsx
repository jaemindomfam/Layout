import React from "react";
import { Link } from "react-router-dom";
import useDeviceDetector from "../components/DeviceDetector";
import Logo from "../assets/img/sw-logo.png";
import Member from "../assets/img/Member.png";
import Logout from "../assets/img/Logout.png";

const SwFront = () => {
  const { deviceType, osType, osVersion } = useDeviceDetector();

  return (
    <div className={`fluid-layout swhub ${deviceType} ${osType} ${osVersion}`}>
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <Link to="/">
              <img src={Logo} alt="SW미래채움 로고" />
            </Link>
          </h1>
          <div className="global-box">
            <span className="user-name">domfam님</span>
            <img src={Member} alt="멤버 이미지" className="user-icon" />
            <button>
              <img src={Logout} alt="" />
            </button>
          </div>
        </div>
      </header>

      <aside className="aside">
        <nav className="gnb">
          <ul>
            <li>
              <Link to="/">소개 관리</Link>
            </li>
            <li>
              <Link to="/">교육안내 관리</Link>
            </li>
            <li>
              <Link to="/">행사안내 관리</Link>
            </li>
            <li>
              <Link to="/">공지사항 관리</Link>
            </li>
            <li>
              <Link to="/">홍보자료 관리</Link>
            </li>
            <li>
              <Link to="/">문의사항</Link>
            </li>
            <li>
              <Link to="/">계정 관리</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
            <li>
              <Link to="/">스크롤 테스트</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main id="contents">
        <h2>센터 소개</h2>
        <section>
          <div className="container">
            <h3>
              제목 입력 <span>*</span>
            </h3>
            <div className="test">가로 스크롤 테스트</div>
            <div className="test2">세로 스크롤 테스트</div>
            <div className="test2">세로 스크롤 테스트</div>
            <div className="test2">세로 스크롤 테스트</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SwFront;
