 import { app,auth,createUserWithEmailAndPassword,db ,doc , setDoc,} from "./firebaseConfig.js"

/////////for check user login or not///////////////////
window.addEventListener('load',function(){
   
  const user = JSON.parse(localStorage.getItem("user"))
    if(user){
        window.location.replace("./dashbord.html")
        return
    }
   document.body.style.display = "block"
     
 
})
////////////////////////////////////////////////////////

const createAccountBtn = document.getElementById("createAccountBtn")
createAccountBtn.addEventListener("click",signup)

async function signup() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  createAccountBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>`
  createAccountBtn.style.pointerEvents = "none"
  if (!firstName.value || !lastName.value || !email.value || !password.value) {
    Swal.fire({
      title: 'Fill All The Fields',
      icon: 'warning',
      confirmButtonColor: '#ffc107',
      iconColor: '#ffc107'
    })
    createAccountBtn.innerHTML= "Create Account"
    createAccountBtn.style.pointerEvents = "auto"
    return;
  }
 
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then(async(userCredential) => {
     const uid = userCredential.user.uid
    let obj = {
      firstName : firstName.value,
      lastName : lastName.value,
      email : email.value,
      uid,
      profilePic: ""
    };
    const cityRef =  doc(db, 'users', uid);
    await setDoc(cityRef, obj);
    createAccountBtn.innerHTML= "Create Account"
    createAccountBtn.style.pointerEvents = "auto"
    window.location.replace("./index.html")
  })
  .catch((error) => {
    createAccountBtn.innerHTML= "Create Account"
    createAccountBtn.style.pointerEvents = "auto"
    if(error.message == "Firebase: Error (auth/invalid-email)."){
      Swal.fire({
        title: 'Invalid-Email',
        icon: 'warning',
        confirmButtonColor: 'red',
        iconColor: 'red'
      })
    }else if(error.message == "Firebase: Error (auth/email-already-in-use)."){
      Swal.fire({
        title: 'Email Already In Use',
        icon: 'warning',
        confirmButtonColor: 'red',
        iconColor: 'red'
      })
    }else if(error.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
      Swal.fire({
        title: 'Password should be at least 6 characters',
        icon: 'warning',
        confirmButtonColor: '#ffc107',
        iconColor: '#f15555',
      })
    }
  });
}
