class AppForms{

    static usernameAndPasswordField(){
        return {
            'username': 'text',
            'password': 'password'
        }
    }
    
    static login(){

        let form = new FormBuilder(LOGIN_URL, this.usernameAndPasswordField())
        
        form.createFooter(`Don't have an account?  `)
        form.footer.appendChild(new LinkBuilder('Sign up', showSignUpPage).link_to_callback())

        return form.addSubmitButtonAndFinalize()
    }

    static signup(){

        let form = new FormBuilder(CLIENT_URL, User.userFormFields())

        form.createFooter("Already have an account?  ")
        form.footer.appendChild(new LinkBuilder('Login', showLoginPage).link_to_callback())

        return form.addSubmitButtonAndFinalize()
    }

    static createLoginFields(){
        return{
            'username': 'text',
            'password': 'password'
        }   
    }

    
}

