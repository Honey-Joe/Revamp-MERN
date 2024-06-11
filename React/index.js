const root = ReactDOM.createRoot(document.getElementById("div"));
const para = React.createElement("div", null, [
  React.createElement("p", null, "hello"),
]);
root.render(para);
