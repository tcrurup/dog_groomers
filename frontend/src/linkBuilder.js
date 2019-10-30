class LinkBuilder{

    constructor(url){
        this.url = url
    }

    static hyperlink_to(url, text){
        return `<a href=${url}>${text}</a>`
    }
}