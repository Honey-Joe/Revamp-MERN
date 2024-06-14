var form=document.getElementById("contact-form")
var name_form=document.getElementById('name')
var email=document.getElementById('email')
var msg=document.getElementById("msg")

var e_name=document.getElementById("error-name")
var e_email=document.getElementById('error-email')
var e_msg=document.getElementById("error-msg")



const saveTodb = (name_form,email,msg) =>{
    console.log(name_form,email,msg)
    const firebaseConfig = {
      apiKey: "AIzaSyCkwrvla7M8opITVLhdrEA5HQ5rz97GhJ0",
      authDomain: "revamp-mern.firebaseapp.com",
      databaseURL: "https://revamp-mern-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "revamp-mern",
      storageBucket: "revamp-mern.appspot.com",
      messagingSenderId: "405374174851",
      appId: "1:405374174851:web:697757b5d20c4145ec7db6"
    };

    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref("ReqForm");
 
var newRef = db.push();

newRef.set(
  {
    name_form : name_form,
    email : email,
    msg: msg
  }
);
    
      
}
 
form.addEventListener("submit", (e) => {
    e.preventDefault()
    saveTodb(name_form.value,email.value,msg.value)

})