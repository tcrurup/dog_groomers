class Client < User

    #ASSOCIATIONS
    has_many :client_dogs
    has_many :dogs, 
        through: :client_dogs

    #FUNCTIONS
    def create_dog(dog_params={})
        #Creates a new Dog object with given params and associates it with this Client
        Dog.create(dog_params).tap do |x|
            self.dogs << x
        end
    end

end