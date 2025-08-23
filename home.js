
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
   let availableBalance = parseInt( document.getElementById('Available-balance').innerText)

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
  //  Transfer Money

  document.getElementById('send-btn')
  .addEventListener('click',function(e){
   e.preventDefault()
   const accoundNumbet = document.getElementById('user-account-numbe').value
   const amount = parseInt(document.getElementById('amount-transfer').value)
   const pinNumber = document.getElementById('pin-number').value
   const availableBalance = parseInt(document.getElementById('Available-balance').innerText)
   if(accoundNumbet.length < 11){
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

  // Bounas section
  document.getElementById('coupone-btn')
  .addEventListener('click',function(e){
     e.preventDefault()
    const couponeInput = document.getElementById('coupone-input').value
    const balenceElement = document.getElementById('Available-balance')
    let availableBalance = parseInt(balenceElement.innerText)

    if(couponeInput === ('BONUS500')){
    availableBalance =  availableBalance+500
    
    balenceElement.innerText =availableBalance
    
    }
      alert('Please provide your cuopone')
     return;
  
  })

  // pay Bill section
  document.getElementById('pay-btn')
  .addEventListener('click',function(e){
     e.preventDefault();

     const selectPayBank = document.getElementById('bank-bill').value
     const billerAccountNumber = document.getElementById('bill-account-number').value
     const amountPay = parseInt(document.getElementById('amount-pay').value)
     const PinNumber = document.getElementById('pin-number').value
    let balenceElement = parseInt(document.getElementById('Available-balance').innerText);
       if(billerAccountNumber.length < 11){
        
    alert('Please provide Account number');
    return
}
const toatalNewAvailableBalance = amountPay + balenceElement
   document.getElementById('Available-balance').innerText= toatalNewAvailableBalance;

if(PinNumber != validPin){
     alert('Please provide pin number')
     return;
}
  })

// togglink feature

// add money
document.getElementById('add-button')
.addEventListener('click',function(){
  document.getElementById('Cash-out-parent').style.display='none'
  document.getElementById('add-money-parent').style.display = 'block'
})
// Cash-out-button
document.getElementById('Cash-out-button')
.addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display = 'none'
  document.getElementById('Cash-out-parent').style.display='block'
  
})
// transfer-money
document.getElementById('transfer-btutton')
.addEventListener('click', function(){
    document.getElementById('Cash-out-parent').style.display='none'
  document.getElementById('add-money-parent').style.display = 'none'
  document.getElementById('transfer-money-parent').style.display= 'block'
})

// bounas
// document.getElementById('bonus-button')
// .addEventListener('click', function(){
//     document.getElementById('Cash-out-parent').style.display='none'
//   document.getElementById('add-money-parent').style.display = 'none'
//   document.getElementById('transfer-money-parent').style.display= 'none'
//   document.getElementById('coupone-parent').style.display = 'block'
// })
    //  pay bill 
// document.getElementById('pay-button')
// .addEventListener('click', function(){
//     document.getElementById('Cash-out-parent').style.display='none'
//   document.getElementById('add-money-parent').style.display = 'none'
//   document.getElementById('transfer-money-parent').style.display= 'none'
//   document.getElementById('coupone-parent').style.display = 'none'
//   document.getElementById('Pay-Bill-parent').style.display = 'block'
// })