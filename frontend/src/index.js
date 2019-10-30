const BASE_URL = "http://localhost:3000"
const LOGIN_URL = `${BASE_URL}/login`
const SIGNUP_URL = `${BASE_URL}/signup`

document.addEventListener('DOMContentLoaded', function(){
    fetch(LOGIN_URL)
    .then( response => response.json() )
    .then( object => {
       showLoginPage()
    })
    .catch( error => console.log(error) );
});

let showLoginPage = (event) => {
    if(event){ event.preventDefault() }
    clearMain()
    document.querySelector('main').appendChild(AppForms.login());
}

let showSignUpPage = (event) => {
    if(event){ event.preventDefault() }
    clearMain()
    document.querySelector('main').appendChild(AppForms.signup())
}

function clearMain(){
    document.querySelector('main').innerHTML = ''
}








