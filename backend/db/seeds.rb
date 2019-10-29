# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
USERS = [
    {
        username: "trurup",
        first_name: "Tony",
        last_name: "Rurup"
    },
    {
        username: "jkomperda",
        first_name: "Jen",
        last_name: "Komperda"
    }

]

GROOMERS = [
    {
        username: "bkomperda",
        first_name: "Jane",
        last_name: "Komperda"
    }
]

DOGS = [
    {
        name: "Bolt",
        sex: "Male",
        weight: 70 
    },
    {
        name: "Ebony",
        sex: "Female",
        weight: 55
    }
]

tony = Client.create(USERS[0])
jen = Client.create(USERS[1])
jane = Groomer.create(GROOMERS[0])

DOGS.each do |dog|
    dog = tony.create_dog(dog)
    dog.owners << jen
end

Appointment.create(groomer_id: jane.id, dog_id: tony.dogs.first.id)
