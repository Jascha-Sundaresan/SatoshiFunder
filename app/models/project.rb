class Project < ActiveRecord::Base
  validates :title, :user, :category, presence: true
  validates :title, uniqueness: true

  belongs_to :user
  belongs_to :category

  has_many :pledges

  has_many :backs, through: :pledges, source: :backs

  has_many :backers, through: :backs, source: :user

end

