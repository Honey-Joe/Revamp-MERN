import "./index.css";
import ReactDOM from "react-dom/client";
// import { useState } from "react";
// import Header from "./components/Header/Header";
// import Body from "./components/Body/Body";
// import Footer from "./components/Footer/Footer";
// import Counter from "./components/Counter/Counter";
// import Comment from "./components/Comment/Comment";
// import Button from "./components/Button/Button";
import Login from "./components/Login/Login";



// const dummydata=[
//   {
//     name: "ram"
//   },
//   {
//     name: "sam"
//   },
//   {
//     name: "tea" 
//   }
// ]


const AppLayout= () => {


 

  

  // const [data, setData] = useState(dummydata)
  // const [search , setSearch] = useState()
  return (
    

    <>
      {/* <Header></Header>
      <Counter></Counter>
      <Body></Body>
      <Comment></Comment>
      <Footer></Footer> */}

      {/* <Button></Button> */}

      {/* <div>
        <input type="text" name="" id="" onChange={(ee)=>{
          setSearch(ee.target.value)

        }} className="border border-black"/>

        <button onClick={()=>{

          const newfilter = data.filter((e)=>{
           return e.name === search
          })
          setData(newfilter)
        }}>
             search
        </button>

        {
        data.map((e,index)=>{
          return(
             <>

             <div key={index}>
              <p>{e.name}</p>
             </div>
              
             </>
          )
        })
      }
       
      </div> */}

      <Login></Login>

      
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
