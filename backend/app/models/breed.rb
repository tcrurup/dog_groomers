class Breed < ActiveRecord::Base
    has_many :breed_dogs
    has_many :dogs, 
        through: :breed_dogs
end