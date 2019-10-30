class FormBuilder{

    
    constructor(action, method){
        this.newForm(action, method)
        this.formElements = [];
        return this
    }

    addInputElement(type, name){        
        this.formElements.push(new FormRow().asFormInput(type, name))
    }

    addElementBlock(element){        
        this.formElements.push(new FormRow().asElementBlock(element))
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