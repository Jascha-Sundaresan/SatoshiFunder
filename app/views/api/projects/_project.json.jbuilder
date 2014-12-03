json.extract! project, :id, :title, :user_id, :goal_amount, :end_date, :category_id, :img_url, :created_at, :updated_at

json.user do
  json.partial! 'api/users/user', user: project.user
end

json.num_backers project.backers.count

json.total_pledged project.backs.inject(0) { |sum, back| sum + back.amount }

if show_details
  json.pledges do
    json.array!(project.pledges) do |pledge|
      json.partial! 'api/pledges/pledge', pledge: pledge
    end
  end

  json.backers do
    json.array!(project.backers) do |backer|
      json.partial! 'api/users/user', user: backer
    end
  end
end

