//Global variables
const popUpCard = document.querySelector('.pop-up');
const dismissBtn = document.querySelector('#dismiss-btn');
const mainImg = document.querySelector('.main-img');
const wrapper = document.querySelector('.wrapper');
const inputElement = document.querySelector('#input');
const popUpBtn = document.querySelector('.btn');

//Map the 'enter' key to submit and bring up the popUp
inputElement.addEventListener('keyup', (event) =>{
    if (event.key === 'Enter') {
        popUpBtn.click();
    }
})

//media query
function changeSrc(){
    //change the source of the image 
    if (window.innerWidth <= 768) {
        mainImg.src = 'assets/images/illustration-sign-up-mobile.svg';
        console.log('The screen size is less than 768px');
    }else{
        console.log('The screen size has exceeded 768px');
    }
}

//pop-up1
function popUp(){
    const warningMsg = document.querySelector('#warning-msg');
    //Get the value entered into the input bar
    const actualEmail = document.querySelector('#actual_email');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let inputValue = inputElement.value;
    
    //change the email value to the input value
    actualEmail.innerText = inputValue;

    //make the pop-up appear
    if (emailRegex.test(inputValue)) {
        popUpCard.style.display = 'block';
        console.log('it works!');
    } else {
        warningMsg.style.display = 'block';
        inputElement.classList.add('input-warning');
        console.log('you typing BS');
    }
}

//remove pop-up
function dismiss(){
    popUpCard.style.display = 'none';
}