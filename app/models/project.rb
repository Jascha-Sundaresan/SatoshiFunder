class Project < ActiveRecord::Base
  validates :title, :user, :category, :blurb, :end_date, :goal_amount, presence: true
  validates :title, uniqueness: { 
    scope: :user_id, 
    message: "you already have a project with that name"
  }

  belongs_to :user
  belongs_to :category

  has_many :pledges

  has_many :backs, through: :pledges, source: :backs

  has_many :backers, through: :backs, source: :user

end

