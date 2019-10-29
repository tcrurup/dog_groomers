class Dog < ActiveRecord::Base

    #name (string)    - The name of this Dog
    #sex (string)     - The sex of this Dog, either 'Male' or 'Female'
    #weight (integer) - The weight of the dog in pounds
    
    #ASSOCIATIONS
    has_many :client_dogs
    has_many :clients, 
        through: :client_dogs
end