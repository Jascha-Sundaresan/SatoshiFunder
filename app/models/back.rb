class Back < ActiveRecord::Base
  validates :user, :pledge, presence: true
  
  belongs_to :user
  belongs_to :pledge
end
