// click event handler with deposit btn
document.getElementById('btn-deposit').addEventListener('click', function(){
    //  get the the deposit amount from the deposit input
    const depositAmount = document.getElementById('deposit-amount');
    const getNewDepositString = depositAmount.value;
    const getNewDeposit = parseFloat(getNewDepositString);

    //get the deposit total amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //total deposit calculate
    const currentDepositTotal = previousDepositTotal + getNewDeposit;
    depositTotalElement.innerText = currentDepositTotal;

    //get the balance total amount
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //total balance calculate
    const currentBalanceTotal = previousBalanceTotal + getNewDeposit;
    balanceTotalElement.innerText = currentBalanceTotal;
    

    // deposit input field clear 
    depositAmount.value = '';
});