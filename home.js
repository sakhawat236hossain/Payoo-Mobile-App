
const validPin = 1234

document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault()
    const bank =document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
   const addAmount = parseInt(document.getElementById('add-amount').value)
   const pinNumber = parseInt(document.getElementById('add-pin-number').value)
   console.log(bank,accountNumber,addAmount,pinNumber);
   const availableBalance = parseInt( document.getElementById('Available-balance').innerText)
//    console.log(availableBalance);
if(accountNumber.length < 11 ){
    alert('Pleaase provide accound number');
    return
}
if(pinNumber !== validPin){
    alert('Pleaase provide pin number')
     return;
}
   const toatalNewAvailableBalance = addAmount+availableBalance
   document.getElementById('Available-balance').innerText= toatalNewAvailableBalance;

}) 