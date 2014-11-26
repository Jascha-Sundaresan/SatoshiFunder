class Project < ActiveRecord::Base
  validates :title, :user, :category, presence: true
  validates :title, uniqueness: true

  belongs_to :user
  belongs_to :category
end

