class AppForms{

    static login(){
        let form = new FormBuilder(LOGIN_URL, "POST")
        form.addInputElement('text', 'username')
        form.addInputElement('password', 'password')
        form.addStringBreak(`Don't have an account? ${LinkBuilder.hyperlink_to(SIGNUP_URL, 'Sign up!')}`)

        let cbOnSubmit = event => {

            event.preventDefault();
            let formData = {
                username: "username",
                password: "password"
            }

            let config = {
                method: "POST",
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                }
            }

            fetch(LOGIN_URL, config)
            .then(response => response.json())
            .then(object => console.log(object))
            .catch(error => alert(error.message))
        }

        return form.finalize(cbOnSubmit)
    }

    static signup(){

    }

}