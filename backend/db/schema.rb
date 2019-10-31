# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_31_003835) do

  create_table "appointment_grooming_tasks", force: :cascade do |t|
    t.integer "appointment_id"
    t.integer "grooming_task_id"
  end

  create_table "appointments", force: :cascade do |t|
    t.integer "groomer_id"
    t.integer "dog_id"
  end

  create_table "breed_dogs", force: :cascade do |t|
    t.integer "breed_id"
    t.integer "dog_id"
  end

  create_table "breeds", force: :cascade do |t|
    t.string "name"
  end

  create_table "client_dogs", force: :cascade do |t|
    t.integer "client_id"
    t.integer "dog_id"
  end

  create_table "clients", force: :cascade do |t|
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "sex"
    t.integer "weight"
  end

  create_table "groomers", force: :cascade do |t|
  end

  create_table "grooming_tasks", force: :cascade do |t|
    t.string "task_name"
    t.string "description"
    t.integer "base_price"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "type"
    t.string "password_digest"
  end

end
