class FormBuilder{

    
    constructor(action, formElements){
        this.action = action
        this.form = document.createElement('form')
        this.formTable = document.createElement('table')
        this.form.appendChild(this.formTable)
        this.formRows = [];
        Object.keys(formElements).forEach( key => {
            this.addInputElement(key, formElements[key])
        });
        return this
    }

    //**********FUNCTIONS**********

    addInputElement(name, type){        
        this.formRows.push(new FormRow().asFormInput(type, name))
        return this
    }

    addElementBlock(element){        
        this.formRows.push(new FormRow().asElementBlock(element))
        return this
    }
    
    addSubmitButton(callback){
        let element = document.createElement('button')
        element.innerHTML = 'Submit'
        element.addEventListener('click', callback)
        this.form.appendChild(element) 
        return this
    }

    addSubmitButtonAndFinalize(){
        this.addElementBlock(this.footer)
        this._appendAllRowsToTable()

        let cbOnSubmit = event => {

            event.preventDefault();

            let config = {
                method: "POST",
                body: this.getFormDataAsJSON(),
                headers:{
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                }
            }

            fetch(this.action, config)
            .then(response => response.json())
            .then(object => {
                if(object.error){
                    alert(object.exception);
                }
            })
            .catch(error => alert(error.message))
        }

        this.addSubmitButton(cbOnSubmit)               
        return this.form
    }

    createFooter(string){
        let element = document.createElement('span')
        element.innerHTML = string
        this.footer = element
    }

    getFormDataAsJSON(){
        let elements = document.querySelectorAll('input')
        let data = {}
        elements.forEach( element => {
            data[element.name] = element.value
        })
        return JSON.stringify(data)
    }


    //**********STATIC**********

    static capitalize(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    } 
    
    //**********'PRIVATE'**********

    _appendAllRowsToTable(){
        this.formRows.forEach( element => {
            this.formTable.appendChild(element)
        });
    }
}