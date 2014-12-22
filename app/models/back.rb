class Back < ActiveRecord::Base
  validates :user_id, :pledge_id, :amount, presence: true
  
  belongs_to :user

  belongs_to :pledge

  has_one :project, through: :pledge, source: :project

  def save
    super unless self.amount < self.pledge.amount
  end

end
