class Dog < ActiveRecord::Base

    #name (string) - The name of this Dog
    #sex (string) - The sex of this Dog, either 'Male' or 'Female'
    #weight (integer) - The weight of the dog in pounds
    #appointments (array) - A collection of Appointment objects for this Dog
    
    #ASSOCIATIONS
    has_many :appointments

    has_many :client_dogs
    has_many :owners, 
        through: :client_dogs,
        source: :client

    has_many :breed_dogs
    has_many :breeds,
        through: :breed_dogs

    def add_owner(client)
        self.owners << client
    end
end