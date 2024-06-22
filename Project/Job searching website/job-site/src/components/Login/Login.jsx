import { useState } from "react";
import { useForm} from "react-hook-form"

const Login= ()=> {
   
    const { register, handleSubmit } = useForm(

    )
    const onSubmit =()=>{
        console.log(name , age)
    }

    
  return (
    <>
    <div className="border border-black p-3 w-[50%]">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="border border-red-500 h-10 flex gap-2 items-center">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Enter a name" onChange={(e)=>{
           {register("name")}
        }}/>

        </div>
        <div className="border border-red-500 flex gap-2 items-center">
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" placeholder="Enter a age" onChange={(e)=>{
           {register("age")}
        }}/>

        </div>

        

        <button type="submit" className="px-5 py-2 bg-green-500">Submit</button>
      </form>

    </div>
    </>
  );
}

export default Login;
