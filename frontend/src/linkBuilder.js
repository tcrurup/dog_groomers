class LinkBuilder{

    constructor(text, callback){
        this.text = text
        this.callback = callback
    }

    link_to_callback(){
        let link = document.createElement('a')
        link.innerHTML = this.text
        link.href=''
        link.addEventListener('click', this.callback)
        return link
    }
}