class FormRow{

    constructor(){
        this.header = document.createElement('th')
        this.data = document.createElement('td')
    }

    asFormInput(type, name){
        this.header.appendChild(this.createFormLabel(name))
        this.data.appendChild(this.createFormInput(type, name))
        let row = document.createElement("tr")
        row.appendChild(this.header)
        row.appendChild(this.data)
        return row
    }

    asElementBlock(element){
        this.data.setAttribute('colspan', '2')
        this.data.appendChild(element)
        let row = document.createElement("tr")
        row.appendChild(this.data)
        return row
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



}