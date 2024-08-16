// import React from "react";
// import { useMediaQuery } from "react-responsive";

// const IsMobile = ({ children }) => {
//   const isMobile = useMediaQuery({
//     query: "(max-width: 1399px)",
//   });
//   return <>{isMobile ? children : null}</>;
// };

// const IsPc = ({ children }) => {
//   const isPc = useMediaQuery({
//     query: "(min-width: 1400px)",
//   });
//   return <>{isPc ? children : null}</>;
// };

// export { IsMobile, IsPc };

import React from "react";
import { useMediaQuery } from "react-responsive";

const ResponsiveComponent = ({ children, pcClassName, mobileClassName }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1399px)",
  });

  const isPc = useMediaQuery({
    query: "(min-width: 1400px)",
  });

  const className = isPc ? pcClassName : isMobile ? mobileClassName : "";

  return <div className={className}>{children}</div>;
};

export default ResponsiveComponent;
