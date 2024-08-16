// App.jsx
// import React from "react";
// import { IsMobile, IsPc } from "../components/response";

// function App() {
//   return (
//     <>
//       <IsMobile>
//         <div className="mobile_container">Mobile!</div>
//       </IsMobile>

//       <IsPc>
//         <div className="pc_container">PC!</div>
//       </IsPc>
//     </>
//   );
// }
// export default App;

import React from "react";
import ResponsiveComponent from "../components/response";

function App() {
  return (
    <>
      <ResponsiveComponent
        pcClassName="pc-class"
        mobileClassName="mobile-class"
      >
        <div className="box">box</div>
      </ResponsiveComponent>
    </>
  );
}

export default App;
