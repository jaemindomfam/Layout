import React from "react";
const FluidLayout = () => {
  return (
    <>
      {/* fluid-layout : .fluid 클래스 추가 */}
      <div className="wrap default fluid-layout">
        <header className="header">HEADER</header>
        <div className="contents fluid">Fluid Layout</div>
        <footer className="footer">FOOTER</footer>
      </div>
    </>
  );
};

export default FluidLayout;
