import React from "react";
import { Link } from "react-router-dom";

const FixLayout = () => {
  return (
    <>
      <div id="skipnav">
        <Link to="#contents">본문 바로가기</Link>
        <Link to="#firstmenu">대메뉴 바로가기</Link>
      </div>
      {/* fix-layout */}
      <div className="wrap default fix-layout">
        <header className="header">
          <div className="container">
            <h1>logo</h1>
            <nav>
              <ul>
                <li>
                  <Link to="#" id="firstmenu">
                    menu1
                  </Link>
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
        <main id="contents">
          <section>
            <div className="container">Fix Layout</div>
          </section>
          <section>
            <div className="container">Fix Layout</div>
          </section>
        </main>
        <footer id="footer" className="footer">
          <div className="container">
            FOOTER
            <address>주소</address>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FixLayout;
