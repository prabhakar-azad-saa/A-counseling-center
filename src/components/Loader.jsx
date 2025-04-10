// import React from "react";
// import { Spin } from "antd";
// import { color } from "framer-motion";

// const Loader = ({ isLoading }) => {
//   if (!isLoading) return null;

//   return (
//     <div style={styles.backdrop}>
//       <Spin size="large" />
//     </div>
//   );
// };

// const styles = {
//   backdrop: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: "rgba(0, 0, 0, 0.3)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 9999,
//   },
// };

// export default Loader;

import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  const customIcon = (
    <LoadingOutlined style={{ fontSize: 48, color: "#52c41a" }} spin />
  );

  return (
    <div style={styles.backdrop}>
      <Spin indicator={customIcon} />
    </div>
  );
};

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
};

export default Loader;
