// import React from "react";
// import {
//   BrowserView,
//   TabletView,
//   MobileView,
//   isBrowser,
//   isMobile,
//   isSafari,
//   isChrome,
//   isFirefox,
//   isEdge,
//   isAndroid,
//   isIOS,
// } from "react-device-detect";

// const DeviceDetect = () => {
//   return (
//     <>
//       <BrowserView>
//         <h2>데스크톱브라우져!</h2>
//       </BrowserView>
//       <TabletView>
//         <h2>태블릿 브라우져!</h2>
//       </TabletView>
//       <MobileView>
//         <h2>모바일 브라우져!</h2>
//       </MobileView>

//       {/* selectors 사용 방법 */}
//       {isBrowser ? <h2>브라우저</h2> : null}
//       {isMobile ? <h2>모바일</h2> : null}
//       {isSafari ? <h2>사파리</h2> : null}
//       {isChrome ? <h2>크롬</h2> : null}
//       {isFirefox ? <h2>파이어폭스</h2> : null}
//       {isEdge ? <h2>엣지</h2> : null}
//       {isAndroid ? <h2>안드로이드</h2> : null}
//       {isIOS ? <h2>IOS</h2> : null}
//     </>
//   );
// };

// export default DeviceDetect;

import React from "react";
import DeviceDetector from "../components/DeviceDetector2";

function DeviceDetect() {
  return (
    <>
      <DeviceDetector>
        <div className="box">box</div>
      </DeviceDetector>
    </>
  );
}

export default DeviceDetect;
