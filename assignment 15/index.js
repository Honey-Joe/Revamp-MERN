let para=document.getElementById("fetch")

const fetchData = async()=>{
    try{
        const res=await fetch("https://baconipsum.com/api/?type=all")
        const data = await res.json()
        para.textContent=data
    }
    catch(err){
        para.textContent="error"
    }
}
fetchData()