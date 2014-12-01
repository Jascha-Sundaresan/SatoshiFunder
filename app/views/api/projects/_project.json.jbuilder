json.extract! project, :id, :title, :user_id, :goal_amount, :end_date, :category_id, :img_url, :created_at, :updated_at

if show_pledges
  json.pledges do
    json.array!(project.pledges) do |pledge|
      json.partial! 'api/pledges/pledge', pledge: pledge
    end
  end
end