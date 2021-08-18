
// handliing main
function updateCaseNumber(product, price, isIncrease) {
    // debugger
    const caseElement = document.getElementById(product + '-number')
    let caseNumber = caseElement.value
    if (isIncrease) {
        caseNumber = parseInt(caseNumber) +1
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1
    }
    caseElement.value = caseNumber
    const caseTotal = document.getElementById(product + '-total')
    caseTotal.innerText = caseNumber * price
    calculateTotal()
}

//get number from input string
function getNumberIntoInput(product) {
    const theInput = document.getElementById(product + '-number')
    const theInputValue = theInput.value
    const theInputNumber = parseInt(theInputValue)
    return theInputNumber
}

//calculate finally
function calculateTotal() {
    const phoneQuantity = getNumberIntoInput('phone') * 1219
    const caseQuantity = getNumberIntoInput('case') * 118
    const subTotal = phoneQuantity + caseQuantity
    const tax = subTotal / 10
    const totalAmount = subTotal + tax
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = totalAmount
    
}
//mobile handale
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false)
})

// case handle
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', 59, false)
})

















/* function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
}) */