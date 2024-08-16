import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdaptiveLayout = () => {
  const [deviceType, setDeviceType] = useState("");
  const [osType, setOsType] = useState("");
  const [osVersion, setOsVersion] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const screenWidth = window.innerWidth;

    // 기종 구분(데스크톱, 태블릿, 모바일)
    if (screenWidth <= 767) {
      setDeviceType("mobile");
    } else if (screenWidth >= 768 && screenWidth <= 1024) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }

    // if (/mobile|android|touch/.test(userAgent)) {
    //   setDeviceType("mobile");
    // } else if (/tablet/.test(userAgent)) {
    //   setDeviceType("tablet");
    // } else {
    //   setDeviceType("desktop");
    // }

    // 운영체제 구분(윈도우, 맥, 리눅스, 기타)
    if (/windows nt/.test(userAgent)) {
      setOsType("windows");
    } else if (/macintosh|mac os x/.test(userAgent)) {
      setOsType("mac");
    } else if (/linux/.test(userAgent)) {
      setOsType("linux");
    } else {
      setOsType("unknown");
    }
    // 운영체제 구분(안드로이드, ios)
    if (/android/.test(userAgent)) {
      setOsVersion("android");
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      setOsVersion("ios");
    }
  }, []);

  return (
    <>
      <div
        className={`wrap default adaptive-layout ${deviceType} ${osType} ${osVersion}`}
      >
        <header className="header">
          <div className="container">
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
        <main id="contents">
          <section>
            <div className="container">
              <div className="typecheck-box">
                <p>Device Type : {deviceType}</p>
                <p>Operating System : {osType}</p>
                <p>OS Version : {osVersion}</p>
              </div>
            </div>
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

export default AdaptiveLayout;
