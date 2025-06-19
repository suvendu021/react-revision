const heading = React.createElement(
  "h1",
  {
    id: "id_react_heading",
    color: "rgb(55, 212, 20)",
  },
  "hello i am a react heading element"
);

const root = ReactDOM.createRoot(
  document.getElementById("root_id_from_indexhtml")
);
root.render(heading);
