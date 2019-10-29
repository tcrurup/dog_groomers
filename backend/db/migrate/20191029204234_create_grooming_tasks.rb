class CreateGroomingTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :grooming_tasks do |t|
      t.string :task_name
      t.string :description
      t.integer :base_price
    end
  end
end
