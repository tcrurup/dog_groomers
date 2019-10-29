class CreateClientDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :client_dogs do |t|
      t.integer :client_id
      t.integer :dog_id
    end
  end
end
