const BASE_URL = "http://localhost:3000"
const LOGIN_URL = `${BASE_URL}/login`

document.addEventListener('DOMContentLoaded', function(){
    fetch(LOGIN_URL)
    .then( response => response.json() )
    .then( object => {
        showLogInPage()
    })
    .catch( error => console.log(error) );
});

function showLogInPage(){
    let mainNode = document.querySelector('main');
    let form = new FormBuilder(LOGIN_URL, "POST")
    form.addInputElement('text', 'user_name')
    form.addInputElement('password', 'user_password')
    mainNode.appendChild(form.finalize())
}

class FormBuilder{

    constructor(action, method){
        let element = document.createElement("form") 
        element.action = action
        element.method = method
        this.form = element
    }

    addInputElement(type, name){
        let element = document.createElement("input")
        element.type = type
        element.id = name
        element.name = name
        this.form.appendChild(element)
    }

    finalize(){
        let element = document.createElement('button')
        element.type = 'submit'
        element.innerHTML = 'Submit'
        this.form.appendChild(element)
        return this.form
    }
}

