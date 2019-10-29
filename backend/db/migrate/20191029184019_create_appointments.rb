class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.integer :groomer_id
      t.integer :dog_id
    end
  end
end
