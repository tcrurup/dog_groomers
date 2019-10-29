class User < ActiveRecord::Base

    #username   -This Users chosen username
    #first_name -This Users first name
    #last_name  -This Users last name
    
    #ASSOCIATIONS
    has_many :user_dogs
    has_many :dogs, 
        through: :user_dogs

    #FUNCTIONS
    def create_dog(dog_params={})
        Dog.create(dog_params).tap do |x|
            self.dogs << x
        end
    end

end