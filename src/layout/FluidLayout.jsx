import React from "react";
import { Link } from "react-router-dom";
const FluidLayout = () => {
  return (
    <>
      <div id="skipnav">
        <Link to="#contents">본문 바로가기</Link>
        <Link to="#firstmenu">대메뉴 바로가기</Link>
      </div>
      {/* fluid-layout : .fluid 클래스 추가 */}
      <div className="wrap default fluid-layout">
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
            <div className="container">fix Layout</div>
          </section>
          <section>
            <div className="container fluid">fluid Layout</div>
          </section>
        </main>
        <footer className="footer">
          <div className="container">
            FOOTER
            <address>주소</address>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FluidLayout;
