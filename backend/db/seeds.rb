# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
BREEDS = [
    {name: "American Staffordshire Terrier"},
    {name: "Labrador Retreiver"},
    {name: "Husky"}
]

USERS = [
    {
        username: "trurup",
        password: "tactics",
        first_name: "Tony",
        last_name: "Rurup"
    },
    {
        username: "jkomperda",
        password: "bolt",
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

GROOMING_TASKS = [
    {
        task_name: "Nails",
        description: "Cut dog's nails and smooth finish",
        base_price: 10
    },
    {
        task_name: "Bathe",
        description: "Wash, dry, and brush the dog",
        base_price: 10
    }
]

Breed.create(BREEDS)
GROOMING_TASKS.each do |task|
    GroomingTask.create(task)
end

tony = Client.create(USERS[0])
jen = Client.create(USERS[1])
jane = Groomer.create(GROOMERS[0])

DOGS.each do |dog|
    dog = tony.create_dog(dog)
    dog.add_owner(jen)
end

jane.create_appointment(tony.dogs[0], GroomingTask.all)

