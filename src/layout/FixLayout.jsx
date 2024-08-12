import React from "react";
import { Link } from "react-router-dom";

const FixLayout = () => {
  return (
    <>
      <div id="skipNav">
        <Link to="#contents">본문 바로가기</Link>
        {/* <a href="#contents">본문 바로가기</a> */}
      </div>
      {/* fix-layout */}
      <div className="wrap default fix-layout">
        <header id="header" className="header">
          <div className="header-inner">
            <h1>logo</h1>
            <nav>
              <ul>
                <li>
                  <Link to="#">menu1</Link>
                </li>
                <li>
                  <Link to="#">menu1</Link>
                </li>
                <li>
                  <Link to="#">menu1</Link>
                </li>
                <li>
                  <Link to="#">menu1</Link>
                </li>
                <li>
                  <Link to="#">menu1</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main id="contents" className="contents">
          Fix Layout
        </main>
        <footer id="footer" className="footer">
          FOOTER
          <address>주소</address>
        </footer>
      </div>
    </>
  );
};

export default FixLayout;
