class AppointmentGroomingTask < ActiveRecord::Base

    belongs_to :appointment
    belongs_to :grooming_task

end