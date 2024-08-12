import React, { useEffect, useState } from "react";

const DeviceDetector = () => {
  const [deviceType, setDeviceType] = useState("");
  const [osType, setOsType] = useState("");
  const [osVersion, setOsVersion] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|android|touch/.test(userAgent)) {
      setDeviceType("mobile");
    } else if (/tablet/.test(userAgent)) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }

    if (/windows nt/.test(userAgent)) {
      setOsType("windows");
    } else if (/macintosh|mac os x/.test(userAgent)) {
      setOsType("mac");
    } else if (/linux/.test(userAgent)) {
      setOsType("linux");
    } else {
      setOsType("unknown");
    }

    if (/android/.test(userAgent)) {
      setOsVersion("android");
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      setOsVersion("ios");
    }
  }, []);

  return (
    <div>
      <h1>Device Information</h1>
      <p>Device Type: {deviceType}</p>
      <p>OS Type: {osType}</p>
      <p>OS Version: {osVersion}</p>
    </div>
  );
};

export default DeviceDetector;
