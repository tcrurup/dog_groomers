class CreateBreedDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :breed_dogs do |t|
      t.integer :breed_id
      t.integer :dog_id
    end
  end
end
