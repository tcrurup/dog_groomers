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

    addElementBlock(element){
        let form_row = document.createElement('tr')
        let form_data = document.createElement('td')

        form_data.setAttribute('colspan', '2')
        form_data.appendChild(element)
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