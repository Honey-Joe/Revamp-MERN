let pass=document.getElementById("pass")
let conirm=document.getElementById("confirm")
let err=document.getElementById("err")
let errcon=document.getElementById("errcon")
let form=document.getElementById("form")

const saveToDb =(pass, conirm) =>{

    console.log(pass,conirm)

    const firebaseConfig = {
        apiKey: "AIzaSyCrVVRpNNXJB91yKfQVRzT8zdHz8QE7Vak",
        authDomain: "assignment-12-e5e71.firebaseapp.com",
        databaseURL: "https://assignment-12-e5e71-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "assignment-12-e5e71",
        storageBucket: "assignment-12-e5e71.appspot.com",
        messagingSenderId: "957655582176",
        appId: "1:957655582176:web:c75092f6fcfd4b6d6e9785"
      };

      firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref("ReqForm");
 
var newRef = db.push();

newRef.set(
  {
    pass : pass,
    conirm : conirm,
  }
);
}


const validate = (pass , conirm) => {
    console.log(pass,conirm)
    if(pass==""){
        err.textContent="Required"
        err.style.color="red"
    }
    else{
        err.textContent=""
    }


    if(conirm==""){
        errcon.textContent="Required"
        errcon.style.color="red"
    }
    else{
        errcon.textContent=" "
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()

  
    
    validate(pass.value,conirm.value)

    saveToDb(pass.value,conirm.value)


})
  
