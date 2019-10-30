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
    form.addInputElement('text', 'username')
    form.addInputElement('password', 'password')
    mainNode.appendChild(form.finalize())
}

class FormBuilder{

    constructor(action, method){
        let element = document.createElement("form") 
        element.action = action
        element.method = method

        let table = document.createElement("table")
        element.appendChild(table)
        
        this.form = element
        this.form_table = table
    }

    addInputElement(type, name){
        let form_row = document.createElement('tr')
        let form_header = document.createElement('th')
        let form_data = document.createElement('td')

        let label = document.createElement("label")
            label.for = name
            label.innerHTML = `${FormBuilder.capitalize(name)}: `

        let input = document.createElement("input")
            input.type = type
            input.id = name
            input.name = name

        form_header.appendChild(label)
        form_data.appendChild(input)

        form_row.appendChild(form_header)
        form_row.appendChild(form_data)

        this.form_table.appendChild(form_row)
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

