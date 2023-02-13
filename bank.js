// bank js interactive
document.getElementById('deposite-btn').addEventListener("click", function (){
  // get deposite input
  const deposite = document.getElementById('deposite');
  const depositeValue = deposite.value;
 const newDepositeValue = parseFloat(depositeValue);
 

deposite.value = ''

// add diposite input

const depositeDisplay = document.getElementById('deposite-amount');

const depositeDisplayValue = depositeDisplay.innerText;
const newDepositeDisplayValue = parseFloat(depositeDisplayValue)

  depositeDisplay.innerText = newDepositeValue + newDepositeDisplayValue;


// total amount

const totalAmount = document.getElementById('total-amount');
const totalAmountDisplay = totalAmount.innerText;
const newTotalAmountDisplay = parseFloat(totalAmountDisplay);

totalAmount.innerText = newTotalAmountDisplay + newDepositeValue

})


// widrow btn

document.getElementById('widrow-btn').addEventListener('click', function () {
const widrowInput = document.getElementById('widrow-input');
const widrowInputValue = widrowInput.value;
const newWidrowInputValu = parseFloat(widrowInputValue);
widrowInput.value = ''


const widrow = document.getElementById('widrow');
const widrowValue = widrow.innerText;
const newWidrowValue = parseFloat(widrowValue)

widrow.innerText = newWidrowInputValu + newWidrowValue;

// total

const totalAmount = document.getElementById('total-amount');
const totalAmountDisplay = totalAmount.innerText;
const newTotalAmountDisplay = parseFloat(totalAmountDisplay);

totalAmount.innerText = newTotalAmountDisplay - newWidrowInputValu
})