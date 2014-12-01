json.array! (@projects) do |project|
  json.partial!('project', project: project, show_pledges: false)
end