
const validPin = 1234
// add money feature

document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault()
    const bank =document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
   const addAmount = parseInt(document.getElementById('add-amount').value)
const pinNumber = parseInt(document.getElementById('pin-Number').value);
   console.log(bank,accountNumber,addAmount,pinNumber);
   const availableBalance = parseInt( document.getElementById('Available-balance').innerText)

if(accountNumber.length < 11 ){
    alert('Pleaase provide accound number');
    return
}
if(pinNumber != validPin){
    alert('Pleaase provide pin number')
     return;
}
   const toatalNewAvailableBalance = addAmount+availableBalance
   document.getElementById('Available-balance').innerText= toatalNewAvailableBalance;

}) 

// cash out feature
document.getElementById('Withdraw-btn')
.addEventListener('click',function(e){
e.preventDefault()
const amount = parseInt(document.getElementById('withdraw-amount').value)
const availableBalance = parseInt( document.getElementById('Available-balance').innerText)
const agentNumber = document.getElementById('Agent-Number').value
const pinNumber = document.getElementById('pin-Number').value
if(agentNumber.length < 11){
    alert('Please provide agent number');
    return
}

if(pinNumber != validPin){
     alert('Please provide pin number')
     return;
}
const toatalNewAvailableBalance = availableBalance - amount
document.getElementById('Available-balance').innerText = toatalNewAvailableBalance
})

// togglink feature
document.getElementById('add-button')
.addEventListener('click',function(){
  document.getElementById('Cash-out-parent').style.display='none'
  document.getElementById('add-money-parent').style.display = 'block'
})
document.getElementById('Cash-out-button')
.addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display = 'none'
  document.getElementById('Cash-out-parent').style.display='block'
  
})