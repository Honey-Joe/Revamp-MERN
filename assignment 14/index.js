let para=document.getElementById("fetch")

const fetchData = ()=>{
    try{
        const ans= fetch("https://baconipsum.com/api/?type=all")
        ans.then((res)=>{
            return res.json()
        }).then((data)=>{
            para.textContent=data
        })
    }
    catch(err){
        para.textContent="error"
    }
}
fetchData()