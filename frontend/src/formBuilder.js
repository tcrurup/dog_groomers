class FormBuilder{

    
    constructor(action, method){
        this.form = document.createElement('form')
        this.formTable = document.createElement('table')
        this.form.appendChild(this.formTable)
        this.formRows = [];
        return this
    }

    //**********FUNCTIONS**********

    addInputElement(type, name){        
        this.formRows.push(new FormRow().asFormInput(type, name))
    }

    addElementBlock(element){        
        this.formRows.push(new FormRow().asElementBlock(element))
    }    

    finalize(cbOnSubmit){
        this._appendAllRowsToTable()
        let element = document.createElement('button')
        element.innerHTML = 'Submit'
        element.addEventListener('click', cbOnSubmit)
        this.form.appendChild(element)
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