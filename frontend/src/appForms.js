class AppForms{

    static login(){

        const formElements = {
            'username': 'text',
            'password': 'password'
        }
        let form = new FormBuilder(formElements)
        
        form.createFooter(`Don't have an account?  `)
        form.footer.appendChild(new LinkBuilder('Sign up', showSignUpPage).link_to_callback())

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

        const form_elements = {
            'username': 'text',
            'password': 'password',
            'firstName': 'text',
            'lastName': 'text'
        }

        let form = new FormBuilder(form_elements)

        form.createFooter("Already have an account?  ")
        form.footer.appendChild(new LinkBuilder('Login', showLoginPage).link_to_callback())

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