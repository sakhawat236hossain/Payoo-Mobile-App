document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 11851121472
  const pinNumber = 1234
  // mobile Number input
  const mobileNumberVlue = document.getElementById("mobile-number").value
  const mobileNumberVlueConverted = parseInt(mobileNumberVlue);
  // pin Number input
  const pinNumberVlue = document.getElementById("pin-number").value
  const pinNumberVlueConverted = parseInt(pinNumberVlue);
  console.log(mobileNumberVlueConverted,pinNumberVlueConverted);
  if(mobileNumberVlueConverted===mobileNumber&&pinNumberVlueConverted===pinNumber){
   window.location.href="./home.html"
  }else{
    alert('Invalid credentials');
  }
});
