const BASE_URL = "http://localhost:3000"
const LOGIN_URL = `${BASE_URL}/login`
const SIGNUP_URL = `${BASE_URL}/signup`

document.addEventListener('DOMContentLoaded', function(){
    fetch(LOGIN_URL)
    .then( response => response.json() )
    .then( object => {
        showLogInPage()
    })
    .catch( error => console.log(error) );
});

function showLogInPage(){
    document.querySelector('main').appendChild(AppForms.login());
}








