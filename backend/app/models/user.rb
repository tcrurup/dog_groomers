class User < ActiveRecord::Base

    #username (string)   -This Users chosen username
    #first_name (string) -This Users first name
    #last_name (string)  -This Users last name
    
    #ASSOCIATIONS
    has_many :user_dogs
    has_many :dogs, 
        through: :user_dogs

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
    
    #FUNCTIONS
    def create_dog(dog_params={})
        #Creates a new Dog object with given params and associates it with this User
        Dog.create(dog_params).tap do |x|
            self.dogs << x
        end
    end

end