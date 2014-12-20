class ChangeNullsforProjects < ActiveRecord::Migration
  def change
    Project.all.each { |project| project.update(end_date: "2014-02-28") if project.end_date == nil }
    change_column_null :projects, :end_date, false
    Project.all.each { |project| project.update(goal_amount: 100) if project.goal_amount == nil }
    change_column_null :projects, :goal_amount, false
  end
end
