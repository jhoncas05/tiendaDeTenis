import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonSalir=document.getElementById("btnsalir")
botonSalir.addEventListener("click",function(evento){
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}).catch((error) => {
  // An error happened.
});
})

