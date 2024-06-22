import JobCard from "../JobCard/JobCard";
import DummyData from "../API/DummyData";


import { v4 as uuidv4 } from "uuid";
const Body = () => {
    return (
      <>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {DummyData.map((e) => {
              return (
                <>
                  <div key={uuidv4()}>
                    <JobCard
                      jobTitle={e.jobTitle}
                      companyName={e.companyName}
                      tags1={e.tags1}
                      tags2={e.tags2}
                      tags3={e.tags3}
                      tags4={e.tags4}
                      tags5={e.tags5}
                      tags6={e.tags6}
                      offer={e.offer}
                      start={e.start}
                      open={e.open}
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

  export default Body