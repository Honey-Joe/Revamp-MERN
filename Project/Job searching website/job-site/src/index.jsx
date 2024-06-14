import "./index.css";
import ReactDOM from "react-dom/client";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";
import Comment from "./components/Comment/Comment";


const root = ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = () => {


 



  return (
    <>
      <Header></Header>
      <Counter></Counter>
      <Body></Body>
      <Comment></Comment>
      <Footer></Footer>
    </>
  );
};

root.render(<AppLayout />);
