class GroomingTask < ActiveRecord::Base

    has_many :appointment_grooming_tasks
    has_many :appointments,
        through: :appointment_grooming_tasks
end