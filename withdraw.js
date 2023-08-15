// click event handler with withdraw btn
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //  get the the withdraw amount from the withdraw input
    const withdrawAmount = document.getElementById('withdraw-amount');
    const getNewWithdrawString = withdrawAmount.value;
    const getNewWithdraw = parseFloat(getNewWithdrawString);
    if(isNaN(getNewWithdraw)){
        alert('Please provide a valid amount');
        return withdrawAmount.value = '';
    }

     //get the withdraw total amount
     const withdrawTotalAmount = document.getElementById('withdraw-total');
     const previousWithdrawTotalString = withdrawTotalAmount.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

     

    //get the balance total amount
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(getNewWithdraw > previousBalanceTotal){
        alert('Influence balance')
        return withdrawAmount.value = '';
    }
    
    //total withdraw calculate
    const currentWithdrawTotal = previousWithdrawTotal + getNewWithdraw;
    withdrawTotalAmount.innerText = currentWithdrawTotal;


    //total balance calculate
    const currentBalanceTotal = previousBalanceTotal - getNewWithdraw;
    balanceTotalElement.innerText = currentBalanceTotal;
    

     // deposit input field clear 
     withdrawAmount.value = '';
})
