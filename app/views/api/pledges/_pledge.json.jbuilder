json.extract! pledge, :id, :project_id, :amount, :delivery_date, :details

json.num_backers pledge.backs.count