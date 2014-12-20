class AddBlurbToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :blurb, :string
    Project.all.each { |project| project.update!(blurb: "Default Blurb") }
    change_column_null :projects, :blurb, false
  end
end
