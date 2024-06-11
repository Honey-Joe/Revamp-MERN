import "./index.css";
import ReactDOM from "react-dom/client";
import { v4 as uuidv4 } from "uuid";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return <p>Header componet</p>;
};

const Footer = () => {
  return <p>Footer Component</p>;
};
const Card = (props) => {
  return (
    <>
      <div className=" border rounded-3xl shadow-lg p-5">
        <img
          src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/64181631284a60412bd7feb8/logo.jpg?d=1718010333402"
          alt="company logo"
          className="h-10"
        />

        <p>{props.jobTitle} </p>
        <p>{props.companyName}</p>
        <p>{props.tags}</p>
        <p>{props.offer}</p>
        <p>{props.start}</p>
        <p>{props.exp}</p>
      </div>
    </>
  );
};
const JobData = [
  {
    id: "1",
    jobTitle: "Full stack developer",
    companyName: "SH infotech",
    tags: "tags: React .js",
    offer: "Offer : 15 lpa",
    start: " Start Date: 15-06-24",
    exp: " 10 years experience",
  },
  {
    id: "2",
    jobTitle: "Web stack developer ",
    companyName: "SH infotech",
    tags: "tags: React .js",
    offer: "Offer : 15 lpa",
    start: " Start Date: 15-06-24",
    exp: " 10 years experience",
  },
  {
    id: "3",
    jobTitle: "PHP developer ",
    companyName: "SH infotech",
    tags: "tags: React .js",
    offer: "Offer : 15 lpa",
    start: " Start Date: 15-06-24",
    exp: " 10 years experience",
  },
  {
    id: "4",
    jobTitle: "PHP developer ",
    companyName: "SH infotech",
    tags: "tags: React .js",
    offer: "Offer : 15 lpa",
    start: " Start Date: 15-06-24",
    exp: " 10 years experience",
  },
  {
    id:"5",
    jobTitle: "PHP developer ",
    companyName: "SH infotech",
    tags: "tags: React .js",
    offer: "Offer : 15 lpa",
    start: " Start Date: 15-06-24",
    exp: " 10 years experience",
  },
];
const Body = () => {
  return (
    <>
      <p>search</p>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {JobData.map((e) => {
            return (
              <>
                <div key={uuidv4()}>
                  <Card
                    jobTitle={e.jobTitle}
                    companyName={e.companyName}
                    tags={e.tags}
                    offer={e.offer}
                    start={e.start}
                    exp={e.exp}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

root.render(<AppLayout />);
