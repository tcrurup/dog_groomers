class Appointment < ActiveRecord::Base
    
    #ASSOCIATIONS
    belongs_to :groomer
    belongs_to :dog

    has_many :appointment_grooming_tasks
    has_many :grooming_tasks,
        through: :appointment_grooming_tasks
end