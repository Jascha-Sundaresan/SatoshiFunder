class Project < ActiveRecord::Base
  validates :title, :user, presence: true
  validates :title, uniqueness: true

  belongs_to :user
end

