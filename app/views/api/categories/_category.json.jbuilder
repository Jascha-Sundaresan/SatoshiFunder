json.extract! category, :id, :name

if show_projects
  json.projects do
    json.array!(category.projects) do |project|
      json.partial! 'api/projects/project', project: project, show_pledges: false
    end
  end
end