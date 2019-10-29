class Appointment < ActiveRecord::Base
    
    #ASSOCIATIONS
    belongs_to :groomer
    belongs_to :dog
end