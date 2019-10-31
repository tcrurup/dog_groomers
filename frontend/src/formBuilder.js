class FormBuilder{

    
    constructor(formElements){
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
        this
    }

    addElementBlock(element){        
        this.formRows.push(new FormRow().asElementBlock(element))
        this
    }
    
    addSubmitButton(callback){
        let element = document.createElement('button')
        element.innerHTML = 'Submit'
        element.addEventListener('click', callback)
        this.form.appendChild(element) 
        return element;
    }

    addUserFields(){

    }

    addSubmitButtonAndFinalize(cbOnSubmit){
        this._appendAllRowsToTable()
        this.addSubmitButton(cbOnSubmit)       
        return this.form
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