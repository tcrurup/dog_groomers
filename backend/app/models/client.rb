class Client < User

    #ASSOCIATIONS
    has_many :client_dogs
    has_many :dogs, 
        through: :client_dogs

    #FUNCTIONS
    def create_dog(dog_params={})
        Dog.create(dog_params).tap do |dog|
            self.dogs << dog
        end
    end

end