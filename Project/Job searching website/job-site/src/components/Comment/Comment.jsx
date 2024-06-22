import { useState } from "react";

const Comment = () => {


  const [data, setData] = useState([
    {
      name: " ",
      message: " ",
    },
  ]);

  const [commentdata, setCommentdata] = useState([
    {
      name: "",
      message: "",
    },
  ]);
  return (
    <>
      <div className="w-[50%] flex flex-col gap-5">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
          className="border border-black"
        />

        <textarea
          name=""
          id=""
          rows="2"
          cols=" 5"
          onChange={(e) => {
            
            setData({ ...data, message: e.target.value });
          }}
          className="border border-black"
        ></textarea>

        <button
          onClick={() => {

            // setCommentdata([data])

            setCommentdata((items) => [...items, data]);
            console.log(commentdata)
          }}
        >
          Submit
        </button>
      </div>

      <div>
        {commentdata.map((e) => {
          return (
            <>
              <p>{e.name}</p>
              <p>{e.message}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Comment;
