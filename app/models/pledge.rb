class Pledge < ActiveRecord::Base
	validates :project, :amount, :delivery_date, :details, presence: true

	belongs_to :project
end