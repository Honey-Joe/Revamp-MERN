let pass=document.getElementById("pass")
let conirm=document.getElementById("confirm")
let err=document.getElementById("err")
let errcon=document.getElementById("errcon")
let form=document.getElementById("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(pass.value==""){
        err.textContent="*Requrired"
        err.style.color="red"
    }
    else{
        err.textContent=""
      
    }
    if(conirm.value==""){
        errcon.textContent="*Requrired"
        errcon.style.color="red"
    }
    else{
        errcon.textContent=""
     
    }

})
