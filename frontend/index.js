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
    let mainNode = document.querySelector('main');
    let form = new FormBuilder(LOGIN_URL, "POST")
    form.addInputElement('text', 'username')
    form.addInputElement('password', 'password')
    form.addStringBreak(`Don't have an account? ${LinkBuilder.hyperlink_to(SIGNUP_URL, 'Sign up!')}`)
    mainNode.appendChild(form.finalize())
}


class LinkBuilder{

    constructor(url){
        this.url = url
    }

    static hyperlink_to(url, text){
        return `<a href=${url}>${text}</a>`
    }
}

class FormBuilder{

    
    constructor(action, method){
        let element = document.createElement("form") 
        element.action = action
        element.method = method

        let table = document.createElement("table")
        element.appendChild(table)
        
        this.form = element;
        this.form_table = table;
        return this
    }



    addInputElement(type, name){
        let form_row = document.createElement('tr')
        let form_header = document.createElement('th')
        let form_data = document.createElement('td')
        

        form_header.appendChild(this.createFormLabel(name))
        form_data.appendChild(this.createFormInput(type, name))
        
        let row_data = [form_header, form_data]
        row_data.forEach( element =>{ form_row.appendChild(element) })
        
        this.form_table.appendChild(form_row)
    }

    addStringBreak(string){
        let form_row = document.createElement('tr')
        let form_data = document.createElement('td')

        form_data.colspan = 2;
        form_data.innerHTML = string

        form_row.appendChild(form_data)
        
        this.form_table.appendChild(form_row)
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

    finalize(){
        let element = document.createElement('button')
        element.type = 'submit'
        element.innerHTML = 'Submit'
        this.form.appendChild(element)
        return this.form
    }

    static capitalize(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    }    
}

