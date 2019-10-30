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


class LinkBuilder{

    constructor(url){
        this.url = url
    }

    static hyperlink_to(url, text){
        return `<a href=${url}>${text}</a>`
    }
}

class AppForms{

    static login(){
        let form = new FormBuilder(LOGIN_URL, "POST")
        form.addInputElement('text', 'username')
        form.addInputElement('password', 'password')
        form.addStringBreak(`Don't have an account? ${LinkBuilder.hyperlink_to(SIGNUP_URL, 'Sign up!')}`)

        let cbOnSubmit = event => {

            event.preventDefault();
            let formData = {
                username: "username",
                password: "password"
            }

            let config = {
                method: "POST",
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                }
            }

            fetch(LOGIN_URL, config)
            .then(response => response.json())
            .then(object => console.log(object))
            .catch(error => alert(error.message))
        }

        return form.finalize(cbOnSubmit)
    }

    static signup(){

    }

}

class FormBuilder{

    
    constructor(action, method){
        this.newForm(action, method)
        this.formElements = [];
        return this
    }

    addInputElement(type, name){
        let form_row = document.createElement('tr')
        let row_header = document.createElement('th')
        let row_data = document.createElement('td')
        

        row_header.appendChild(this.createFormLabel(name))
        row_data.appendChild(this.createFormInput(type, name))
        

        form_row.appendChild(row_header)
        form_row.appendChild(row_data)
        
        this.formElements.push(form_row)
    }

    addStringBreak(string){
        let form_row = document.createElement('tr')
        let form_data = document.createElement('td')

        form_data.setAttribute('colspan', '2')
        form_data.innerHTML = string
        form_data.className = 'stringBreak'

        form_row.appendChild(form_data)
        
        this.formElements.push(form_row)
    }

    createFormLabel(name){
        let label = document.createElement("label")
            label.for = name
            label.innerHTML = `${FormBuilder.capitalize(name)}: `
        return label
    }

    createFormInput(type, name){
        let input = document.createElement("input")
            input.type = type
            input.id = name
            input.name = name
        return input
    }

    finalize(cbOnSubmit){
        this.formElements.forEach(element => {this.form_table.appendChild(element)})
        let element = document.createElement('button')
        element.innerHTML = 'Submit'
        element.addEventListener('click', cbOnSubmit)
        this.form.appendChild(element)
        return this.form
    }

    newForm(formAction, formMethod){
        let element = document.createElement("form") 
        element.action = formAction
        element.method = formMethod
        this.form = element
        this.setFormTable()
    }

    setFormTable(){
        this.form_table = document.createElement("table")
        this.form.appendChild(this.form_table)
    }

    static capitalize(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    }    
}

