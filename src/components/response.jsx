import React from "react";
import { useMediaQuery } from "react-responsive";

const IsMobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1399px)",
  });
  return <>{isMobile ? children : null}</>;
};

const IsPc = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width: 1400px)",
  });
  return <>{isPc ? children : null}</>;
};

export { IsMobile, IsPc };
