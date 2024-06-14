import { useState } from "react"

const Comment= ()=>{
    
    const [name, setName]= useState("")
    const [message, setMessage]= useState("")
    const [data , setData]= useState(
        {
            name:" ",
            message:" "
        }
    )

    const [commentData,setcommentData]= useState(["dog" ,"cat"])
    
    return (
        <>
        <div className="flex flex-col gap-4">
            <input type="text" name="" id=""  className="border border-black w-52" placeholder="Enter the name" onChange={(em)=>{
                setData({...data,name:em.target.value})
            }}/>
            <textarea name="" id="" className="border w-52" placeholder="Enter the message"  onChange={(e)=>{
                e.target.value
                setData({...data,message:e.target.value})
            }}></textarea>
            <button className="bg-green-500 w-52" onClick={()=>{
                console.log(commentData)
            }}>Submit</button>
        </div>


        <div>
            <p>{data.name}</p>
            <p>{data.message}</p>
    
        </div>
        </>
    )

}


export default Comment