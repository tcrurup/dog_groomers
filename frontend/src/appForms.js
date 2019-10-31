class AppForms{

    static login(){

        let formElements = {
            'username': 'text',
            'password': 'password'
        }
        let form = new FormBuilder(formElements)
        
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
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
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
            .then(object => alert("Login Success!"))
            .catch(error => alert(error.message))
        }

        return form.addSubmitButtonAndFinalize(cbOnSubmit)
    }

    static signup(){
        let form_elements = {
            'username': 'text',
            'password': 'password',
            'firstName': 'text',
            'lastName': 'text'
        }
        let form = new FormBuilder(form_elements)

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
                username: document.getElementById('username').value,
                password_digest: document.getElementById('password').value,
                first_name: document.getElementById('firstName').value,
                last_name: document.getElementById('lastName').value
            }

            let config = {
                method: "POST",
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                }
            }

            fetch(CLIENT_URL, config)
            .then(response => response.json())
            .then(object => console.log(object))
            .catch(error => alert(error.message))
        }

        return form.addSubmitButtonAndFinalize(cbOnSubmit)
    }



    

}