class AppForms{

    static login(){
        let form = new FormBuilder(LOGIN_URL, "POST")
        form.addInputElement('text', 'username')
        form.addInputElement('password', 'password')
        
        let formFooter = document.createElement('span')
        formFooter.innerHTML = "Don't have an account?  "
        
        let signUp = document.createElement('a')
        signUp.innerHTML = 'Sign up!'
        signUp.href=''
        signUp.addEventListener('click', showSignUpPage)

        formFooter.appendChild(signUp)

        form.addElementBlock(formFooter)

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
        let form = new FormBuilder(SIGNUP_URL, "POST")
        form.addInputElement('text', 'username')
        form.addInputElement('password', 'password')

        let formFooter = document.createElement('span')
        formFooter.innerHTML = "Already have an account?  "

        let login = document.createElement('a')
        login.innerHTML = 'Login'
        login.href=''
        login.addEventListener('click', showLoginPage)

        formFooter.appendChild(login)
        form.addElementBlock(formFooter)

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

    
    

}