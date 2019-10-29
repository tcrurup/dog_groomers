class CreateAppointmentGroomingTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :appointment_grooming_tasks do |t|
      t.integer :appointment_id
      t.integer :grooming_task_id
    end
  end
end
