class User{
    
    static userFormFields(){
        return{
            ...AppForms.usernameAndPasswordField(),
            'firstName': 'text',
            'lastName': 'text'
        }   
    }
}