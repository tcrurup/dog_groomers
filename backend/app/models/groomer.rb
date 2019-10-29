class Groomer < User

    # appointments (array) - A collection of Appointment objects for this Groomer
    
    #ASSOCIATIONS
    has_many :appointments

    def create_appointment(dog, task_array)
        Appointment.create(
            groomer_id: self.id, 
                dog_id: dog.id
        ).tap do |appointment|    
            task_array.each do |task|
                appointment.grooming_tasks << task
            end
        end
    end
end