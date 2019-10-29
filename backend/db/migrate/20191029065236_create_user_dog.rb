class CreateUserDog < ActiveRecord::Migration[6.0]
  def change
    create_table :user_dogs do |t|
      t.integer :user_id
      t.integer :dog_id
    end
  end
end
