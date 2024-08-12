import React from "react";
import { Link } from "react-router-dom";
const ResponsiveLayout = () => {
  return (
    <>
      <div id="skipNav">
        <Link to="#contents">본문 바로가기</Link>
      </div>
      {/* responsive-layout */}
      <div className="wrap default responsive-layout">
        <header id="header" className="header">
          HEADER
        </header>
        <main id="contents" className="contents">
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
        </main>
        <footer id="footer" className="footer">
          FOOTER
        </footer>
      </div>
    </>
  );
};

export default ResponsiveLayout;
