import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home-wrap">
        <div className="link-box">
          <p>Layout</p>
          <ul>
            <li>
              <Link to="/FixLayout" target="_blank">
                FixLayout
              </Link>
            </li>
            <li>
              <Link to="/FluidLayout" target="_blank">
                FluidLayout
              </Link>
            </li>
            <li>
              <Link to="/ResponsiveLayout" target="_blank">
                ResponsiveLayout
              </Link>
            </li>
            <li>
              <Link to="/ResponsiveLayout2" target="_blank">
                ResponsiveLayout2
              </Link>
            </li>
            <li>
              <Link to="/AdaptiveLayout" target="_blank">
                AdaptiveLayout
              </Link>
            </li>
          </ul>
        </div>
        <div className="link-box">
          <p>Sample Pages</p>
          <ul>
            <li>
              <Link to="/Swfront" target="_blank">
                SW HUB Front
                <p>fix layout(1400px)</p>
              </Link>
            </li>
            <li>
              <Link to="/Swadmin" target="_blank">
                SW HUB Admin
                <p>Fluid containers</p>
              </Link>
            </li>
            <li>
              <Link to="/Dreamsfront" target="_blank">
                DREAMS Front
                <p>Adabtive PC 1400 + Responsive Mobile</p>
              </Link>
            </li>
            <li>
              <Link to="/Swadmin" target="_blank">
                DREAMS Admin
                <p>Fluid containers</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
