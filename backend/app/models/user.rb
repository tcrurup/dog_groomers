class User < ActiveRecord::Base

    #username (string)   -This Users chosen username
    #first_name (string) -This Users first name
    #last_name (string)  -This Users last name

    #VALIDATIONS
    validates :username,
        presence: true,
        uniqueness: {
            message: " is already in user by another member"
        }

    validates :first_name,
        presence: true

    validates :last_name,
        presence: true   
    
    

end