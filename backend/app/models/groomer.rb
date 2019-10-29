class Groomer < User

    #appointments (array) - A collection of Appointment objects for this Groomer
    
    #ASSOCIATIONS
    has_many :appointments
end