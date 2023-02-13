
document.getElementById('login-btn').addEventListener("click",function(){
  // get user email
  const userEmail = document.getElementById("user-email");
  // get user eamil value
  const userEmailValue = userEmail.value;
 
  // get user passwoard
  const userPasswoard = document.getElementById("user-passwoard");
  // get user passwoard avlue
  const userPasswoardValue = userPasswoard.value;


  // condition

    if(userEmailValue == "bank@gmail.com" && userPasswoardValue == "Bank123"){
      window.location.href = "http://127.0.0.1:5500/bank.html"
    } else{
      alert("Provide Valid Info")
    }
})


