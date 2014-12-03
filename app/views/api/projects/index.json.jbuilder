json.array! (@projects) do |project|
  json.partial!('project', project: project, show_details: false)
end