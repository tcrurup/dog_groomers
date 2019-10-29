class Dog < ActiveRecord::Base

    #name (string)    - The name of this Dog
    #sex (string)     - The sex of this Dog, either 'Male' or 'Female'
    #weight (integer) - The weight of the dog in pounds
    
    #ASSOCIATIONS
    has_many :user_dogs
    has_many :users, 
        through: :user_dogs
end