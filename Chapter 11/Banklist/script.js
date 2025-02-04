'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const createUserName = function(accs){
  accs.forEach(acc=>{
    acc.username = acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
  })
}
createUserName(accounts)
console.log(accounts)

const displayMovements = function(movements,sort=false){
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov,i){
      const type = mov>0 ? 'deposit' : 'withdrawal';
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
      `
      containerMovements.insertAdjacentHTML('afterbegin',html);
    })
}


const calcPrintBalance = function(acc){
  acc.balance = acc.movements.reduce((acc,cur)=>acc+cur);
  labelBalance.textContent = `${acc.balance} ৳`;
}



const calcDisplaySummary = function(acc){
  const income = acc.movements.filter(cur=>cur>0).reduce((acc,cur)=>acc+cur,0);
  labelSumIn.textContent = `${income} ৳`;
  const expense = acc.movements.filter(cur=>cur<0).reduce((acc,cur)=>acc+cur,0);
  labelSumOut.textContent = `${expense} ৳`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int=>int>0)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}৳`;

}
const updateUI = function(acc){
  displayMovements(acc.movements)

  calcPrintBalance(acc);

  calcDisplaySummary(acc);
}

let currentAccount;

btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  currentAccount = accounts.find(acc=>acc.username===inputLoginUsername.value)

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    console.log(currentAccount)

    labelWelcome.textContent = `Welcome back ${currentAccount.owner}`
    containerApp.style.opacity = 100

    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()

    updateUI(currentAccount);

  }
  else{
    console.log('Login failed')
  } 
})

btnTransfer.addEventListener('click',function(e){
    e.preventDefault();
    const amount = Number(inputTransferAmount.value)
    const receiverAcc = accounts.find(acc=>acc.username===inputTransferTo.value)

    inputTransferAmount.value = inputTransferTo.value ='';

    console.log(amount,receiverAcc)

    if(amount > 0 && receiverAcc && currentAccount.balance >= amount &&
      receiverAcc.username !== currentAccount.username
    ){
      console.log('Transfer valid')
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      updateUI(currentAccount);
    }
})

btnLoan.addEventListener('click',function(e){
   e.preventDefault();
   const amount = Number(inputLoanAmount.value)
   if(amount>0 && currentAccount.movements.some(mov=> mov >= amount*0.1)) {
      currentAccount.movements.push(amount);
      updateUI(currentAccount)
   }
   else{
      console.log('Invalid amount')
   }
   inputLoanAmount.value = '';
})

btnClose.addEventListener('click',function(e){
  e.preventDefault();
  const pin = Number(inputClosePin.value)
  const deleteAcc = inputCloseUsername.value;

  if(deleteAcc===currentAccount.username && pin===currentAccount.pin){
    const index = accounts.findIndex(acc=>acc.username===currentAccount.username);
    console.log(index)
    accounts.splice(index,1)
    containerApp.style.opacity = 0
  }
  else{
    console.log("Wrong Info")
  }
  inputCloseUsername.value = inputClosePin.value = '';

})

btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,true);
});


const overalBalance = accounts.map(acc=>acc.movements).flat().reduce((acc,mov)=>acc+mov,0)
console.log(overalBalance)


const overalBalance2 = accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+mov,0)
console.log(overalBalance2)
