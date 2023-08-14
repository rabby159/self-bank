// click event handler with login btn
document.getElementById('btn-submit').addEventListener('click', function(){
    //get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const getEmail = emailField.value;
    

    // get password & set id on the html element & get the element & get the value from the element
    const passwordField = document.getElementById('user-password');
    const getPassword = passwordField.value;
    
    
    //verify email and password (do not use farther)
    if(getEmail === 'selfbank24@gmail.com' && getPassword === 'mybank'){
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }
});
