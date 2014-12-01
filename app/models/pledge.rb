class Pledge < ActiveRecord::Base
	validates :project, :amount, :delivery_date, :details, presence: true

	belongs_to :project

  has_many :backs

  has_many :backers, through: :backs, source: :user
end