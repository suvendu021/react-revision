//core react things for use react in our app by cdn links

/// const heading = React.createElement(
//   "h1",
//   {
//     id: "id_react_heading",
//     color: "rgb(55, 212, 20)",
//   },
//   "hello i am a react heading element"
// );

// const root = ReactDOM.createRoot(
//   document.getElementById("root_id_from_indexhtml")
// );
// root.render(heading);
//--------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return (
    <>
      <h1>hii i'm jsx🥲{300 + 800}</h1>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root_id_from_indexhtml")
);
root.render(<HeadingComponent />);
