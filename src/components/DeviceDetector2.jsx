import React from "react";
import {
  isBrowser,
  isMobile,
  isSafari,
  isChrome,
  isFirefox,
  isEdge,
  isAndroid,
  isIOS,
} from "react-device-detect";

const ResponsiveComponent = ({ children }) => {
  let deviceClass = "";
  let browserClass = "";
  let osClass = "";

  if (isBrowser) {
    deviceClass = "browser";
  } else if (isMobile) {
    deviceClass = "mobile";
  }

  if (isSafari) {
    browserClass = "safari";
  } else if (isChrome) {
    browserClass = "chrome";
  } else if (isFirefox) {
    browserClass = "firefox";
  } else if (isEdge) {
    browserClass = "edge";
  }

  if (isAndroid) {
    osClass = "android";
  } else if (isIOS) {
    osClass = "ios";
  }

  const className = `${deviceClass} ${browserClass} ${osClass}`.trim();

  return <div className={className}>{children}</div>;
};

export default ResponsiveComponent;
