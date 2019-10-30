const BASE_URL = "http://localhost:3000"
const LOGIN_URL = `${BASE_URL}/login`

document.addEventListener('DOMContentLoaded', function(){
    fetch(LOGIN_URL)
    .then( response => response.json() )
    .then( object => {
        console.log(object)
    })
    .catch( error => console.log(error) );
});