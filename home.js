
const validPin = 1234

// function to get input value
function inputValue (id){
const inputFild = document.getElementById(id)
const inputFildValue = inputFild.value
const inputFildValuetNumber = parseInt(inputFildValue)
return inputFildValuetNumber
}

// no converted
function noCoverted (id){
  const inputFild = document.getElementById(id)
const inputFildValue = inputFild.value
return inputFildValue
}

// function to get inner text
function getInnerText(id){
const element = document.getElementById(id)
const elementValue = element.innerText
const elementValueNumber = parseInt(elementValue)
return elementValueNumber
}

// function to toggle
function henlerToggle (id){
  const forms = document.getElementsByClassName('form')

   for(const form of forms){
    form.style.display = 'none';
 }
 document.getElementById(id).style.display = 'block'
 
}

// function to set innerText
function setInnerText (value){
  const availableBalanceElement = document.getElementById('Available-balance')
  availableBalanceElement.innerText = value
}
// add money feature

document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault()
    const bank =document.getElementById('bank').value
const accountNumber = noCoverted('account-number')
   const addAmount = inputValue('add-amount')
   const pinNumber = inputValue('add-pin-number')
let availableBalance = getInnerText('Available-balance')
if(accountNumber.length <  11){
alert('Please provide account number');    
return;
}
if(pinNumber !== validPin){
alert('Please provide correct pin number');
     return;
}
   const toatalNewAvailableBalance = addAmount+availableBalance
   console.log(toatalNewAvailableBalance);
   setInnerText(toatalNewAvailableBalance)

}) 

// cash out feature
document.getElementById('Withdraw-btn')
.addEventListener('click',function(e){
e.preventDefault()
const amount = parseInt(inputValue('withdraw-amount'));
const availableBalance = getInnerText('Available-balance')
const agentNumber = noCoverted('Agent-Number')
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
setInnerText(toatalNewAvailableBalance)
})
  //  Transfer Money

  document.getElementById('send-btn')
  .addEventListener('click',function(e){
   e.preventDefault()
   const accoundNumbet = document.getElementById('user-account-numbe').value
   const amount = inputValue('amount-transfer')
   const pinNumber = document.getElementById('pin-number').value
   const availableBalance = getInnerText('Available-balance')
   if(accoundNumbet.length < 11){
    alert('Please provide agent number');
    return
}

if(pinNumber != validPin){
     alert('Please provide pin number')
     return;
}
 const toatalNewAvailableBalance = availableBalance - amount
 setInnerText(toatalNewAvailableBalance)
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
     const amountPay = inputValue('amount-pay')
const pinNumber = document.getElementById('pin-Number').value;
    
    let balenceElement = getInnerText('Available-balance')
       if(billerAccountNumber.length < 11){
        
    alert('Please provide Account number');
    return
}
const toatalNewAvailableBalance = amountPay + balenceElement
   setInnerText(toatalNewAvailableBalance)

if(PinNumber != validPin){
     alert('Please provide pin number')
     return;
}
  })

// togglink feature

// add money
document.getElementById('add-button')
.addEventListener('click',function(){
henlerToggle('add-money-parent')
})
// Cash-out-button
document.getElementById('Cash-out-button')
.addEventListener('click',function(){
  henlerToggle("Cash-out-parent")
    
})
// transfer-money
document.getElementById('transfer-btutton')
.addEventListener('click', function(){
  henlerToggle("transfer-money-parent")
   
})

// bounas
document.getElementById('bonus-button')
.addEventListener('click', function(){
   henlerToggle("coupone-parent")
   
})
    //  pay bill 
document.getElementById('pay-button')
.addEventListener('click', function(){
  henlerToggle("Pay-Bill-parent")
    
})