json.array! (@categories) do |category|
  json.partial!('category', category: category, show_projects: false)
end